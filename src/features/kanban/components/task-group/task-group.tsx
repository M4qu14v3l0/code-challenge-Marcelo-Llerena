import styles from "./task-group.module.css";
import Loader from "@/components/ui/loader/loader";
import MessageByStatus from "@/features/kanban/components/shared/message-by-status/message-by-status";

import { Status } from "@/__generated__/types";
import { useKanbanContext } from "../../provider/use-kanban-context";
import { hasData } from "../../utils/has-data";
import { useGetTasksQuery } from "../../api/get-tasks/get-tasks.generated";
import TaskCard from "./components/task-card/task-card";
import TaskList from "./components/task-list/task-list";

interface TaskGroupProps {
  title: string;
  status: Status;
}

export const TaskGroup = ({ title, status }: TaskGroupProps) => {
  const { loading, error, data } = useGetTasksQuery({
    variables: { input: { status } },
  });

  const { viewMode } = useKanbanContext();
  const isEmpty = hasData(data?.tasks);
  if (loading) return <Loader />;
  if (error) return <h1>Error</h1>;

  if (isEmpty)
    return (
      <div className={styles.taskGroup}>
        <h2 className={styles.titleGroup}>{title} (0)</h2>
        <div className={styles.group}>
          <MessageByStatus status={status} />
        </div>
      </div>
    );

  if (viewMode === "board")
    return (
      <div className={styles.taskGroup}>
        <h2 className={styles.titleGroup}>
          {title} ({data?.tasks.length})
        </h2>

        <div className={styles.group}>
          {data?.tasks.map((task) => (
            <TaskCard key={task.id} task={task || []} />
          ))}
        </div>
      </div>
    );
  if (viewMode === "list")
    return (
      <TaskList tasks={data?.tasks || []}>
        <TaskList.Header title={title} />
        <TaskList.TableBody />
      </TaskList>
    );
};
