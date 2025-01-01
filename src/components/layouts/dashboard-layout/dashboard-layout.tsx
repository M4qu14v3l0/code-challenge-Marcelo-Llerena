import { Outlet } from "react-router-dom";

import styles from "./dashboard-layout.module.css";

import Sidebar from "@/components/ui/sidebar/sidebar";
import ActionHeader from "@/features/action-header/action-header";

export default function DashboardLayout() {
  return (
    <div className={styles.container}>
      <ActionHeader />
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
