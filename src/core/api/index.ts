/* eslint-disable global-require */
// NOTE: disable global-require for dummy data, will be removed
// once data is fed top-down

export interface MovieProps {
  id: string;
  title: string;
  genres: string[];
  releasedate: string;
  runtime: number;
  rating: number;
  url: string;
  imgUrl: string;
  overview: string;
}

const MOVIES: MovieProps[] = [
  {
    id: "1",
    title: "Pulp Fiction",
    genres: ["action", "adventure"],
    releasedate: "2004-02-01",
    rating: 3.3,
    runtime: 200,
    url: "google.com",
    imgUrl: require("../../images/pulpfiction.jpg"),
    overview: "good movie!",
  },
  {
    id: "2",
    title: "Bohemian Rhapsody",
    genres: ["drama", "biography", "music"],
    releasedate: "2003-02-01",
    rating: 4.4,
    runtime: 300,
    url: "google.com",
    imgUrl: require("../../images/bohemianrhapsody.jpg"),
    overview: "good movie!",
  },
  {
    id: "3",
    title: "Kill Bill: Vol 2",
    genres: ["oscar"],
    releasedate: "1994-02-01",
    rating: 6,
    runtime: 10,
    url: "google.com",
    imgUrl: require("../../images/killbill2.jpg"),
    overview: "good movie!",
  },
  {
    id: "4",
    title: "Avenger: War of Infinity",
    genres: ["action", "adventure"],
    releasedate: "2004-02-01",
    rating: 1,
    runtime: 230,
    url: "google.com",
    imgUrl: require("../../images/avengers.jpg"),
    overview: "good movie!",
  },
  {
    id: "5",
    title: "Inception",
    genres: ["action", "adventure"],
    releasedate: "2003-02-01",
    rating: 10,
    runtime: 255,
    url: "google.com",
    imgUrl: require("../../images/inception.jpg"),
    overview: "good movie!",
  },
  {
    id: "6",
    title: "Resevoir Dogs",
    genres: ["oscar"],
    releasedate: "1994-02-01",
    rating: 9,
    url: "google.com",
    runtime: 220,
    imgUrl: require("../../images/resevoirdogs.jpg"),
    overview: "good movie!",
  },
];

export const fetchMovies = async (): Promise<MovieProps[]> => {
  return Promise.resolve(MOVIES); // mocked API for now
};

export const putMovie = async (updatedMovie: MovieProps): Promise<void> => {
  const index = MOVIES.findIndex((movie) => movie.id === updatedMovie.id);

  // update if existing movie, add if new
  if (index !== -1) {
    MOVIES[index] = { ...updatedMovie };
  } else {
    MOVIES.push({ ...updatedMovie });
  }
  return Promise.resolve(); // mocked API for now
};
