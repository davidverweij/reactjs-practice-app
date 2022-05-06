import React from "react";
import Movie, { MovieProps } from "../../components/Movie/Movie";
import I18Y from "../../core/i18y";

import styles from "./MovieList.module.scss";

interface MovieListProps {
  movies: MovieProps[];
}

const movieListMapper = ({
  id,
  title,
  genre,
  releaseDate,
  imgUrl,
}: MovieProps): JSX.Element => {
  return (
    <Movie
      key={id}
      id={id}
      title={title}
      genre={genre}
      releaseDate={releaseDate}
      imgUrl={imgUrl}
    />
  );
};

const MovieList = ({ movies }: MovieListProps): JSX.Element => {
  const movieList = movies.map(movieListMapper);
  return (
    <>
      <div className={styles.stats}>
        <span className={styles.thick}>{movieList.length}</span>{" "}
        {I18Y().MOVIES_FOUND}
      </div>
      <div className={styles.grid}>{movieList}</div>
    </>
  );
};

export default MovieList;
