import React from "react";
import GenreSelector from "../../components/GenreSelector/GenreSelector";
import MovieList from "../MovieList/MovieList";

import styles from "./Dashboard.module.scss";

const genres = ["All", "Documentary", "Comedy", "Horror", "Crime"];
const sortOptions = ["Release date", "Rating", "Runtime", "Title"];

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <GenreSelector genres={genres} sortOptions={sortOptions} />
      <MovieList />
    </div>
  );
};

export default Dashboard;
