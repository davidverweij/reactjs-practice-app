/* eslint-disable global-require */
// NOTE: disable global-require for dummy data, will be removed
// once data is fed top-down

import { MovieProps } from "../../components/Movie/Movie";

const MOVIES: MovieProps[] = [
  {
    id: "1",
    title: "Pulp Fiction",
    genres: ["Action", "Adventure"],
    releaseDate: "2004-02-01",
    rating: 3.3,
    runtime: 200,
    url: "google.com",
    imgUrl: require("../../images/pulpfiction.jpg"),
    overview: "good movie!",
  },
  {
    id: "2",
    title: "Bohemian Rhapsody",
    genres: ["Drama", "Biography", "Music"],
    releaseDate: "2003-02-01",
    rating: 4.4,
    runtime: 300,
    url: "google.com",
    imgUrl: require("../../images/bohemianrhapsody.jpg"),
    overview: "good movie!",
  },
  {
    id: "3",
    title: "Kill Bill: Vol 2",
    genres: ["Oscar winning Movie"],
    releaseDate: "1994-02-01",
    rating: 6,
    runtime: 10,
    url: "google.com",
    imgUrl: require("../../images/killbill2.jpg"),
    overview: "good movie!",
  },
  {
    id: "4",
    title: "Avenger: War of Infinity",
    genres: ["Action", "Adventure"],
    releaseDate: "2004-02-01",
    rating: 1,
    runtime: 230,
    url: "google.com",
    imgUrl: require("../../images/avengers.jpg"),
    overview: "good movie!",
  },
  {
    id: "5",
    title: "Inception",
    genres: ["Action", "Adventure"],
    releaseDate: "2003-02-01",
    rating: 10,
    runtime: 255,
    url: "google.com",
    imgUrl: require("../../images/inception.jpg"),
    overview: "good movie!",
  },
  {
    id: "6",
    title: "Resevoir Dogs",
    genres: ["Oscar winning Movie"],
    releaseDate: "1994-02-01",
    rating: 9,
    url: "google.com",
    runtime: 220,
    imgUrl: require("../../images/resevoirdogs.jpg"),
    overview: "good movie!",
  },
];

const fetchMovies = async (): Promise<MovieProps[]> => {
  return Promise.resolve(MOVIES); // mocked API for now
};

export default fetchMovies;
