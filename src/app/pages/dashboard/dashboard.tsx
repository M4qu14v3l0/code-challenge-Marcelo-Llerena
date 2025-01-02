import { Status } from "@/__generated__/types";
import Kanban from "@/features/kanban/kanban";

export default function DashboardPage() {
  return (
    <Kanban>
      <Kanban.ActionHeader />
      <Kanban.Body>
        <Kanban.Section title="Working" status={Status.Todo} />
        <Kanban.Section title="In Progress" status={Status.InProgress} />
        <Kanban.Section title="Completed" status={Status.Done} />
      </Kanban.Body>
    </Kanban>
  );
}
