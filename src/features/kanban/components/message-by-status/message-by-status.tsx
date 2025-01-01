import { Status } from "@/__generated__/types";
import styles from "./message-by-status.module.css";

interface MessageByStatus {
  status: Status;
}

const statusMessages: Record<Status, string> = {
  IN_PROGRESS:
    "No tasks in progress right now. Focus on starting your next work!",
  DONE: "Great! No completed tasks for now. Get ready for your next tasks!",
  TODO: "No tasks assigned yet. Stay tuned for your upcoming assignments!",
  BACKLOG: "",
  CANCELLED: "",
};

export default function MessageByStatus({ status }: MessageByStatus) {
  const message = statusMessages[status];

  return (
    <div className={styles.container}>
      <p>{message}</p>
    </div>
  );
}
