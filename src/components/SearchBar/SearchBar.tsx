import React from "react";
import Button from "../../ui/Button/Button";
import Title from "../Title/Title";

import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps): JSX.Element => {
  const onClickHandler = () => {
    console.warn("Not (yet) implemented");
  };

  return (
    <div className={`${className} ${styles.search}`}>
      <Title text="FIND YOUR MOVIE" />
      <div className={styles["search-bar"]}>
        <input
          className={styles.bar}
          type="text"
          placeholder="What do you want to watch?"
        ></input>
        <Button
          className={styles.button}
          text="SEARCH"
          onClick={onClickHandler}
        ></Button>
      </div>
      <div />
    </div>
  );
};

export default SearchBar;
