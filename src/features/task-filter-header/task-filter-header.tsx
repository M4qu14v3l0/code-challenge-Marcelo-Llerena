import styles from "./task-filter-header.module.css";

import Search from "@/svgs/search.svg?react";
import Notification from "@/svgs/notification.svg?react";
import Avatar from "@/components/ui/avatar/avatar";

export default function TaskFilterHeader() {
  return (
    <div className={styles.container}>
      <Avatar />
      <input type="text" className={styles.input} />
      <Search />
      <Notification />
    </div>
  );
}
