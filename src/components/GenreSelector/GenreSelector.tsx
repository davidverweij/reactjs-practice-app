import React, { useState } from "react";

import styles from "./GenreSelector.module.scss";

interface GenreSelectorProps {
  genres: Array<string>;
  sortOptions: Array<string>;
}

const GenreSelector = ({ genres, sortOptions }: GenreSelectorProps) => {
  const genresUpper = genres.map((g) => g.toUpperCase());
  const sortUpper = sortOptions.map((s) => s.toUpperCase());

  const maxSortByText = Math.max(...sortUpper.map((s) => s.length));

  const [showGenreState, setShowGenreState] = useState(false);
  const [selectedSortState, setSelectedSortState] = useState(sortUpper[0]);

  const showGenreHandler = () => {
    setShowGenreState(!showGenreState);
  };

  const setSortHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedSortState(event.currentTarget.value);
    setShowGenreState(!showGenreState);
  };

  return (
    <div className={styles.selector}>
      <div className={styles.genres}>
        {genresUpper.map((genre) => (
          <div key={genre}>{genre}</div>
        ))}
      </div>
      <div className={styles.sort}>
        <span className={styles["sort-label"]}>SORT BY</span>
        <div className={styles["select-wrapper"]}>
          <div
            onClick={showGenreHandler}
            className={`${styles.button} ${showGenreState ? styles.open : ""}`}
          >
            <span>{selectedSortState}</span>
          </div>
          <div
            className={`${!showGenreState ? styles.hide : ""} ${
              styles.dropdown
            }`}
          >
            {sortUpper.map((sort) => {
              return (
                <button onClick={setSortHandler} value={sort} key={sort}>
                  {sort}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreSelector;
