import { Status } from "@/__generated__/types";

export const statusColumnData: Record<
  Status,
  { emptyMessage: string; title: string }
> = {
  IN_PROGRESS: {
    emptyMessage:
      "No tasks in progress right now. Focus on starting your next work!",
    title: "In Progress",
  },
  DONE: {
    emptyMessage:
      "Great! No completed tasks for now. Get ready for your next tasks!",
    title: "Completed",
  },
  TODO: {
    emptyMessage:
      "No tasks assigned yet. Stay tuned for your upcoming assignments!",
    title: "Working",
  },
  BACKLOG: {
    emptyMessage: "No Backlog Tasks",
    title: "Backlog",
  },
  CANCELLED: {
    emptyMessage: "No Cancelled Tasks",
    title: "Cancelled",
  },
};
