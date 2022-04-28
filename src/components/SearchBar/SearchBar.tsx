import React from "react";
import Button from "../../ui/Button/Button";
import Title from "../Title/Title";

import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps): JSX.Element => {
  const onClickHandler = (): void => {
    // eslint-disable-next-line no-console
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
        />
        <Button
          className={styles.button}
          text="SEARCH"
          onClick={onClickHandler}
        />
      </div>
      <div />
    </div>
  );
};

export default SearchBar;
