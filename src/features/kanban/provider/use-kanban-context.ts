import { createContext, useContext } from "react";
import { ViewMode } from "../interfaces/kanban.interfaces";

interface KanbanContext {
  viewMode: ViewMode;
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
}

export function useKanbanContext() {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error("useKanbanContext must be used within a Kanban component");
  }
  return context;
}

export const KanbanContext = createContext<KanbanContext | undefined>(
  undefined
);
