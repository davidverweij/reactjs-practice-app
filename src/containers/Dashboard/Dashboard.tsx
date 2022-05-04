import React from "react";
import FilterBar from "../FilterBar/FilterBar";
import MovieList from "../MovieList/MovieList";

import styles from "./Dashboard.module.scss";
import GENRES from "../../core/constants/GENRES";
import SORTOPTIONS from "../../core/constants/SORTOPTIONS";
import MOVIES from "../../core/data/MOVIES";

const Dashboard = (): JSX.Element => {
  return (
    <div className={styles.dashboard}>
      <FilterBar genres={GENRES} sortOptions={SORTOPTIONS} />
      <hr className={styles.hr} />
      <MovieList movies={MOVIES} />
    </div>
  );
};

export default Dashboard;
