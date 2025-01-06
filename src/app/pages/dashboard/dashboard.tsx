import { Status } from "@/__generated__/types";
import Kanban from "@/features/kanban/kanban";

export default function DashboardPage() {
  return (
    <Kanban>
      <Kanban.Toolbar />
      <Kanban.Layout>
        <Kanban.TaskGroup title="Working" status={Status.Todo} />
        <Kanban.TaskGroup title="In Progress" status={Status.InProgress} />
        <Kanban.TaskGroup title="Completed" status={Status.Done} />
      </Kanban.Layout>
    </Kanban>
  );
}
