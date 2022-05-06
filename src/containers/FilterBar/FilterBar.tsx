import React from "react";
import GenreSelector from "../../components/GenreSelector/GenreSelector";
import SortBySelector from "../../components/SortBySelector/SortBySelector";
import CONSTANTS from "../../core/constants";

import styles from "./FilterBar.module.scss";

const FilterBar = (): JSX.Element => {
  const genresUpper = Object.values(CONSTANTS().GENRES).map((g) =>
    g.toUpperCase()
  );
  const sortUpper = Object.values(CONSTANTS().SORTOPTIONS).map((s) =>
    s.toUpperCase()
  );

  return (
    <div className={styles.selector}>
      <GenreSelector genres={genresUpper} />
      <SortBySelector sortby={sortUpper} />
    </div>
  );
};

export default FilterBar;
