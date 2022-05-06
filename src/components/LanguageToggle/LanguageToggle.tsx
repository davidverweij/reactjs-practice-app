import React, { useContext, useState } from "react";
import ICONS from "../../core/constants/ICONS";
import LanguageContext from "../../core/contexts/i18y";
import Button from "../../ui/Button/Button";
import LanguageMenu from "../LanguageMenu/LanguageMenu";

import styles from "./LanguageToggle.module.scss";

const LanguageToggle = (): JSX.Element => {
  const { dict } = useContext(LanguageContext);

  const [menuState, setMenuState] = useState<boolean>(false);

  const menuHandler = (): void => {
    setMenuState((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.toggle}
        text={dict.SET_LANGUAGE}
        icon={ICONS.TRANSLATE}
        onClick={menuHandler}
      />
      {menuState && <LanguageMenu onExit={menuHandler} />}
    </div>
  );
};

export default LanguageToggle;
