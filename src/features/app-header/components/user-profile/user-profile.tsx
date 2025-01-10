import Avatar from "@/components/ui/avatar/avatar";
import styles from "./user-profile.module.css";
import * as Popover from "@radix-ui/react-popover";

import { NavLink } from "react-router-dom";

import PersonIcon from "@/assets/svgs/person.svg?react";
import MoonIcon from "@/assets/svgs/moon.svg?react";
import SunIcon from "@/assets/svgs/sun.svg?react";
import { useEffect, useState } from "react";
import { useGetProfile } from "@/hooks/use-get-profile";

export default function UserProfile() {
  const { profileData } = useGetProfile();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setLightMode(true);
      document.body.classList.add("light-mode");
    }
  }, []);

  const [lightMode, setLightMode] = useState(false);
  const toggleTheme = () => {
    setLightMode(!lightMode);
    const newTheme = !lightMode ? "light" : "dark";
    document.body.classList.toggle("light-mode", !lightMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={styles.userProfile}>
      <Popover.Root>
        <Popover.Trigger className={styles.trigger}>
          <Avatar profile="marcelo" />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className={styles.content}
            side="bottom"
            sideOffset={16}
            align="end"
            alignOffset={-26}
          >
            <div className={styles.profile}>
              <Avatar profile="marcelo" />
              <div className={styles.profileText}>
                <p className={styles.fullName}>{profileData?.fullName}</p>
                <p className={styles.email}>{profileData?.email}</p>
              </div>
            </div>
            <div className={styles.actionsContainer}>
              <NavLink to={"/profile"} className={styles.action}>
                <PersonIcon /> View Profile
              </NavLink>

              <button className={styles.action} onClick={toggleTheme}>
                {!lightMode ? (
                  <>
                    <MoonIcon />
                    Dark mode
                  </>
                ) : (
                  <>
                    <SunIcon />
                    Light mode
                  </>
                )}
              </button>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
