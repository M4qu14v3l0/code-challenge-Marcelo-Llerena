import { Status } from "@/__generated__/types";
import { useGetProfile } from "@/features/kanban/hooks/use-get-profile";
import { useKanbanTasks } from "@/features/kanban/hooks/use-kanban-tasks";
import Kanban from "@/features/kanban/kanban";

export default function MyTaskPage() {
  const { profileId } = useGetProfile();
  const { tasksByStatus } = useKanbanTasks({ assigneeId: profileId });

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
