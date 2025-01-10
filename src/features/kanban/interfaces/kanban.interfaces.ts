import {
  GetTasksQuery,
  TaskFieldsFragment,
} from "../../../api/get-tasks/get-tasks.generated";

export type ViewMode = "board" | "list";
export type Tasks = GetTasksQuery["tasks"];
export type Task = TaskFieldsFragment;
