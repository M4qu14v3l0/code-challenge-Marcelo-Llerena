import { ViewMode } from "@/features/kanban/interfaces/kanban.interfaces";
import styles from "./empty-task-group.module.css";
import MessageByStatus from "@/features/kanban/components/shared/message-by-status/message-by-status";
import { Status } from "@/__generated__/types";

interface EmptyTaskGroupProps {
  title: string;
  status: Status;
  viewMode: ViewMode;
}

export default function EmptyTaskGroup({
  viewMode,
  title,
  status,
}: EmptyTaskGroupProps) {
  return viewMode === "board" ? (
    <div className={styles.taskGroup}>
      <h2 className={styles.titleGroup}>{title} (0)</h2>
      <div className={styles.group}>
        <MessageByStatus status={status} variant="boardView" />
      </div>
    </div>
  ) : (
    <div className={styles.accordionEmpty}>
      <MessageByStatus status={status} variant="listView" />
    </div>
  );
}
