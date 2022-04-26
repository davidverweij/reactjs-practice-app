import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  children?: any;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <img className={styles["header-img"]} />
      <div className={styles.header}>{children}</div>
    </>
  );
};

export default Header;
