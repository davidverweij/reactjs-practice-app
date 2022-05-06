/* eslint-disable global-require */
// NOTE: disable global-require for dummy data, will be removed
// once data is fed top-down

import { MovieProps } from "../../components/Movie/Movie";

const MOVIES: MovieProps[] = [
  {
    id: "1",
    title: "Pulp Fiction",
    genre: "Action & Adventure",
    releaseDate: 2004,
    imgUrl: require("../../images/pulpfiction.jpg"),
  },
  {
    id: "2",
    title: "Bohemian Rhapsody",
    genre: "Drama, Biography, Music",
    releaseDate: 2003,
    imgUrl: require("../../images/bohemianrhapsody.jpg"),
  },
  {
    id: "3",
    title: "Kill Bill: Vol 2",
    genre: "Oscar winning Movie",
    releaseDate: 1994,
    imgUrl: require("../../images/killbill2.jpg"),
  },
  {
    id: "4",
    title: "Avenger: War of Infinity",
    genre: "Action & Adventure",
    releaseDate: 2004,
    imgUrl: require("../../images/avengers.jpg"),
  },
  {
    id: "5",
    title: "Inception",
    genre: "Action & Adventure",
    releaseDate: 2003,
    imgUrl: require("../../images/inception.jpg"),
  },
  {
    id: "6",
    title: "Resevoir Dogs",
    genre: "Oscar winning Movie",
    releaseDate: 1994,
    imgUrl: require("../../images/resevoirdogs.jpg"),
  },
];

const fetchMovies = async (): Promise<MovieProps[]> => {
  return Promise.resolve(MOVIES); // mocked API for now
};

export default fetchMovies;
