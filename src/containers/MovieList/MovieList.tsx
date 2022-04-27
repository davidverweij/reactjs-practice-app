import React from "react";
import Movie, { MovieProps } from "../../components/Movie/Movie";

import styles from "./MovieList.module.scss";

const movies: Array<MovieProps> = [
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

const MovieList = () => {
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
