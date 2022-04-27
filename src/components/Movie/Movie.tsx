import React from "react";

import styles from "./Movie.module.scss";

export interface MovieProps {
  title: string;
  genre: string;
  releaseDate: number;
  imgUrl: any;
}

const Movie = ({ title, genre, releaseDate, imgUrl }: MovieProps) => {
  return (
    <div className={styles.movie}>
      <img src={imgUrl} />
      <div className={styles.caption}>
        <span>{title}</span>
        <span className={styles.date}>{releaseDate}</span>
      </div>
      <div className={styles.genre}>{genre}</div>
    </div>
  );
};

export default Movie;
