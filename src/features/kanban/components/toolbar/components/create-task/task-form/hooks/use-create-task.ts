import { useCreateTaskMutation } from "@/api/create-task/create-task.generated";
import { GetTasksDocument } from "@/api/get-tasks/get-tasks.generated";
import { TaskFormValues } from "../schema/task-squema";
import { Status } from "@/__generated__/types";

export const useCreateTask = () => {
  const [createTask, { loading, error }] = useCreateTaskMutation({
    refetchQueries: [GetTasksDocument],
  });

  const create = async (formData: TaskFormValues) => {
    return createTask({
      variables: {
        input: {
          status: Status.Todo,
          name: formData.name,
          pointEstimate: formData.pointEstimate,
          assigneeId: formData.assignee,
          tags: formData.tags,
          dueDate: formData.dueDate.toISOString(),
        },
      },
    });
  };

  return { create, loading, error };
};
