import React, { useContext } from "react";
import LanguageContext from "../../core/contexts/i18y";
import styles from "./Header.module.scss";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps): JSX.Element => {
  const { dict } = useContext(LanguageContext);

  return (
    <>
      <img alt={dict.HEADER_IMAGE_ALT} className={styles["header-img"]} />
      <div className={styles.header}>{children}</div>
      <hr className={styles.hr} />
    </>
  );
};

export default Header;
