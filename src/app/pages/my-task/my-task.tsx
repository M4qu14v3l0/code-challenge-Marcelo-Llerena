import { Status } from "@/__generated__/types";

import { useKanbanTasks } from "@/hooks/use-kanban-tasks";
import Kanban from "@/features/kanban/kanban";
import { useGetProfile } from "@/hooks/use-get-profile";

export default function MyTaskPage() {
  const { profileData } = useGetProfile();
  const { tasksByStatus } = useKanbanTasks({ assigneeId: profileData?.id });

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
