import { useGetTasksQuery } from "../api/get-tasks/get-tasks.generated";

interface UseKanbanTasksProps {
  assigneeId?: string;
}

export const useKanbanTasks = ({ assigneeId }: UseKanbanTasksProps = {}) => {
  const { loading, error, data } = useGetTasksQuery({
    variables: { assigneeId },
  });

  return {
    todoTask: data?.todoTasks || [],
    inProgressTasks: data?.inProgressTasks || [],
    completedTasks: data?.completedTasks || [],
    loading,
    error,
  };
};
