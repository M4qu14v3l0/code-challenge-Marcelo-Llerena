import styles from "./card-header.module.css";

import PencilIcon from "@/assets/svgs/pencil.svg?react";
import TrashIcon from "@/assets/svgs/trash.svg?react";
import MoreIcon from "@/assets/svgs/more.svg?react";

import * as Popover from "@radix-ui/react-popover";
import { useDeleteTaskById } from "../../hooks/delete-task-by-id";
import ModalWrapper from "@/features/kanban/components/shared/modal-wrapper/modal-wrapper";
import TaskForm from "@/features/kanban/components/toolbar/components/create-task/task-form/task-form";
import { PointEstimate, TaskTag } from "@/__generated__/types";

interface HeaderProps {
  id: string;
  title: string;
  pointsEstimate: PointEstimate;
  dueDate: Date;
  assigneeId: string;
  tags: TaskTag[];
}

export default function CardHeader({
  title,
  id,
  pointsEstimate,
  dueDate,
  assigneeId,
  tags,
}: HeaderProps) {
  const { deleteTaskById } = useDeleteTaskById();

  const taskInfo = { title, id, pointsEstimate, dueDate, assigneeId, tags };

  return (
    <div className={styles.cardHeader}>
      <h2 className={styles.cardHeaderTitle}>{title}</h2>
      <Popover.Root>
        <Popover.Trigger className={styles.popoverTrigger}>
          <MoreIcon className={styles.moreIcon} />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className={styles.popoverContent}
            align="end"
            sideOffset={5}
          >
            <ModalWrapper
              title="Edit Task"
              trigger={
                <>
                  <PencilIcon /> Edit
                </>
              }
              triggerClassName={styles.buttonIcon}
              content={<TaskForm task={taskInfo} />}
            ></ModalWrapper>
            <button
              className={styles.buttonIcon}
              onClick={() => deleteTaskById(id)}
            >
              <TrashIcon /> Delete
            </button>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
