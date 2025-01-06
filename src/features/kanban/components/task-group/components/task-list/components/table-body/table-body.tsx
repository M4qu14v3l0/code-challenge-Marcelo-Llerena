import { useTaskListContext } from "../../provider/use-task-list-context";
import Row from "../row/row";
import styles from "./table-body.module.css";
export default function TableBody() {
  const { isOpenAccordion, tasks } = useTaskListContext();

  return (
    <div
      className={`${styles.panel} ${
        isOpenAccordion ? styles.isOpen : styles.isClose
      }`}
    >
      {tasks.map((task) => (
        <Row key={task.id} task={task} />
      ))}
    </div>
  );
}
