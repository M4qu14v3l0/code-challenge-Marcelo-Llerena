import styles from "./create-task.module.css";
import AddIcon from "@/assets/svgs/plus.svg?react";
import TaskForm from "./task-form/task-form";
import Modal from "@/components/ui/modal/modal";

export default function CreateTask() {
  return (
    <Modal>
      <Modal.Trigger className={`${styles.dialogTrigger}`}>
        <div className={styles.addButton}>
          <AddIcon />
        </div>
      </Modal.Trigger>
      <Modal.Content title="Create Task">
        <TaskForm />
      </Modal.Content>
    </Modal>
  );
}
