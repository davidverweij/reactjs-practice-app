import React, { useContext } from "react";
import Movie from "../../components/Movie/Movie";
import { MovieProps } from "../../core/api";
import LanguageContext from "../../core/contexts/i18y";

import styles from "./MovieList.module.scss";

interface MovieListProps {
  movies: MovieProps[];
}

const movieListMapper = (movies: MovieProps[]): JSX.Element[] => {
  return movies.map((props: MovieProps) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Movie key={props.id} {...props} />
  ));
};

const MovieList = ({ movies }: MovieListProps): JSX.Element => {
  const { dict } = useContext(LanguageContext);
  const movieList = movieListMapper(movies);

  return (
    <>
      <div className={styles.stats}>
        <span className={styles.thick}>{movieList.length}</span>{" "}
        {dict.MOVIES_FOUND}
      </div>
      <div className={styles.grid}>{movieList}</div>
    </>
  );
};

export default MovieList;
