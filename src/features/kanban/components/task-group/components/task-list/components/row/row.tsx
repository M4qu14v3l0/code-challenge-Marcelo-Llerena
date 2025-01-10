import { formatEstimatePoints } from "@/features/kanban/utils/format-estimate-points";
import { formatDateCustom } from "@/features/kanban/utils/formatDate";
import { capitalizeText } from "@/features/kanban/utils/capitalize-text";
import Tag from "@/features/kanban/components/shared/tag/tag";
import styles from "./row.module.css";
import { TaskFieldsFragment } from "@/api/get-tasks/get-tasks.generated";
import Avatar from "@/components/ui/avatar/avatar";

interface RowProps {
  task: TaskFieldsFragment;
}

export default function Row({ task }: RowProps) {
  return (
    <div className={styles.row}>
      <div className={`${styles.childRow} ${styles.nameRow}`}>
        {task.position.toString().padStart(2, "0")} {task.name}
      </div>
      <div className={`${styles.childRow} ${styles.tagRow}`}>
        {<Tag key={task.tags[0]} text={task.tags[0]} variant={task.tags[0]} />}
        {task.tags.length > 1 ? (
          <Tag text={`+ ${task.tags.length - 1}`} variant="default" />
        ) : (
          <></>
        )}
      </div>
      <div className={`${styles.childRow} ${styles.pointsEstimateRow}`}>
        {formatEstimatePoints(task.pointEstimate)} Points
      </div>
      <div className={`${styles.childRow}`}>
        <Avatar src={task.assignee?.avatar} height="32px" width="32px" />{" "}
        {task.assignee?.fullName}
      </div>
      <div className={`${styles.childRow} ${styles.dueDateRow}`}>
        {capitalizeText(formatDateCustom(task.dueDate))}
      </div>
    </div>
  );
}
