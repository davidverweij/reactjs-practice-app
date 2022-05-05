import React from "react";
import GenreSelector from "../../components/GenreSelector/GenreSelector";
import SortBySelector from "../../components/SortBySelector/SortBySelector";
import GENRES from "../../core/constants/GENRES";
import SORTOPTIONS from "../../core/constants/SORTOPTIONS";

import styles from "./FilterBar.module.scss";

const FilterBar = (): JSX.Element => {
  const genresUpper = GENRES.map((g) => g.toUpperCase());
  const sortUpper = SORTOPTIONS.map((s) => s.toUpperCase());

  return (
    <div className={styles.selector}>
      <GenreSelector genres={genresUpper} />
      <SortBySelector sortby={sortUpper} />
    </div>
  );
};

export default FilterBar;
