import { Status } from "@/__generated__/types";
import { FilterProvider } from "@/app/provider/filter/filter";
import { useKanbanTasks } from "@/hooks/use-kanban-tasks";
import Kanban from "@/features/kanban/kanban";
import Loader from "@/components/ui/loader/loader";
import ErrorMessage from "@/components/ui/error-message/error-message";

export default function DashboardPage() {
  const { searchValue } = FilterProvider.useFilter();
  const { tasksByStatus, loading, error } = useKanbanTasks({
    name: searchValue,
  });

  if (loading) return <Loader />;
  if (error)
    return (
      <ErrorMessage message="Unable to load Kanban tasks. Please refresh or try again later." />
    );

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
