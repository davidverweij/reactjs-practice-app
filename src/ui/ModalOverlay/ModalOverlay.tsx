import React, { ReactNode } from "react";
import Title from "../../components/Title/Title";

import styles from "./ModalOverlay.module.scss";

interface ModalOverlayProps {
  onDismiss: () => void;
  children: ReactNode;
  header?: string;
  className?: string;
}

const ModalOverlay = ({
  onDismiss,
  children,
  header,
  className,
}: ModalOverlayProps): JSX.Element => {
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

export default ModalOverlay;
