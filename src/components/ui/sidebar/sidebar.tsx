import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";
import { useState } from "react";
import System from "@/svgs/system.svg?react";

const links = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Task", to: "/my-tasks" },
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
            <System className={styles.icon} />
            <span>{link.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
