import styles from "./avatar.module.css";

interface AvatarProps {
  src?: string | null;
}

const defaultAvatar = "https://avatar.iran.liara.run/public";

export default function Avatar({
  src = "https://avatar.iran.liara.run/public",
}: AvatarProps) {
  return (
    <img
      src={src ? src : defaultAvatar}
      alt="avatar"
      className={styles.avatar}
    />
  );
}
