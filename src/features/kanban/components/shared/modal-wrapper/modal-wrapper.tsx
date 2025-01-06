import styles from "./modal-wrapper.module.css";

import Modal from "@/components/ui/modal/modal";

interface ModalWrapper {
  trigger: JSX.Element;
  triggerClassName?: string;
  content: JSX.Element;
  title: string;
}

export default function ModalWrapper({
  trigger,
  triggerClassName,
  content,
  title,
}: ModalWrapper) {
  return (
    <Modal>
      <Modal.Trigger className={`${styles.dialogTrigger} ${triggerClassName}`}>
        {trigger}
      </Modal.Trigger>
      <Modal.Content title={title}>{content}</Modal.Content>
    </Modal>
  );
}
