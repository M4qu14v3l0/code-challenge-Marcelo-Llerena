import styles from "./card-header.module.css";

interface CardHeaderProps {
  title: string;
}

export default function CardHeader({ title }: CardHeaderProps) {
  return (
    <div className={styles.cardHeader}>
      <h2 className={styles.cardHeaderTitle}>{title}</h2>
    </div>
  );
}
