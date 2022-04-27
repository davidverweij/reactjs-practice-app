import React from "react";

import styles from "./GenreSelector.module.scss";

interface GenreSelectorProps {
  genres: string[];
}

const GenreSelector = ({ genres }: GenreSelectorProps): JSX.Element => {
  // Why is the error-boundary not invoked?
  const fakeError = () => {
    throw new Error("I crashed!");
  };

  return (
    <div className={styles.genres}>
      {genres.map((genre, index) => (
        <div className={index == 0 ? styles.selected : ""} key={genre}>
          <span onClick={fakeError}>{genre}</span>
        </div>
      ))}
    </div>
  );
};

export default GenreSelector;
