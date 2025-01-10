import styles from "./task-group.module.css";
// import Loader from "@/components/ui/loader/loader";
import { useDroppable } from "@dnd-kit/core";
import { useKanbanContext } from "../../provider/use-kanban-context";
import TaskCard from "./components/task-card/task-card";
import TaskList from "./components/task-list/task-list";
import { SortableContext } from "@dnd-kit/sortable";

import EmptyTaskGroup from "./components/empty-task-group/empty-task-group";
import { Status } from "@/__generated__/types";
import { TaskFieldsFragment } from "../../../../api/get-tasks/get-tasks.generated";
import { hasData } from "../../utils/has-data";
import { statusColumnData } from "@/constants/status-column-data";

interface TaskGroupProps {
  status: Status;
  tasks: TaskFieldsFragment[];
}

export const TaskGroup = ({ tasks, status }: TaskGroupProps) => {
  const { setNodeRef } = useDroppable({
    id: status,
    data: { status: status, type: "Column", tasks: tasks.length },
  });

  const { viewMode } = useKanbanContext();
  const { title, emptyMessage } = statusColumnData[status];

  if (hasData(tasks)) {
    return (
      <div ref={setNodeRef}>
        <EmptyTaskGroup
          viewMode={viewMode}
          title={title}
          message={emptyMessage}
        />
      </div>
    );
  }

  if (viewMode === "board")
    return (
      <div className={styles.taskGroup}>
        <h2 className={styles.titleGroup}>
          {title} ({tasks.length})
        </h2>

        <div className={styles.group} ref={setNodeRef}>
          <SortableContext items={tasks}>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </SortableContext>
        </div>
      </div>
    );

  if (viewMode === "list")
    return (
      <TaskList tasks={tasks}>
        <TaskList.Header title={title} />
        <TaskList.TableBody />
      </TaskList>
    );
};
