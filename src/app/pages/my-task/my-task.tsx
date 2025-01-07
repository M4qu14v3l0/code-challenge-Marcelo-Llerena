import { Status } from "@/__generated__/types";
import { useGetProfile } from "@/features/kanban/hooks/use-get-profile";
import { useKanbanTasks } from "@/features/kanban/hooks/use-kanban-tasks";
import Kanban from "@/features/kanban/kanban";

export default function MyTaskPage() {
  const { profileId } = useGetProfile();
  const { completedTasks, inProgressTasks, todoTask } = useKanbanTasks({
    assigneeId: profileId,
  });

  return (
    <Kanban>
      <Kanban.Toolbar />
      <Kanban.Layout>
        <Kanban.TaskGroup
          title="Working"
          status={Status.Todo}
          tasks={todoTask}
        />
        <Kanban.TaskGroup
          title="In Progress"
          status={Status.InProgress}
          tasks={inProgressTasks}
        />
        <Kanban.TaskGroup
          title="Completed"
          status={Status.Done}
          tasks={completedTasks}
        />
      </Kanban.Layout>
    </Kanban>
  );
}
