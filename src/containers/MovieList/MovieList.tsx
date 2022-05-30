import React, { useContext } from "react";
import Movie from "../../components/Movie/Movie";
import { MovieProps } from "../../core/api";
import LanguageContext from "../../core/contexts/i18y";

import styles from "./MovieList.module.scss";

interface MovieListProps {
  movies: MovieProps[];
}

const movieListMapper = ({
  id,
  title,
  genres,
  releasedate,
  imgUrl,
  overview,
  rating,
  runtime,
  url,
}: MovieProps): JSX.Element => {
  return (
    <Movie
      key={id}
      id={id}
      title={title}
      genres={genres}
      releasedate={releasedate}
      imgUrl={imgUrl}
      rating={rating}
      overview={overview}
      runtime={runtime}
      url={url}
    />
  );
};

const MovieList = ({ movies }: MovieListProps): JSX.Element => {
  const { dict } = useContext(LanguageContext);
  const movieList = movies.map(movieListMapper);

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
