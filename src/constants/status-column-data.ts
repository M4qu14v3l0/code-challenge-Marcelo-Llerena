import { Status } from "@/__generated__/types";

export const statusColumnData: Record<
  Status,
  { emptyMessage: string; title: string }
> = {
  BACKLOG: {
    emptyMessage:
      "Your backlog is currently empty! Stay ready, more tasks are on their way.",
    title: "Backlog",
  },
  TODO: {
    emptyMessage:
      "No tasks assigned yet. Stay tuned for your upcoming assignments!",
    title: "To Do",
  },
  IN_PROGRESS: {
    emptyMessage:
      "No tasks in progress right now. Focus on starting your next work!",
    title: "In Progress",
  },
  DONE: {
    emptyMessage:
      "Great! No completed tasks for now. Get ready for your next tasks!",
    title: "Done",
  },
  CANCELLED: {
    emptyMessage:
      "There are no canceled tasks at the moment. Keep up the great work!",
    title: "Cancelled",
  },
};
