import React from "react";
import I18Y from "../../core/i18y";
import styles from "./Header.module.scss";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps): JSX.Element => {
  return (
    <>
      <img alt={I18Y().HEADER_IMAGE_ALT} className={styles["header-img"]} />
      <div className={styles.header}>{children}</div>
      <hr className={styles.hr} />
    </>
  );
};

export default Header;
