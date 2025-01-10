import styles from "./header.module.css";

import { useTaskListContext } from "../../provider/use-task-list-context";

import ArrowDownIcon from "@/assets/svgs/arrow-down.svg?react";
import ArrowUpIcon from "@/assets/svgs/arrow-up.svg?react";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const { isOpenAccordion, setIsOpenAccordion, tasks } = useTaskListContext();
  return (
    <div
      className={`${styles.accordion} ${
        isOpenAccordion ? styles.accordionIsOpen : styles.accordionIsClose
      }`}
      onClick={() => setIsOpenAccordion(!isOpenAccordion)}
    >
      {isOpenAccordion ? <ArrowDownIcon /> : <ArrowUpIcon />}
      <h2>
        {title} <span>({tasks.length})</span>
      </h2>
    </div>
  );
}
