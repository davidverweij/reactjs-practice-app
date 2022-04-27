import React from "react";
import Logo from "../../components/Logo/Logo";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Logo />
    </div>
  );
};

export default Footer;
