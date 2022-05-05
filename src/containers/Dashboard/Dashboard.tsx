import React, { useEffect, useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import MovieList from "../MovieList/MovieList";

import styles from "./Dashboard.module.scss";
import GENRES from "../../core/constants/GENRES";
import SORTOPTIONS from "../../core/constants/SORTOPTIONS";
import getMoviesMocked from "../../core/api/getMoviesMocked";

const Dashboard = (): JSX.Element => {
  const [moviesState, setMoviesState] = useState([]);

  const fetchMovies = async (): Promise<void> => {
    const movies = await getMoviesMocked();
    setMoviesState(movies);
  };

  useEffect(() => {
    fetchMovies().catch(console.error);
  }, [fetchMovies]);

  return (
    <div className={styles.dashboard}>
      <FilterBar genres={GENRES} sortOptions={SORTOPTIONS} />
      <hr className={styles.hr} />
      <MovieList movies={moviesState} />
    </div>
  );
};

export default Dashboard;
