import React from "react";
import { I18yGenres } from "../../core/constants/I18yConstants";

import styles from "./GenreSelector.module.scss";

interface GenreSelectorProps {
  genres: I18yGenres;
  state: string;
  handler: (g: string) => void;
}

const genreMapper = ({
  genres,
  state,
  handler,
}: GenreSelectorProps): JSX.Element[] => {
  const mapped = Object.entries(genres).map(([key, value]) => (
    <button
      type="button"
      onClick={() => handler(key)}
      className={key === state ? styles.selected : ""}
      key={key}
    >
      {value}
    </button>
  ));
  return mapped;
};

const GenreSelector = ({
  genres,
  state,
  handler,
}: GenreSelectorProps): JSX.Element => {
  const genreList = genreMapper({ genres, state, handler });
  return <div className={styles.genres}>{genreList}</div>;
};

export default GenreSelector;
