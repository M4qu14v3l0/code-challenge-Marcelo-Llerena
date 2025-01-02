import { TaskTag } from "@/__generated__/types";
import Tag from "../../../shared/tag/tag";
import styles from "./card-tag-list.module.css";

interface TagListProps {
  tags: TaskTag[];
}

export default function CardTagList({ tags }: TagListProps) {
  return (
    <div className={styles.cardTags}>
      {tags.map((tag) => (
        <Tag key={tag} text={tag} variant={tag} />
      ))}
    </div>
  );
}