import Avatar from "@/components/ui/avatar/avatar";
import styles from "./user-profile.module.css";

export default function UserProfile() {
  return (
    <div className={styles.userProfile}>
      <Avatar />
    </div>
  );
}
