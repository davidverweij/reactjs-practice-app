import React from "react";

import styles from "./Movie.module.scss";

export interface MovieProps {
  title: string;
  genre: string;
  releaseDate: number;
  imgUrl: string;
}

const EditButton = (): JSX.Element => {
  return (
    <div className={styles.edit}>
      <div />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div />
    </div>
  );
};

const Movie = ({
  title,
  genre,
  releaseDate,
  imgUrl,
}: MovieProps): JSX.Element => {
  console.log(imgUrl);
  return (
    <div className={styles.movie}>
      <img src={imgUrl} />
      <div className={styles.caption}>
        <span>{title}</span>
        <span className={styles.date}>{releaseDate}</span>
      </div>
      <span className={styles.genre}>{genre}</span>
      <EditButton />
    </div>
  );
};

export default Movie;
