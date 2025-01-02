import styles from "./kanban-task-card.module.css";

import { TaskTag } from "@/__generated__/types";

import CardHeader from "./components/card-header/card-header";
import CardSubHeader from "./components/card-subheader/card-subheader";
import CardTagList from "./components/card-tag-list/card-tag-list";
import CardFooter from "./components/card-footer/card-footer";

interface KanbanTaskCardProps {
  id: string;
  title: string;
  points: number;
  date: string;
  avatar?: string | null;
  tag: TaskTag[];
}

export default function KanbanTaskCard({
  id,
  title,
  avatar,
  date,
  points,
  tag,
}: KanbanTaskCardProps) {
  return (
    <div className={styles.card}>
      <CardHeader id={id} title={title} />
      <CardSubHeader date={date} points={points} />
      <CardTagList tags={tag} />
      <CardFooter avatar={avatar} />
    </div>
  );
}
