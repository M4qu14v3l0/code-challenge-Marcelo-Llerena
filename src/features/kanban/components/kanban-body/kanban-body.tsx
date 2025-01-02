import styles from "./kanban-body.module.css";

import { ReactNode } from "react";

interface KanbanBodyProps {
  children: ReactNode;
}

export const KanbanBody = ({ children }: KanbanBodyProps) => {
  return <div className={styles.kanbanBody}>{children}</div>;
};
