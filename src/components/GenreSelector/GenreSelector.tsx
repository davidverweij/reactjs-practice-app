import React from "react";

import styles from "./GenreSelector.module.scss";

interface GenreSelectorProps {
  genres: string[];
}

const genreMapper = (genre: string, index: number): JSX.Element => {
  return (
    <div className={index === 0 ? styles.selected : ""} key={genre}>
      <span>{genre}</span>
    </div>
  );
};

const GenreSelector = ({ genres }: GenreSelectorProps): JSX.Element => {
  const genreList = genres.map(genreMapper);
  return <div className={styles.genres}>{genreList}</div>;
};

export default GenreSelector;
