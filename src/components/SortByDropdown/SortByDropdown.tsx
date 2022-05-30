import React from "react";
import { I18ySortoptions } from "../../core/constants/I18yConstants";

import styles from "./SortByDropdown.module.scss";

interface SortByDropdownProps {
  sortby: I18ySortoptions;
  selectHandler: (select: string) => void;
}

const sortByMapper = ({
  sortby,
  selectHandler,
}: SortByDropdownProps): JSX.Element[] => {
  const mapping = Object.entries(sortby).map(([key, value]) => (
    <button type="button" onClick={() => selectHandler(key)} key={key}>
      {value}
    </button>
  ));
  return mapping;
};

const SortByDropdown = ({
  sortby,
  selectHandler,
}: SortByDropdownProps): JSX.Element => {
  const sortbyList = sortByMapper({ sortby, selectHandler });

  return <div className={styles.dropdown}>{sortbyList}</div>;
};

export default SortByDropdown;
