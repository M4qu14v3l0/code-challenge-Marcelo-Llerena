import styles from "./card.module.css";

import Tag from "@/features/kanban/components/tag/tag";
import Avatar from "@/components/ui/avatar/avatar";

import { TaskTag } from "@/__generated__/types";
import { formatDate } from "../../utils/formatDate";

import ClockIcon from "@/svgs/clock.svg?react";
import MoreIcon from "@/svgs/more.svg?react";
import ClipIcon from "@/svgs/clip.svg?react";
import SharedIcon from "@/svgs/shared.svg?react";
import MessageIcon from "@/svgs/message.svg?react";
import { alertsTheme } from "../../theme/alerts-theme";

interface CardProps {
  title: string;
  points: number;
  date: string;
  avatar?: string | null;
  tag: TaskTag[];
}

export default function Card({ title, points, date, avatar, tag }: CardProps) {
  const newDate = formatDate(date);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardHeaderTitle}>{title}</h2>
        <MoreIcon />
      </div>
      <div className={styles.cardSubHeader}>
        <span>{points} Pts</span>
        <Tag
          variant="default"
          text={newDate}
          icon={<ClockIcon style={{ color: alertsTheme.default.textColor }} />}
        />
      </div>

      <div className={styles.cardTags}>
        {tag.map((tag) => (
          <Tag text={tag} variant={tag} />
        ))}
      </div>

      <div className={styles.cardFooter}>
        <Avatar src={avatar} />
        <div className={styles.taskDetails}>
          <ClipIcon />
          <span>
            5
            <SharedIcon />
          </span>

          <span>
            3
            <MessageIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
