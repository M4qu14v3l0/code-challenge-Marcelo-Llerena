import styles from "./create-task.module.css";
import AddIcon from "@/assets/svgs/plus.svg?react";
import TaskForm from "./task-form/task-form";
import Modal from "@/components/ui/modal/modal";
import { useState } from "react";

export default function CreateTask() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Modal.Trigger className={`${styles.dialogTrigger}`}>
        <div className={styles.addButton}>
          <AddIcon />
        </div>
      </Modal.Trigger>
      <Modal.Content title="Create Task">
        <TaskForm setIsOpen={setIsOpen} />
      </Modal.Content>
    </Modal>
  );
}
