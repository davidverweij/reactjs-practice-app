import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../../ui/Button/Button";

import styles from "./Menu.module.scss";
import ICONS from "../../core/constants/ICONS";
import I18Y from "../../core/i18y";

const Menu = (): JSX.Element => {
  const onClickHandler = (): void => {
    // eslint-disable-next-line no-console
    console.warn("Not (yet) implemented");
  };

  return (
    <div className={styles.menu}>
      <Logo />
      <Button
        className={styles.button}
        text={I18Y("EN").ADD_MOVIE_BTN}
        icon={ICONS.PLUS}
        onClick={onClickHandler}
      />
      <div className={styles.search}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Menu;
