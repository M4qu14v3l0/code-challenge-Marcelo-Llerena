import styles from "./viewToggle.module.css";
import LinesIcon from "@/assets/svgs/lines.svg?react";
import SystemIcon from "@/assets/svgs/system.svg?react";
import { ViewMode } from "@/features/kanban/interfaces/kanban.interfaces";
import { useKanbanContext } from "@/features/kanban/provider/use-kanban-context";

interface ViewModeItems {
  view: ViewMode;
  icon: JSX.Element;
}

const viewModeItems: ViewModeItems[] = [
  { view: "list", icon: <LinesIcon /> },
  { view: "board", icon: <SystemIcon /> },
];

export default function ViewToggle() {
  const { viewMode, setViewMode } = useKanbanContext();

  return (
    <div className={styles.viewMode}>
      {viewModeItems.map((item, index) => (
        <div
          key={index}
          className={`
          ${styles.iconContainer} 
          ${item.view === viewMode && styles.selected}`}
          onClick={() => setViewMode(item.view)}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}
