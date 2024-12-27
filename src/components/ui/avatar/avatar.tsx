import styles from "./avatar.module.css";

export default function Avatar() {
  return (
    <div className={styles.avatar}>
      <img src="/images/avatar.svg" alt="avatar" />
    </div>
  );
}
