import React, { useContext, useState } from "react";
import { I18ySortoptions } from "../../core/constants/I18yConstants";
import LanguageContext from "../../core/contexts/i18y";
import SortByDropdown from "../SortByDropdown/SortByDropdown";

import styles from "./SortBySelector.module.scss";

interface SortBySelectorProps {
  sortby: I18ySortoptions;
  handler: (s: string) => void;
  state: string;
}

const SortBySelector = ({
  sortby,
  handler,
  state,
}: SortBySelectorProps): JSX.Element => {
  const { dict } = useContext(LanguageContext);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const dropdownHandler = (): void => {
    setShowDropdown((prev) => !prev);
  };

  const selectSortHandler = (selection: string): void => {
    handler(selection);
    setShowDropdown((prev) => !prev);
  };

  const buttonStyle = `${styles.button} ${showDropdown && styles.open}`;

  return (
    <div className={styles.sort}>
      <span className={styles["sort-label"]}>{dict.SORT_LABEL}</span>
      <div className={styles["select-wrapper"]}>
        <button className={buttonStyle} onClick={dropdownHandler} type="button">
          {sortby[state as keyof I18ySortoptions]}
        </button>
        {showDropdown && (
          <SortByDropdown selectHandler={selectSortHandler} sortby={sortby} />
        )}
      </div>
    </div>
  );
};

export default SortBySelector;
