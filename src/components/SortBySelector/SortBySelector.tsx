import React from "react";
import SortByDropdown from "../SortByDropdown/SortByDropdown";

import styles from "./SortBySelector.module.scss";

interface SortBySelectorProps {
  sortby: string[];
}

const SortBySelector = ({ sortby }: SortBySelectorProps): JSX.Element => {
  return (
    <div className={styles.sort}>
      <span className={styles["sort-label"]}>SORT BY</span>
      <div className={styles["select-wrapper"]}>
        <span className={styles.button}>RELEASE DATE</span>
        <SortByDropdown sortby={sortby} />
      </div>
    </div>
  );
};

export default SortBySelector;
