import styles from "./card.module.css";
import Tag from "@/features/kanban/components/tag/tag";
import ClockIcon from "@/svgs/clock.svg?react";
import MoreIcon from "@/svgs/more.svg?react";
import { theme } from "../../theme/theme";

import ClipIcon from "@/svgs/clip.svg?react";
import SharedIcon from "@/svgs/shared.svg?react";
import MessageIcon from "@/svgs/message.svg?react";
import Avatar from "@/components/ui/avatar/avatar";
import dayjs from "dayjs";

interface CardProps {
  title: string;
  points: number;
  date: string;
}

export default function Card({ title, points, date }: CardProps) {
  const formatDate = (dateString: string): string => {
    const date = dayjs(dateString);
    return date.format("D MMMM, YYYY").toUpperCase(); // Uppercase for JULY
  };

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
          text={newDate}
          icon={<ClockIcon style={{ color: theme.default.textColor }} />}
        />
      </div>

      <div className={styles.cardTags}>
        <Tag text="IOS APP" variant="success" />
        <Tag text="ANDROID" variant="warning" />
      </div>

      <div className={styles.cardFooter}>
        <Avatar />
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
