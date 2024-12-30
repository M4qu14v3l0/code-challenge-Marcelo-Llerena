import styles from "./kanban.module.css";
import Card from "./components/card/card";
import { useGetTasksQuery } from "./api/get-tasks.generated";
import { Status } from "@/__generated__/types";

interface KanbanProps {
  title: string;
  status: Status;
}

export default function Kanban({ title, status }: KanbanProps) {
  const { error, data, loading } = useGetTasksQuery({
    variables: { input: { status } },
  });

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error</h1>;

  console.log(data);
  console.log(loading);

  return (
    <div>
      <h2 className={styles.title}>{title} (03)</h2>
      <div className={styles.column}>
        {data?.tasks.map((task) => (
          <Card title={task.name} date={task.dueDate} points={4} />
        ))}
      </div>
    </div>
  );
}
