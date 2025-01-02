import styles from "./card-subheader.module.css";

import { alertsTheme } from "@/features/kanban/theme/alerts-theme";
import { formatDate } from "@/features/kanban/utils/formatDate";
import ClockIcon from "@/assets/svgs/clock.svg?react";
import Tag from "../../../shared/tag/tag";

interface SubHeaderProps {
  points: number;
  date: string;
}

export default function CardSubHeader({ points, date }: SubHeaderProps) {
  const newDate = formatDate(date);

  return (
    <div className={styles.cardSubHeader}>
      <span>{points} Pts</span>
      <Tag
        variant="default"
        text={newDate}
        icon={<ClockIcon style={{ color: alertsTheme.default.textColor }} />}
      />
    </div>
  );
}
