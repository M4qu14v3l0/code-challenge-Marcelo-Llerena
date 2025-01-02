import { KanbanActionHeader } from "./components/kanban-action-header/kanban-action-header";
import { ViewMode } from "./interfaces/kanban.interfaces";
import styles from "./kanban.module.css";
import { ReactNode, useState } from "react";
import { KanbanContext } from "./provider/use-kanban-context";
import { KanbanBody } from "./components/kanban-body/kanban-body";
import { KanbanSection } from "./components/kanban-section/kanban-section";

interface KanbanProps {
  children: ReactNode;
}

export default function Kanban({ children }: KanbanProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("board");

  return (
    <KanbanContext.Provider value={{ viewMode, setViewMode }}>
      <div className={styles.kanban}>{children}</div>;
    </KanbanContext.Provider>
  );
}

Kanban.ActionHeader = KanbanActionHeader;
Kanban.Body = KanbanBody;
Kanban.Section = KanbanSection;
