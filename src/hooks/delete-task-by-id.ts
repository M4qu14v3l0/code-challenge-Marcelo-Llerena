import { useDeleteTaskMutation } from "@/api/delete-task/delete-task.generated";
import { GetTasksDocument } from "@/api/get-tasks/get-tasks.generated";

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
