import React from "react";
import Movie, { MovieProps } from "../../components/Movie/Movie";

import styles from "./MovieList.module.scss";

interface MovieListProps {
  movies: MovieProps[];
}

const movieListMapper = ({
  title,
  genre,
  releaseDate,
  imgUrl,
}: MovieProps): JSX.Element => {
  return (
    <Movie
      key={title}
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
        <span className={styles.thick}>39</span> movies found
      </div>
      <div className={styles.grid}>{movieList}</div>
    </>
  );
};

export default MovieList;
