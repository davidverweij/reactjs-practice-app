import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps): JSX.Element => {
  return (
    <>
      <img
        alt="Blurry backdrop displaying video catalog"
        className={styles["header-img"]}
      />
      <div className={styles.header}>{children}</div>
      <hr className={styles.hr} />
    </>
  );
};

export default Header;
