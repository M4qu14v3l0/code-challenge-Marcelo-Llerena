import { useDeleteTaskMutation } from "@/features/kanban/api/delete-task/delete-task.generated";
import { GetTasksDocument } from "@/features/kanban/api/get-tasks/get-tasks.generated";

export const useDeleteTaskById = () => {
  const [deleteTask, { loading, error }] = useDeleteTaskMutation({
    refetchQueries: [GetTasksDocument],
  });

  const deleteTaskById = async (id: string) => {
    return deleteTask({
      variables: {
        input: {
          id,
        },
      },
    });
  };

  return { deleteTaskById, loading, error };
};
