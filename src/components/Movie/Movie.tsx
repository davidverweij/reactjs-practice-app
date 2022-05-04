import React from "react";
import ContextMenuButton from "../ContextMenuButton/ContextMenuButton";

import styles from "./Movie.module.scss";

export interface MovieProps {
  title: string;
  genre: string;
  releaseDate: number;
  imgUrl: string;
}

const Movie = ({
  title,
  genre,
  releaseDate,
  imgUrl,
}: MovieProps): JSX.Element => {
  return (
    <div className={styles.movie}>
      <img alt={`Movie poster of ${title}`} src={imgUrl} />
      <div className={styles.caption}>
        <span>{title}</span>
        <span className={styles.date}>{releaseDate}</span>
      </div>
      <span className={styles.genre}>{genre}</span>
      <ContextMenuButton />
    </div>
  );
};

export default Movie;
