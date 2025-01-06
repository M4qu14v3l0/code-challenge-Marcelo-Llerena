import { ReactNode } from "react";
import { useKanbanContext } from "../../provider/use-kanban-context";
import styles from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { viewMode } = useKanbanContext();

  return (
    <div
      className={`${viewMode === "board" ? styles.layout : styles.layoutList}`}
    >
      <div
        className={`${viewMode === "board" ? styles.displayNone : styles.row}`}
      >
        <div className={styles.childRow}># Task Name</div>
        <div className={styles.childRow}>Task Tags</div>
        <div className={styles.childRow}>Estimate</div>
        <div className={styles.childRow}>Task Assign Name</div>
        <div className={styles.childRow}>DueDate</div>
      </div>
      {children}
    </div>
  );
};
