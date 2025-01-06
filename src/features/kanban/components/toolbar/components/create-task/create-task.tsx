import styles from "./create-task.module.css";
import AddIcon from "@/assets/svgs/plus.svg?react";
import ModalWrapper from "../../../shared/modal-wrapper/modal-wrapper";
import TaskForm from "./task-form/task-form";

export default function CreateTask() {
  return (
    <ModalWrapper
      trigger={
        <div className={styles.addButton}>
          <AddIcon />
        </div>
      }
      content={<TaskForm />}
      title="Create Task"
    />
  );
}
