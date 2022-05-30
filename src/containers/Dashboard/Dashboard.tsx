import React, { useContext, useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";

import styles from "./Dashboard.module.scss";
import { fetchMovies, MovieProps } from "../../core/api";
import LanguageContext from "../../core/contexts/i18y";
import GenreSelector from "../../components/GenreSelector/GenreSelector";
import SortBySelector from "../../components/SortBySelector/SortBySelector";
import { I18ySortoptions } from "../../core/constants/I18yConstants";

const Dashboard = (): JSX.Element => {
  const { constants } = useContext(LanguageContext);

  const [moviesState, setMoviesState] = useState<MovieProps[]>([]);
  const [sortState, setSortState] = useState<string>(
    Object.keys(constants.SORTOPTIONS)[0]
  );
  const [genreState, setGenreState] = useState<string>(
    Object.keys(constants.GENRES)[0]
  );
  const [filteredMovieState, setFilteredMovieState] = useState([]);

  const sortAndFilterHandler = (movies: MovieProps[]): void => {
    const filteredMovies = movies
      .filter(
        (m) =>
          genreState === Object.keys(constants.GENRES)[0] ||
          m.genres.includes(genreState)
      )
      .sort((a, b) => {
        const sortKey = sortState as keyof I18ySortoptions;
        if (a[sortKey] < b[sortKey]) {
          return -1;
        }
        if (a[sortKey] > b[sortKey]) {
          return 1;
        }
        return 0;
      });
    setFilteredMovieState(filteredMovies);
  };

  useEffect(() => {
    fetchMovies()
      .then((movies) => {
        setMoviesState(movies);
        sortAndFilterHandler(movies);
      })
      .catch(console.error);
  }, [fetchMovies]);

  useEffect(() => {
    sortAndFilterHandler(moviesState);
  }, [sortState, genreState]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.selector}>
        <GenreSelector
          state={genreState}
          handler={setGenreState}
          genres={constants.GENRES}
        />
        <SortBySelector
          state={sortState}
          handler={setSortState}
          sortby={constants.SORTOPTIONS}
        />
      </div>
      <hr className={styles.hr} />
      <MovieList movies={filteredMovieState} />
    </div>
  );
};

export default Dashboard;
