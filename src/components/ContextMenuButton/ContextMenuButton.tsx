import React from "react";

import styles from "./ContextMenuButton.module.scss";

const ContextMenuButton = (): JSX.Element => {
  return (
    <div className={styles.edit}>
      <div />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div />
    </div>
  );
};

export default ContextMenuButton;
