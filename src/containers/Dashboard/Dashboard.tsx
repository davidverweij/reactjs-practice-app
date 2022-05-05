import React, { useEffect, useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import MovieList from "../MovieList/MovieList";

import styles from "./Dashboard.module.scss";
import fetchMovies from "../../core/api/fetchMovies";

const Dashboard = (): JSX.Element => {
  const [moviesState, setMoviesState] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then((movies) => {
        setMoviesState(movies);
      })
      .catch(console.error);
  }, [fetchMovies]);

  return (
    <div className={styles.dashboard}>
      <FilterBar />
      <hr className={styles.hr} />
      <MovieList movies={moviesState} />
    </div>
  );
};

export default Dashboard;
