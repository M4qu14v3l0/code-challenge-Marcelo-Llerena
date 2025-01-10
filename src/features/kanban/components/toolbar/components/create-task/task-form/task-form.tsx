import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskFormValues, TaskSchema } from "./schema/task-squema";
import { useCreateTask } from "./hooks/use-create-task";
import FormView from "./components/form-view/form-view";
import { PointEstimate, TaskTag } from "@/__generated__/types";
import { useUpdateTask } from "@/hooks/use-update-task";
import dayjs from "dayjs";
import {
  handleErrorToast,
  handleSuccessToast,
} from "@/components/ui/toasts/toasts";

interface Task {
  id: string;
  title: string;
  pointsEstimate: PointEstimate;
  dueDate: Date;
  assigneeId: string;
  tags: TaskTag[];
}

interface TaskFormProps {
  task?: Task;
}

export default function TaskForm({ task }: TaskFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(TaskSchema),
    defaultValues: task
      ? {
          name: task.title,
          pointEstimate: task.pointsEstimate,
          assignee: task.assigneeId,
          tags: task.tags,
          dueDate: dayjs(task.dueDate).toDate(),
        }
      : {
          tags: [],
        },
  });

  const { create } = useCreateTask();
  const { update } = useUpdateTask();

  const onSubmit: SubmitHandler<TaskFormValues> = async (formData) => {
    if (task) {
      try {
        await update(task.id, formData);
        handleSuccessToast("Task updated successfully!");
      } catch (error) {
        console.log(error);
        handleErrorToast("Failed to update task. Please try again.");
      }
    } else {
      try {
        await create(formData);
        handleSuccessToast("Task created successfully!");
      } catch (error) {
        console.log(error);
        handleErrorToast("Failed to create task. Please try again.");
      }
    }
  };

  return (
    <FormView
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );
}
