import styles from "./card-header.module.css";

import PencilIcon from "@/assets/svgs/pencil.svg?react";
import TrashIcon from "@/assets/svgs/trash.svg?react";
import MoreIcon from "@/assets/svgs/more.svg?react";

import * as Popover from "@radix-ui/react-popover";

interface HeaderProps {
  id: string;
  title: string;
}

export default function CardHeader({ id, title }: HeaderProps) {
  console.log(id);
  return (
    <div className={styles.cardHeader}>
      <h2 className={styles.cardHeaderTitle}>{title}</h2>
      <Popover.Root>
        <Popover.Trigger className={styles.popoverTrigger}>
          <MoreIcon className={styles.moreIcon} />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className={styles.popoverContent}
            align="end"
            sideOffset={5}
          >
            <button className={styles.buttonIcon}>
              <PencilIcon /> Edit
            </button>
            <button className={styles.buttonIcon}>
              <TrashIcon /> Delete
            </button>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
