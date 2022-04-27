import React from "react";
import GenreSelector from "../../components/GenreSelector/GenreSelector";
import SortBySelector from "../../components/SortBySelector/SortBySelector";

import styles from "./FilterBar.module.scss";

interface FilterBarProps {
  genres: string[];
  sortOptions: string[];
}

const FilterBar = ({ genres, sortOptions }: FilterBarProps): JSX.Element => {
  const genresUpper = genres.map((g) => g.toUpperCase());
  const sortUpper = sortOptions.map((s) => s.toUpperCase());

  return (
    <>
      <div className={styles.selector}>
        <GenreSelector genres={genresUpper} />
        <SortBySelector sortby={sortUpper} />
      </div>
    </>
  );
};

export default FilterBar;
