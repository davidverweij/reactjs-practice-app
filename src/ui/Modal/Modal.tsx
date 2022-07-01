import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

import styles from "./Modal.module.scss";

interface ModalProps {
  onDismiss: () => void;
  children: ReactNode;
  header?: string;
  className?: string;
}

const Backdrop = (): JSX.Element => {
  return <div className={styles.backdrop} />;
};

const Modal = ({
  header,
  onDismiss,
  children,
  className,
}: ModalProps): JSX.Element => {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {createPortal(
        <ModalOverlay
          header={header}
          onDismiss={onDismiss}
          className={className}
        >
          {children}
        </ModalOverlay>,
        document.getElementById("modal")
      )}
    </>
  );
};
export default Modal;
