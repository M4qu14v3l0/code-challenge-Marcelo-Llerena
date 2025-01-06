import styles from "./task-card.module.css";
import CardHeader from "./components/card-header/card-header";
import CardSubHeader from "./components/card-subheader/card-subheader";
import CardTagList from "./components/card-tag-list/card-tag-list";
import CardFooter from "./components/card-footer/card-footer";
import { TaskFragment } from "@/features/kanban/api/get-tasks/get-tasks.generated";

interface TaskCardProps {
  task: TaskFragment;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className={styles.card}>
      <CardHeader
        id={task.id}
        assigneeId={task.assignee?.id || ""}
        title={task.name}
        tags={task.tags}
        pointsEstimate={task.pointEstimate}
        dueDate={task.dueDate}
      />
      <CardSubHeader date={task.dueDate} points={task.pointEstimate} />
      <CardTagList tags={task.tags} />
      <CardFooter avatar={task.assignee?.avatar} />
    </div>
  );
}
