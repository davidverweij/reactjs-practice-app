import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import Title from "../../components/Title/Title";

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

const ModalOverlay = ({
  onDismiss,
  children,
  header,
  className,
}: ModalProps): JSX.Element => {
  return (
    <div className={`${styles.modal} ${className}`}>
      <button
        aria-label="exit"
        type="button"
        onClick={onDismiss}
        className={styles.exit}
      />
      {header && <Title className={styles.title} text={header} />}
      {children}
    </div>
  );
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
