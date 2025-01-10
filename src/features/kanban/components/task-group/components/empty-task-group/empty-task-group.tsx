import { ViewMode } from "@/features/kanban/interfaces/kanban.interfaces";
import styles from "./empty-task-group.module.css";
import MessageByStatus from "@/features/kanban/components/shared/message-by-status/message-by-status";

interface EmptyTaskGroupProps {
  viewMode: ViewMode;
  message: string;
  title: string;
}

export default function EmptyTaskGroup({
  viewMode,
  message,
  title,
}: EmptyTaskGroupProps) {
  return viewMode === "board" ? (
    <div className={styles.taskGroup}>
      <h2 className={styles.titleGroup}>{title} (0)</h2>
      <div className={styles.group}>
        <MessageByStatus message={message} variant="boardView" />
      </div>
    </div>
  ) : (
    <div className={styles.accordionEmpty}>
      <MessageByStatus message={message} variant="listView" />
    </div>
  );
}
