import { TaskFieldsFragment } from "@/api/get-tasks/get-tasks.generated";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import styles from "./task-card.module.css";
import CardHeader from "./components/card-header/card-header";
import CardSubHeader from "./components/card-subheader/card-subheader";
import CardTagList from "./components/card-tag-list/card-tag-list";
import CardFooter from "./components/card-footer/card-footer";
import EditPop from "./components/edit-pop/edit-pop";

interface TaskCardProps {
  task: TaskFieldsFragment;
}

export default function TaskCard({ task }: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: { type: task.__typename, status: task.status, task: task },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  if (isDragging) {
    return (
      <div className={styles.skeletonCard} ref={setNodeRef} style={style}>
        <div className={styles.skeletonCardShimmer} />
      </div>
    );
  }

  return (
    <div className={styles.cardContainer}>
      <EditPop
        id={task.id}
        assigneeId={task.assignee?.id || ""}
        title={task.name}
        tags={task.tags}
        pointsEstimate={task.pointEstimate}
        dueDate={task.dueDate}
      />
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        className={styles.card}
      >
        <CardHeader title={task.name} />
        <CardSubHeader date={task.dueDate} points={task.pointEstimate} />
        <CardTagList tags={task.tags} />
        <CardFooter avatar={task.assignee?.avatar} />
      </div>
    </div>
  );
}
