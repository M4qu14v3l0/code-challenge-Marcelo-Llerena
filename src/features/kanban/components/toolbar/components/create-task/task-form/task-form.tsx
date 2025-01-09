import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskFormValues, TaskSchema } from "./schema/task-squema";
import { useCreateTask } from "./hooks/use-create-task";
import FormView from "./components/form-view/form-view";
import { PointEstimate, TaskTag } from "@/__generated__/types";
import { useUpdateTask } from "@/features/kanban/components/task-group/components/task-card/hooks/use-update-task";
import dayjs from "dayjs";

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
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TaskForm({ task, setIsOpen }: TaskFormProps) {
  const { register, handleSubmit, control } = useForm<TaskFormValues>({
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
      await update(task.id, formData);
    } else {
      await create(formData);
    }
    setIsOpen(false);
  };

  return (
    <FormView
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
    />
  );
}
