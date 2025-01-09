import { ReactNode, useEffect, useMemo, useState } from "react";
import { useKanbanContext } from "../../provider/use-kanban-context";
import {
  DndContext,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import TableHeader from "../task-group/components/task-list/components/ui/table-header/table-header";
import styles from "./layout.module.css";
import { useLocalReorder } from "../../hooks/use-local-reorder";
import TaskCard from "../task-group/components/task-card/task-card";
import { TaskFieldsFragment } from "../../api/get-tasks/get-tasks.generated";
import { createPortal } from "react-dom";
import debounce from "lodash/debounce";
import { Status } from "@/__generated__/types";
import { useSyncServerOnDrop } from "../../hooks/use-sync-server-on-drop";
import { useGetFinalTaskData } from "../../hooks/use-get-final-task-data";
import { useLocalResetPosition } from "../../hooks/use-local-reset-position";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { viewMode } = useKanbanContext();

  const [activeTask, setActiveTask] = useState<UniqueIdentifier>();
  const [taskData, setTaskData] = useState<TaskFieldsFragment>();
  const { forceLocalReorder } = useLocalReorder();
  const { finalizeReorder } = useSyncServerOnDrop();
  const { getFinalCardData } = useGetFinalTaskData();
  const { resetPositioning } = useLocalResetPosition();

  const debouncedUpdateStatus = useMemo(
    () =>
      debounce(
        async (activeId: string, newStatus: Status, newPosition: number) => {
          forceLocalReorder(activeId, newStatus, newPosition);
        },
        300
      ),
    [forceLocalReorder]
  );

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.id);
      setTaskData(event.active.data.current.task);
    }
    return;
  };

  const onDragOver = async (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over) return;
    const activeId = active.id as string;
    const overId = over.id as string;

    if (activeId === overId) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    if (!activeData || !overData) return;

    const isActiveTask = active.data.current?.type === "Task";
    const isOverTask = over.data.current?.type === "Task";

    if (!isActiveTask) return;

    if (isActiveTask && isOverTask) {
      const overTask = overData.task;
      const newPosition = overTask.position;

      debouncedUpdateStatus(activeId, overTask.status, newPosition);

      return;
    }
    const isOverColumn = over.data.current?.type === "Column";
    if (isActiveTask && isOverColumn && !isOverTask && activeData.task) {
      const columnStatus = overData.status;
      const isColumnEmpty = overData.tasks === 0;

      if (isOverTask) return;
      const newPosition = isColumnEmpty ? 1 : overData.tasks + 1;
      debouncedUpdateStatus(activeId, columnStatus, newPosition);
    }
  };

  const onDragEnd = async () => {
    setActiveTask(undefined);
    setTaskData(undefined);
    debouncedUpdateStatus.cancel();

    const finalTask = getFinalCardData(activeTask as string);
    if (!finalTask) return;

    resetPositioning(finalTask.status);

    // const THEFINAL = getFinalCardData(activeTask as string);
    // if (!THEFINAL) return;
    // if (!activeTask || !taskData) return;
    // finalizeReorder(THEFINAL.id, THEFINAL.status, THEFINAL.position);
  };

  useEffect(() => {
    return () => {
      debouncedUpdateStatus.cancel();
    };
  }, [debouncedUpdateStatus]);

  return (
    <div
      className={`${viewMode === "board" ? styles.layout : styles.layoutList}`}
    >
      <TableHeader viewMode={viewMode} />

      <DndContext
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
      >
        {children}

        {createPortal(
          <DragOverlay>
            {activeTask && taskData && <TaskCard task={taskData} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
};
