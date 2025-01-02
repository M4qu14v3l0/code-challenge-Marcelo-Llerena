import styles from "./action-header.module.css";

import Notification from "@/assets/svgs/notification.svg?react";
import Profile from "./components/profile/profile";
import FilterInput from "./components/filterInput/filter-input";

export default function ActionHeader() {
  return (
    <div className={styles.container}>
      <Profile />
      <FilterInput />
      <Notification />
    </div>
  );
}
