import React from "react";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../ui/Button/Button";
import Title from "../../ui/Title/Title";

import styles from "./Menu.module.scss";

const Menu = () => {
  const onClickHandler = () => {
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
