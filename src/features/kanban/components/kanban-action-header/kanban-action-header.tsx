import styles from "./kanban-action-header.module.css";

import LinesIcon from "@/assets/svgs/lines.svg?react";
import SystemIcon from "@/assets/svgs/system.svg?react";
import AddIcon from "@/assets/svgs/plus.svg?react";
import { useKanbanContext } from "../../provider/use-kanban-context";

export const KanbanActionHeader = () => {
  const { viewMode, setViewMode } = useKanbanContext();
  return (
    <div className={styles.actionHeader}>
      <div className={styles.viewMode}>
        <div
          className={`
          ${styles.iconContainer}
          ${viewMode === "list" ? styles.selected : ""}
            `}
          onClick={() => setViewMode("list")}
        >
          <LinesIcon />
        </div>
        <div
          className={`
          ${styles.iconContainer}
          ${viewMode === "board" ? styles.selected : ""}
            `}
          onClick={() => setViewMode("board")}
        >
          <SystemIcon />
        </div>
      </div>
      <div className={styles.addButton}>
        <AddIcon />
      </div>
    </div>
  );
};
