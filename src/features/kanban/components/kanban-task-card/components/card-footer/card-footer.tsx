import styles from "./card-footer.module.css";

import ClipIcon from "@/assets/svgs/clip.svg?react";
import SharedIcon from "@/assets/svgs/shared.svg?react";
import MessageIcon from "@/assets/svgs/message.svg?react";
import Avatar from "@/components/ui/avatar/avatar";

interface FooterProps {
  avatar?: string | null;
}

export default function CardFooter({ avatar }: FooterProps) {
  return (
    <div className={styles.cardFooter}>
      <Avatar src={avatar} />
      <div className={styles.taskDetails}>
        <ClipIcon />
        <span>
          5<SharedIcon />
        </span>
        <span>
          3<MessageIcon />
        </span>
      </div>
    </div>
  );
}
