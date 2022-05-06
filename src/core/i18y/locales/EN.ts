import I18yConstants from "../../constants/I18yConstants";
import I18yStrings from "../I18yStrings";

const EN: I18yStrings = {
  HEADER_IMAGE_ALT: "Blurry backdrop displaying video catalog",
  MOVIE_POSTER_ALT: "Movie poster from",
  ADD_MOVIE_BTN: "Add movie",
  HOME_TITLE: "Find your movie",
  SEARCH_BTN: "Search",
  SEARCH_PLACEHOLDER: "What do you want to watch?",
  SORT_LABEL: "Sort by",
  ERROR_MSG: "Something went wrong. Please bear with us as we fix the issue",
  MOVIES_FOUND: "movies found",
  SET_LANGUAGE: "Language",
  EXIT_BUTTON: "close",
  EDIT_BUTTON: "edit",
  DELETE_BUTTON: "delete",
};

const genres = {
  ALL: "All",
  DOCUMENTARY: "Documentary",
  COMEDY: "Comedy",
  HORROR: "Horror",
  CRIME: "Crime",
  DRAMA: "Drama",
  BIOGRAPHY: "Biography",
  MUSIC: "Music",
  OSCAR: "Oscar",
};

const sortoptions = {
  RELEASE_DATE: "Release date",
  RATING: "Rating",
  RUNTIME: "Runtime",
  TITLE: "Title",
};

export const CONSTANTS: I18yConstants = {
  GENRES: genres,
  SORTOPTIONS: sortoptions,
};

export default EN;
