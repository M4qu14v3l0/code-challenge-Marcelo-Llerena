import { useGetTasksQuery } from "@/features/kanban/api/get-tasks.generated";
import styles from "./kanban-section.module.css";
import Loader from "@/components/ui/loader/loader";
import MessageByStatus from "@/features/kanban/components/shared/message-by-status/message-by-status";
import KanbanTaskCard from "../kanban-task-card/kanban-task-card";
import { Status } from "@/__generated__/types";
// import { useKanbanContext } from "../../provider/use-kanban-context";
import { hasData } from "../../utils/has-data";

interface SectionDataProps {
  title: string;
  status: Status;
}

export const KanbanSection = ({ title, status }: SectionDataProps) => {
  const { loading, error, data } = useGetTasksQuery({
    variables: { input: { status } },
  });
  // const { viewMode } = useKanbanContext();
  const isEmpty = hasData(data?.tasks);
  if (loading) return <Loader />;
  if (error) return <h1>Error</h1>;
  if (isEmpty)
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title} (0)</h2>
        <MessageByStatus status={status} />
      </div>
    );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title} ({data?.tasks.length})
      </h2>
      <div className={styles.section}>
        {data?.tasks.map((task) => (
          <KanbanTaskCard
            key={task.id}
            id={task.id}
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
};
