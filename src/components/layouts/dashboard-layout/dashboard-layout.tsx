import { Outlet } from "react-router-dom";

import styles from "./dashboard-layout.module.css";
import TaskFilterHeader from "@/features/task-filter-header/task-filter-header";
import Sidebar from "@/components/ui/sidebar/sidebar";

export default function DashboardLayout() {
  return (
    <div className={styles.container}>
      <TaskFilterHeader />
      <Sidebar />
      <Outlet />
    </div>
  );
}
