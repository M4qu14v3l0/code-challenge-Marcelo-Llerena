import { useGetTasksByStatus } from "@/hooks/get-tasks-by-status";
import { useGetTasksQuery } from "../api/get-tasks/get-tasks.generated";

interface UseKanbanTasksProps {
  assigneeId?: string;
  name?: string;
}

export const useKanbanTasks = ({
  assigneeId,
  name,
}: UseKanbanTasksProps = {}) => {
  const { loading, error, data, refetch } = useGetTasksQuery({
    variables: {
      input: {
        assigneeId: assigneeId || undefined,
        name: name || undefined,
      },
    },
  });

  const tasks = data?.tasks || [];
  const { tasksByStatus } = useGetTasksByStatus(tasks);

  return {
    tasksByStatus,
    loading,
    error,
    refetch,
  };
};
