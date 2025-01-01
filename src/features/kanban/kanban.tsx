import styles from "./kanban.module.css";
import Card from "./components/card/card";
import Loader from "@/components/ui/loader/loader";
import { Status } from "@/__generated__/types";
import { useGetTasksQuery } from "./api/get-tasks.generated";
import { hasData } from "./utils/has-data";
import MessageByStatus from "./components/message-by-status/message-by-status";

interface KanbanProps {
  title: string;
  status: Status;
}

export default function Kanban({ title, status }: KanbanProps) {
  const { error, data, loading } = useGetTasksQuery({
    variables: { input: { status } },
  });

  if (loading) return <Loader />;
  if (error) return <h1>Error</h1>;

  if (hasData(data?.tasks)) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title} (0)</h2>
        <div className={styles.column}>
          <MessageByStatus status={status} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title} ({data?.tasks.length})
      </h2>
      <div className={styles.column}>
        {data?.tasks.map((task) => (
          <Card
            title={task.name}
            date={task.dueDate}
            points={4}
            avatar={task.assignee?.avatar}
            tag={task.tags}
          />
        ))}
      </div>
    </div>
  );
}
