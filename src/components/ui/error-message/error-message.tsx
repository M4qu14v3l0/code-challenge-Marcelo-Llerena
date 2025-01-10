import styles from "./error-messages.module.css";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <h3 className={styles.messageError}>{message}</h3>;
}
