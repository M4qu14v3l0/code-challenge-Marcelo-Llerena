import { Status } from "@/__generated__/types";
import { useKanbanTasks } from "@/features/kanban/hooks/use-kanban-tasks";
import Kanban from "@/features/kanban/kanban";

export default function DashboardPage() {
  const { tasksByStatus, loading } = useKanbanTasks();

  if (loading) return <h1>Loading Tasks</h1>;

  return (
    <Kanban>
      <Kanban.Toolbar />
      <Kanban.Layout>
        {Object.entries(tasksByStatus).map(([status, tasks]) => (
          <Kanban.TaskGroup
            key={status}
            tasks={tasks}
            status={status as Status}
          />
        ))}
      </Kanban.Layout>
    </Kanban>
  );
}
