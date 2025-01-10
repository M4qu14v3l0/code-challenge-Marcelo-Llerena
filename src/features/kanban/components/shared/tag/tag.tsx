import React from "react";
import styles from "./tag.module.css";
import { getVariantByName } from "../../../utils/get-variant-by-name";
import { TaskTag } from "@/__generated__/types";

interface TagProps {
  icon?: React.ReactElement;
  text: string | number;
  variant: TaskTag | "default";
}

export default function Tag({ icon, text, variant }: TagProps) {
  const pallete = getVariantByName(variant);
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
