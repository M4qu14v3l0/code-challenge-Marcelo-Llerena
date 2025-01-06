import { GetTasksQuery } from "@/features/kanban/api/get-tasks/get-tasks.generated";
import { createContext, useContext } from "react";

interface TaskListContext {
  tasks: GetTasksQuery["tasks"];
  isOpenAccordion: boolean;
  setIsOpenAccordion: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useTaskListContext() {
  const context = useContext(TaskListContext);
  if (!context) {
    throw new Error(
      "useTaskListContext must be used within a TaskList component"
    );
  }

  return context;
}

export const TaskListContext = createContext<TaskListContext | undefined>(
  undefined
);
