import React from "react";

import styles from "./SortByDropdown.module.scss";

interface SortByDropdownProps {
  sortby: string[];
}

const SortByDropdown = ({ sortby }: SortByDropdownProps): JSX.Element => {
  return (
    <div className={`${styles.dropdown} ${styles.hide}`}>
      {sortby.map((sort) => {
        return (
          <button type="button" onClick={() => {}} value={sort} key={sort}>
            {sort}
          </button>
        );
      })}
    </div>
  );
};

export default SortByDropdown;
