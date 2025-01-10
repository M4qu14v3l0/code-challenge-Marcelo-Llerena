import { useUpdateTaskMutation } from "../../../../../api/update-task/update-task.generated";
import { Status } from "@/__generated__/types";

export const useSyncServerOnDrop = () => {
  const [updateTask, { loading, error }] = useUpdateTaskMutation();

  const finalizeReorder = async (
    taskId: string,
    newStatus: Status,
    newPosition: number
  ) => {
    try {
      await updateTask({
        variables: {
          input: {
            id: taskId,
            status: newStatus,
            position: newPosition,
          },
        },
      });
    } catch (err) {
      console.error("Error updating task on server:", err);
    }
  };

  return { finalizeReorder, loading, error };
};
