import * as Dialog from "@radix-ui/react-dialog";

import styles from "./modal.module.css";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ children, isOpen, setIsOpen }: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </Dialog.Root>
  );
}

function ModalContent({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.dialogOverlay} />
      <VisuallyHidden>
        <Dialog.Title>{title}</Dialog.Title>
      </VisuallyHidden>
      <Dialog.Content className={styles.dialogContent}>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Trigger = Dialog.Trigger;
Modal.Content = ModalContent;
