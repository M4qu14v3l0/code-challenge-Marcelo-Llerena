import React from "react";
import styles from "./tag.module.css";
import { getVariant } from "../../utils/get-variant";

interface TagProps {
  icon?: React.ReactElement;
  text: string;
  variant?: "success" | "warning" | "error" | "default";
}

export default function Tag({ icon, text, variant = "default" }: TagProps) {
  const pallete = getVariant(variant);
  return (
    <div
      className={`${styles.tag}`}
      style={{ backgroundColor: pallete.backgroundColor }}
    >
      {icon && <span className={`${styles.tagIcon}`}>{icon}</span>}
      <span className={styles.tagText} style={{ color: pallete.textColor }}>
        {text}
      </span>
    </div>
  );
}
