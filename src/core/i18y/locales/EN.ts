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
  ADD_MOVIE_HEADER: "Add movie",
  FORM_TITLE: "Title",
  FORM_URL: "Movie url",
  FORM_OVERVIEW: "Overview",
  FORM_OVERVIEW_PLACEHOLDER: "Movie description",
  FORM_RUNTIME_PLACEHOLDER: "Minutes",
  GENRE: "Genre",
  FORM_TITLE_VALIDATION: "Please provide a title",
  FORM_URL_VALIDATION: "Provide a valid URL",
  FORM_DATE_VALIDATION: "Enter a valid date",
  FORM_RUNTIME_VALIDATION: "Enter a positive whole number without decimals",
  FORM_RATING_VALIDATION:
    "Enter a number between 0.1 and 10 (optionally with one decimal)",
  FORM_OVERVIEW_VALIDATION: "Please provide a brief summary of the movie",
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
