import { GetTasksDocument } from "@/features/kanban/api/get-tasks/get-tasks.generated";
import { useUpdateTaskMutation } from "@/features/kanban/api/update-task/update-task.generated";
import { TaskFormValues } from "@/features/kanban/components/toolbar/components/create-task/task-form/schema/task-squema";

export const useUpdateTask = () => {
  const [updateTask, { loading, error }] = useUpdateTaskMutation({
    refetchQueries: [GetTasksDocument],
  });

  const update = async (taskId: string, formData: TaskFormValues) => {
    return updateTask({
      variables: {
        input: {
          id: taskId,
          name: formData.name,
          pointEstimate: formData.pointEstimate,
          assigneeId: formData.assignee,
          tags: formData.tags,
          dueDate: formData.dueDate.toISOString(),
        },
      },
    });
  };

  return { update, loading, error };
};
