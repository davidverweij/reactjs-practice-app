import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../../ui/Button/Button";

import styles from "./Menu.module.scss";

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
        text="+ ADD MOVIE"
        onClick={onClickHandler}
      />
      <div className={styles.search}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Menu;
