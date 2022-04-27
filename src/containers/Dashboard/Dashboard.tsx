import React from "react";
import FilterBar from "../FilterBar/FilterBar";
import { MovieProps } from "../../components/Movie/Movie";
import MovieList from "../MovieList/MovieList";

import styles from "./Dashboard.module.scss";

// DATA

const genres = ["All", "Documentary", "Comedy", "Horror", "Crime"];
const sortOptions = ["Release date", "Rating", "Runtime", "Title"];

const movies: MovieProps[] = [
  {
    title: "Pulp Fiction",
    genre: "Action & Adventure",
    releaseDate: 2004,
    imgUrl: require("../../images/pulpfiction.jpg"),
  },
  {
    title: "Bohemian Rhapsody",
    genre: "Drama, Biography, Music",
    releaseDate: 2003,
    imgUrl: require("../../images/bohemianrhapsody.jpg"),
  },
  {
    title: "Kill Bill: Vol 2",
    genre: "Oscar winning Movie",
    releaseDate: 1994,
    imgUrl: require("../../images/killbill2.jpg"),
  },
  {
    title: "Avenger: War of Infinity",
    genre: "Action & Adventure",
    releaseDate: 2004,
    imgUrl: require("../../images/avengers.jpg"),
  },
  {
    title: "Inception",
    genre: "Action & Adventure",
    releaseDate: 2003,
    imgUrl: require("../../images/inception.jpg"),
  },
  {
    title: "Resevoir Dogs",
    genre: "Oscar winning Movie",
    releaseDate: 1994,
    imgUrl: require("../../images/resevoirdogs.jpg"),
  },
];

const Dashboard = (): JSX.Element => {
  return (
    <div className={styles.dashboard}>
      <FilterBar genres={genres} sortOptions={sortOptions} />
      <hr className={styles.hr} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Dashboard;
