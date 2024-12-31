import Kanban from "@/features/kanban/kanban";
import styles from "./dashboard.module.css";
import { Status } from "@/__generated__/types";
import CreateTask from "@/features/create-task/create-task";

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <Kanban title="Working" status={Status.Todo} />
      <Kanban title="In Progress" status={Status.InProgress} />
      <Kanban title="Completed" status={Status.Done} />
      <CreateTask />
    </div>
  );
}
