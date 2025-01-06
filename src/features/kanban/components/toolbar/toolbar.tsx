import styles from "./toolbar.module.css";
import ViewToggle from "./components/viewToggle/viewToggle";
import CreateTask from "./components/create-task/create-task";

export const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <ViewToggle />
      <CreateTask />
    </div>
  );
};
