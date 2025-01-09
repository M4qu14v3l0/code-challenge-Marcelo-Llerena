import { ViewMode } from "@/features/kanban/interfaces/kanban.interfaces";
import styles from "./table-header.module.css";

export default function TableHeader({ viewMode }: { viewMode: ViewMode }) {
  return (
    <div
      className={`${viewMode === "board" ? styles.displayNone : styles.row}`}
    >
      <div className={styles.childRow}># Task Name</div>
      <div className={styles.childRow}>Task Tags</div>
      <div className={styles.childRow}>Estimate</div>
      <div className={styles.childRow}>Task Assign Name</div>
      <div className={styles.childRow}>DueDate</div>
    </div>
  );
}
