import React from "react";
import Logo from "../Logo/Logo";

import styles from "./Footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <Logo />
    </div>
  );
};

export default Footer;
