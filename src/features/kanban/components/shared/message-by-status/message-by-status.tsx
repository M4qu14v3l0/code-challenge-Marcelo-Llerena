import styles from "./message-by-status.module.css";

interface MessageByStatus {
  message: string;
  variant: "boardView" | "listView";
}

export default function MessageByStatus({ message, variant }: MessageByStatus) {
  return (
    <div
      className={`${
        variant === "boardView" ? styles.containerBoard : styles.containerList
      }`}
    >
      <p>{message}</p>
    </div>
  );
}
