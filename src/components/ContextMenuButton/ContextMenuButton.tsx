import React from "react";

import styles from "./ContextMenuButton.module.scss";

interface ContextMenuButtonProps {
  onClick: () => void;
}

const ContextMenuButton = ({
  onClick,
}: ContextMenuButtonProps): JSX.Element => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onClick}
      className={styles.edit}
    >
      <div />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div />
    </div>
  );
};

export default ContextMenuButton;
