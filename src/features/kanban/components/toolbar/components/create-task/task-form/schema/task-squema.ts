import { PointEstimate, TaskTag } from "@/__generated__/types";
import { z } from "zod";

export const TaskSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Task Name must be at least 5 characters long" })
    .max(36, { message: "Task Name must not exceed 20 characters" })
    .nonempty({ message: "Task Name is required" }),
  pointEstimate: z.nativeEnum(PointEstimate, {
    errorMap: () => ({
      message: "Select a valid point estimate",
    }),
  }),
  assignee: z.string(),
  tags: z
    .array(
      z.nativeEnum(TaskTag, {
        errorMap: () => ({
          message: "Select a valid tag",
        }),
      })
    )
    .min(1, { message: "Select at least one tag" }),
  dueDate: z.date().refine(
    (date) => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime());
    },
    { message: "The date must be a valid date" }
  ),
});

export type TaskFormValues = z.infer<typeof TaskSchema>;
