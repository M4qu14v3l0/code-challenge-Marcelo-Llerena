import { Status } from "@/__generated__/types";
import { FilterProvider } from "@/app/provider/filter/filter";
import { useKanbanTasks } from "@/hooks/use-kanban-tasks";
import Kanban from "@/features/kanban/kanban";

export default function DashboardPage() {
  const { searchValue } = FilterProvider.useFilter();
  const { tasksByStatus, loading } = useKanbanTasks({
    name: searchValue,
  });

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
