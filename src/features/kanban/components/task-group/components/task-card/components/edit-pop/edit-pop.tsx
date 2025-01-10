import PencilIcon from "@/assets/svgs/pencil.svg?react";
import TrashIcon from "@/assets/svgs/trash.svg?react";
import MoreIcon from "@/assets/svgs/more.svg?react";

import * as Popover from "@radix-ui/react-popover";
import TaskForm from "@/features/kanban/components/toolbar/components/create-task/task-form/task-form";
import { PointEstimate, TaskTag } from "@/__generated__/types";
import Modal from "@/components/ui/modal/modal";
import styles from "./edit-pop.module.css";
import DeleteTask from "@/features/kanban/components/actions/delete-task/delete-task";

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
            <Modal>
              <Modal.Trigger className={`${styles.buttonIcon}`}>
                <span>
                  <PencilIcon /> Edit
                </span>
              </Modal.Trigger>
              <Modal.Content title="Edit Task">
                <TaskForm task={taskInfo} />
              </Modal.Content>
            </Modal>
            <Modal>
              <Modal.Trigger className={`${styles.buttonIcon}`}>
                <span>
                  <TrashIcon /> Delete
                </span>
              </Modal.Trigger>
              <Modal.Content title="Delete Task">
                <DeleteTask taskName={taskInfo.title} id={taskInfo.id} />
              </Modal.Content>
            </Modal>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
