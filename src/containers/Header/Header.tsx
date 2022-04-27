import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps): JSX.Element => {
  return (
    <>
      <img className={styles["header-img"]} />
      <div className={styles.header}>{children}</div>
    </>
  );
};

export default Header;
