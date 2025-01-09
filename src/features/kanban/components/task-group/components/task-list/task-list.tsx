import styles from "./task-list.module.css";
import { ReactNode, useState } from "react";

import { TaskListContext } from "./provider/use-task-list-context";
import Header from "./components/header/header";
import Row from "./components/row/row";
import TableBody from "./components/table-body/table-body";
import { Tasks } from "@/features/kanban/interfaces/kanban.interfaces";

interface TaskListProps {
  children: ReactNode;
  tasks: Tasks;
}

export default function TaskList({ children, tasks }: TaskListProps) {
  const [isOpenAccordion, setIsOpenAccordion] = useState(true);

  return (
    <TaskListContext.Provider
      value={{ isOpenAccordion, setIsOpenAccordion, tasks }}
    >
      <div className={styles.accordionContainer}>{children}</div>
    </TaskListContext.Provider>
  );
}

TaskList.Header = Header;
TaskList.Row = Row;
TaskList.TableBody = TableBody;
