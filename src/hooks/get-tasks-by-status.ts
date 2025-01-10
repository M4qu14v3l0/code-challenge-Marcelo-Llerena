import { TaskFieldsFragment } from "@/features/kanban/api/get-tasks/get-tasks.generated";
import { useMemo } from "react";

export const useGetTasksByStatus = (tasks: TaskFieldsFragment[]) => {
  const tasksByStatus = useMemo(() => {
    return tasks.reduce(
      (acc, task) => {
        acc[task.status] = [...(acc[task.status] || []), task];
        return acc;
      },
      {
        BACKLOG: [] as TaskFieldsFragment[],
        TODO: [] as TaskFieldsFragment[],
        IN_PROGRESS: [] as TaskFieldsFragment[],
        DONE: [] as TaskFieldsFragment[],
        CANCELLED: [] as TaskFieldsFragment[],
      }
    );
  }, [tasks]);

  return { tasksByStatus };
};
