import { Outlet } from "react-router-dom";

import styles from "./dashboard-layout.module.css";

import Sidebar from "@/components/ui/sidebar/sidebar";
import AppHeader from "@/features/app-header/app-header";
import { FilterProvider } from "@/app/provider/filter/filter";

export default function DashboardLayout() {
  return (
    <div className={styles.container}>
      <FilterProvider>
        <AppHeader />
        <Sidebar />
        <main className={styles.main}>
          <Outlet />
        </main>
      </FilterProvider>
    </div>
  );
}
