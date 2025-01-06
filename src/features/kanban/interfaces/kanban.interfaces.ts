import {
  GetTasksQuery,
  TaskFragment,
} from "../api/get-tasks/get-tasks.generated";

export type ViewMode = "board" | "list";
export type Tasks = GetTasksQuery["tasks"];
export type Task = TaskFragment;
