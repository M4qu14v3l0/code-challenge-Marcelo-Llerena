import PencilIcon from "@/assets/svgs/pencil.svg?react";
import TrashIcon from "@/assets/svgs/trash.svg?react";
import MoreIcon from "@/assets/svgs/more.svg?react";

import * as Popover from "@radix-ui/react-popover";
import { useDeleteTaskById } from "../../hooks/delete-task-by-id";
import TaskForm from "@/features/kanban/components/toolbar/components/create-task/task-form/task-form";
import { PointEstimate, TaskTag } from "@/__generated__/types";
import Modal from "@/components/ui/modal/modal";
import { useState } from "react";

import styles from "./edit-pop.module.css";

interface EditPopProps {
  id: string;
  title: string;
  pointsEstimate: PointEstimate;
  dueDate: Date;
  assigneeId: string;
  tags: TaskTag[];
}

export default function EditPop({
  title,
  id,
  pointsEstimate,
  dueDate,
  assigneeId,
  tags,
}: EditPopProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteTaskById } = useDeleteTaskById();
  const taskInfo = { title, id, pointsEstimate, dueDate, assigneeId, tags };

  return (
    <div className={styles.editPop}>
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
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
              <Modal.Trigger className={`${styles.buttonIcon}`}>
                <PencilIcon /> Edit
              </Modal.Trigger>
              <Modal.Content title="Edit Task">
                <TaskForm setIsOpen={setIsOpen} task={taskInfo} />
              </Modal.Content>
            </Modal>
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
