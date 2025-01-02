import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";
import System from "@/assets/svgs/system.svg?react";
import TaskIcon from "@/assets/svgs/lines.svg?react";

const links = [
  { label: "Dashboard", to: "/dashboard", icon: <System /> },
  { label: "Task", to: "/my-tasks", icon: <TaskIcon /> },
];

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);

  return (
    <aside
      className={`${styles.aside} ${
        toggle ? styles.showAside : styles.hideAside
      }`}
    >
      <div className={styles.toggler} onClick={() => setToggle(!toggle)}>
        <img src="/images/ravn-logo.svg" />
      </div>
      <div className={styles.linksContainer}>
        {links.map((link, key) => (
          <NavLink
            key={key}
            to={link.to}
            className={({ isActive }) =>
              `${styles.navLink} ${
                isActive ? styles.isActive : styles.notActive
              }`
            }
          >
            <div className={styles.icon}>{link.icon}</div>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
