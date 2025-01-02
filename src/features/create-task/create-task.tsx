import styles from "./create-task.module.css";

import PlusIcon from "@/assets/svgs/plus.svg?react";

export default function CreateTask() {
  return (
    <div className={styles.container}>
      <PlusIcon width={"22.4px"} height={"22.4px"} />
    </div>
  );
}
