import styles from "./avatar.module.css";

interface AvatarProps {
  src?: string | null;
  width?: string;
  height?: string;
  radius?: string;
  profile?: string;
}

const defaultAvatar = "https://avatar.iran.liara.run/public";

export default function Avatar({
  src = "https://avatar.iran.liara.run/public",
  width,
  height,
  radius,
  profile,
}: AvatarProps) {
  const invalidAvatars = [
    "https://avatars.dicebear.com/api/initials/jd.svg",
    "https://avatars.dicebear.com/api/initials/gs.svg",
    "https://avatars.dicebear.com/api/initials/rb.svg",
  ];

  if (profile === "marcelo") {
    return (
      <img
        src={"https://avatars.githubusercontent.com/u/83110496?v=4"}
        alt="avatar"
        className={styles.avatar}
        style={{ width, height, borderRadius: radius }}
      />
    );
  }

  if (!src || invalidAvatars.includes(src)) {
    return (
      <img
        src={defaultAvatar}
        alt="avatar"
        className={styles.avatar}
        style={{ width, height, borderRadius: radius }}
      />
    );
  }
}
