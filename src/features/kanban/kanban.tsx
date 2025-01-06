import { ReactNode, useState } from "react";
import { KanbanContext } from "./provider/use-kanban-context";
import { Toolbar } from "./components/toolbar/toolbar";
import { Layout } from "./components/layout/layout";
import { TaskGroup } from "./components/task-group/task-group";
import { ViewMode } from "./interfaces/kanban.interfaces";
import styles from "./kanban.module.css";

interface KanbanProps {
  children: ReactNode;
}

export default function Kanban({ children }: KanbanProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("board");

  return (
    <KanbanContext.Provider value={{ viewMode, setViewMode }}>
      <div className={styles.kanban}>{children}</div>
    </KanbanContext.Provider>
  );
}

Kanban.Toolbar = Toolbar;
Kanban.Layout = Layout;
Kanban.TaskGroup = TaskGroup;
