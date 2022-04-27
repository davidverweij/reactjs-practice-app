import React from "react";

import styles from "./SortByDropdown.module.scss";

interface SortByDropdownProps {
  show: boolean;
  sortby: string[];
}

const SortByDropdown = ({ show, sortby }: SortByDropdownProps) => {
  return (
    <div className={`${styles.dropdown} ${styles.hide}`}>
      {sortby.map((sort) => {
        return (
          <button onClick={() => {}} value={sort} key={sort}>
            {sort}
          </button>
        );
      })}
    </div>
  );
};

export default SortByDropdown;
