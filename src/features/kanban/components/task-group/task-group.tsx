import styles from "./task-group.module.css";
// import Loader from "@/components/ui/loader/loader";

import { Status } from "@/__generated__/types";
import { useKanbanContext } from "../../provider/use-kanban-context";
import TaskCard from "./components/task-card/task-card";
import TaskList from "./components/task-list/task-list";
import { useGetTasksByStatus } from "../../hooks/use-get-tasks-by-status";
import EmptyTaskGroup from "./components/empty-task-group/empty-task-group";

interface TaskGroupProps {
  title: string;
  status: Status;
}

export const TaskGroup = ({ title, status }: TaskGroupProps) => {
  const { isEmpty, tasks } = useGetTasksByStatus(status);
  const { viewMode } = useKanbanContext();

  if (isEmpty) {
    return <EmptyTaskGroup viewMode={viewMode} status={status} title={title} />;
  }

  if (viewMode === "board")
    return (
      <div className={styles.taskGroup}>
        <h2 className={styles.titleGroup}>
          {title} ({tasks.length})
        </h2>

        <div className={styles.group}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    );

  if (viewMode === "list")
    return (
      <TaskList tasks={tasks}>
        <TaskList.Header title={title} />
        <TaskList.TableBody />
      </TaskList>
    );
};
