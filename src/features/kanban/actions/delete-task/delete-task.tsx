import { useState } from "react";
import Button from "@/components/ui/button/button";
import styles from "./delete-task.module.css";
import { handleErrorToast } from "@/components/ui/toasts/toasts";
import { useDeleteTaskById } from "../../../../hooks/delete-task-by-id";

interface DeleteTaskProps {
  taskName: string;
  id: string;
}

export default function DeleteTask({ taskName, id }: DeleteTaskProps) {
  const { deleteTaskById, loading, error } = useDeleteTaskById();
  const [inputValue, setInputValue] = useState("");

  if (error) {
    handleErrorToast(`Task: ${taskName} could not be deleted`);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const isEqual = inputValue === taskName;

  return (
    <div>
      <h3 className={styles.title}>
        To confirm, type "{taskName}" in the box below
      </h3>
      <div className={styles.inputs}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Type something..."
          className={`${styles.input} ${isEqual && styles.correct}`}
        />
        <Button
          label={loading ? "Loading..." : "Delete"}
          disabled={!isEqual}
          onClick={() => deleteTaskById(id)}
          className={`${styles.button} ${!isEqual && styles.disable}`}
        />
      </div>
    </div>
  );
}
