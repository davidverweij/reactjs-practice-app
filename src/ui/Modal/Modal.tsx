import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import Title from "../../components/Title/Title";

import styles from "./Modal.module.scss";

interface ModalProps {
  onDismiss: () => void;
  children: ReactNode;
  header?: string;
}

const Backdrop = (): JSX.Element => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = ({
  onDismiss,
  children,
  header,
}: ModalProps): JSX.Element => {
  return (
    <div className={styles.modal}>
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

const Modal = ({ header, onDismiss, children }: ModalProps): JSX.Element => {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {createPortal(
        <ModalOverlay header={header} onDismiss={onDismiss}>
          {children}
        </ModalOverlay>,
        document.getElementById("modal")
      )}
    </>
  );
};
export default Modal;
