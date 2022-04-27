import React from "react";
import Movie, { MovieProps } from "../../components/Movie/Movie";

import styles from "./MovieList.module.scss";

interface MovieListProps {
  movies: MovieProps[];
}

const MovieList = ({ movies }: MovieListProps): JSX.Element => {
  return (
    <>
      <div className={styles.stats}>
        <span className={styles.thick}>39</span> movies found
      </div>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <Movie
            key={movie.title}
            title={movie.title}
            genre={movie.genre}
            releaseDate={movie.releaseDate}
            imgUrl={movie.imgUrl}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
