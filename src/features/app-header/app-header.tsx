import styles from "./app-header.module.css";

import Notification from "@/assets/svgs/notification.svg?react";
import UserProfile from "./components/user-profile/user-profile";
import SearchBar from "./components/search-bar/search-bar";

export default function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <UserProfile />
      <SearchBar />
      <Notification />
    </div>
  );
}
