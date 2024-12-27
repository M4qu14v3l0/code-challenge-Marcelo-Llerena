import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";

const links = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Task", to: "/my-tasks" },
];

export default function Sidebar() {
  return (
    <aside className={styles.container}>
      {links.map((link) => (
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            isActive ? styles.isActive : styles.notActive
          }
        >
          {link.label}
        </NavLink>
      ))}
    </aside>
  );
}
