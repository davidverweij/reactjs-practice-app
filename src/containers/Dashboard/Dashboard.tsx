import React, { useContext, useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";

import styles from "./Dashboard.module.scss";
import { fetchMovies, MovieProps } from "../../core/api";
import LanguageContext from "../../core/contexts/i18y";
import GenreSelector from "../../components/GenreSelector/GenreSelector";
import SortBySelector from "../../components/SortBySelector/SortBySelector";
import {
  I18yGenres,
  I18ySortoptions,
} from "../../core/constants/I18yConstants";

const moviesMapper = (
  movies: MovieProps[],
  genres: I18yGenres,
  genreFilter: string,
  sortFilter: string
): MovieProps[] => {
  return movies
    .filter(
      (m) =>
        genreFilter === Object.keys(genres)[0] || m.genres.includes(genreFilter)
    )
    .sort((a, b) => {
      const sortKey = sortFilter as keyof I18ySortoptions;
      if (a[sortKey] < b[sortKey]) {
        return -1;
      }
      if (a[sortKey] > b[sortKey]) {
        return 1;
      }
      return 0;
    });
};

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
    const filteredMovies = moviesMapper(
      movies,
      constants.GENRES,
      genreState,
      sortState
    );
    setFilteredMovieState(filteredMovies);
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await fetchMovies();
      setMoviesState(data);
      sortAndFilterHandler(data);
    };

    fetchData().catch(console.error);
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
