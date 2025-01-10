import styles from "./app-header.module.css";

import Notification from "@/assets/svgs/notification.svg?react";
import UserProfile from "./components/user-profile/user-profile";
import SearchBar from "./components/search-bar/search-bar";
import { useLocation } from "react-router-dom";

export default function AppHeader() {
  const location = useLocation();
  const isMyProfile = location.pathname === "/profile";

  return (
    <div className={`${styles.appHeader} ${isMyProfile && styles.hide}`}>
      <UserProfile />
      <SearchBar />
      <Notification />
    </div>
  );
}
