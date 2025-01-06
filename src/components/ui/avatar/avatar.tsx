import styles from "./avatar.module.css";

interface AvatarProps {
  src?: string | null;
  width?: string;
  height?: string;
}

const defaultAvatar = "https://avatar.iran.liara.run/public";

export default function Avatar({
  src = "https://avatar.iran.liara.run/public",
  width,
  height,
}: AvatarProps) {
  return (
    <img
      src={src ? src : defaultAvatar}
      alt="avatar"
      className={styles.avatar}
      style={{ width, height }}
    />
  );
}
