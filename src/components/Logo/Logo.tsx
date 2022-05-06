import React from "react";

import styles from "./Logo.module.scss";

const Logo = (): JSX.Element => {
  return (
    <span className={styles.logo}>
      <span className={styles.thick}>netflix</span>roulette
    </span>
  );
};

export default Logo;
