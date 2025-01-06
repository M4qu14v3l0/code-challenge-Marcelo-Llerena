import styles from "./card-subheader.module.css";

import { alertsTheme } from "@/features/kanban/theme/alerts-theme";
import ClockIcon from "@/assets/svgs/clock.svg?react";
import Tag from "@/features/kanban/components/shared/tag/tag";
import { formatDateCustom } from "@/features/kanban/utils/formatDate";

interface SubHeaderProps {
  points: string;
  date: Date;
}

export default function CardSubHeader({ points, date }: SubHeaderProps) {
  const newDate = formatDateCustom(date.toString());

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
