import React from "react";

import styles from "./SortByDropdown.module.scss";

interface SortByDropdownProps {
  sortby: string[];
}

const sortByMapper = (sort: string): JSX.Element => {
  return (
    <button type="button" onClick={() => {}} value={sort} key={sort}>
      {sort}
    </button>
  );
};

const SortByDropdown = ({ sortby }: SortByDropdownProps): JSX.Element => {
  const sortbyList = sortby.map(sortByMapper);

  return (
    <div className={`${styles.dropdown} ${styles.hide}`}>{sortbyList}</div>
  );
};

export default SortByDropdown;
