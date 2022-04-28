import React from "react";

import styles from "./GenreSelector.module.scss";

interface GenreSelectorProps {
  genres: string[];
}

const GenreSelector = ({ genres }: GenreSelectorProps): JSX.Element => {
  return (
    <div className={styles.genres}>
      {genres.map((genre, index) => (
        <div className={index === 0 ? styles.selected : ""} key={genre}>
          <span>{genre}</span>
        </div>
      ))}
    </div>
  );
};

export default GenreSelector;
