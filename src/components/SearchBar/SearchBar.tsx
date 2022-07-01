import React, { useContext } from "react";
import LanguageContext from "../../core/contexts/i18y";
import Button from "../../ui/Button/Button";
import Title from "../Title/Title";

import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps): JSX.Element => {
  const { dict } = useContext(LanguageContext);

  const onClickHandler = (): void => {
    // eslint-disable-next-line no-console
    console.warn("Not (yet) implemented");
  };

  return (
    <div className={`${className} ${styles.search}`}>
      <Title text={dict.HOME_TITLE} />
      <div className={styles["search-bar"]}>
        <input
          className={styles.bar}
          type="text"
          placeholder={dict.SEARCH_PLACEHOLDER}
        />
        <Button
          className={styles.button}
          text={dict.SEARCH_BTN}
          onClick={onClickHandler}
        />
      </div>
      <div />
    </div>
  );
};

export default SearchBar;
