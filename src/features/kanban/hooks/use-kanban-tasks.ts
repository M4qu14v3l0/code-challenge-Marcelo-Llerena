import { useGetTasksByStatus } from "@/hooks/get-tasks-by-status";
import { useGetTasksQuery } from "../api/get-tasks/get-tasks.generated";

interface UseKanbanTasksProps {
  assigneeId?: string;
}

export const useKanbanTasks = ({ assigneeId }: UseKanbanTasksProps = {}) => {
  const { loading, error, data } = useGetTasksQuery({
    variables: {
      input: {
        assigneeId: assigneeId || undefined,
      },
    },
  });

  const tasks = data?.tasks || [];
  const { tasksByStatus } = useGetTasksByStatus(tasks);

  return {
    tasksByStatus,
    loading,
    error,
  };
};
