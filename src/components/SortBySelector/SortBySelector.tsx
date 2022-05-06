import React, { useContext } from "react";
import LanguageContext from "../../core/contexts/i18y";
import SortByDropdown from "../SortByDropdown/SortByDropdown";

import styles from "./SortBySelector.module.scss";

interface SortBySelectorProps {
  sortby: string[];
}

const SortBySelector = ({ sortby }: SortBySelectorProps): JSX.Element => {
  const { dict } = useContext(LanguageContext);

  return (
    <div className={styles.sort}>
      <span className={styles["sort-label"]}>{dict.SORT_LABEL}</span>
      <div className={styles["select-wrapper"]}>
        <span className={styles.button}>{sortby[0]}</span>
        <SortByDropdown sortby={sortby} />
      </div>
    </div>
  );
};

export default SortBySelector;
