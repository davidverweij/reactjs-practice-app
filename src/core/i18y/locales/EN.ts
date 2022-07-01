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
  CONFIRM_BUTTON: "confirm",
  FORM_HEADER_ADD: "Add movie",
  FORM_HEADER_DELETE: "Delete movie",
  FORM_BODY_DELETE: "Are you sure you want to delete this movie?",
  FORM_HEADER_EDIT: "Edit movie",
  FORM_HEADER_SUCCESS: "Congratulations!",
  FORM_TITLE: "Title",
  FORM_URL: "Movie url",
  FORM_OVERVIEW: "Overview",
  FORM_OVERVIEW_PLACEHOLDER: "Movie description",
  FORM_RUNTIME_PLACEHOLDER: "Minutes",
  FORM_GENRE_PLACEHOLDER: "Select Genre",
  GENRE: "Genre",
  FORM_TITLE_VALIDATION: "Please provide a title",
  FORM_URL_VALIDATION: "Provide a valid URL",
  FORM_DATE_VALIDATION: "Enter a valid date",
  FORM_RUNTIME_VALIDATION: "Enter a positive whole number without decimals",
  FORM_RATING_VALIDATION:
    "Enter a number between 0.1 and 10 (optionally with one decimal)",
  FORM_OVERVIEW_VALIDATION: "Please provide a brief summary of the movie",
  FORM_GENRE_VALIDATION: "Please select at least one genre",
  FORM_SUCCESS_TITLE: "Congratulations!",
  FORM_SUCCESS_BODY_ADD: "The movie has been added to database successfully",
  FORM_SUCCESS_BODY_EDIT:
    "The movie has been edited in the database successfully",
};

const genres = {
  all: "All",
  documentary: "Documentary",
  comedy: "Comedy",
  drama: "Drama",
  biography: "Biography",
  music: "Music",
  oscar: "Oscar",
  action: "Action",
  adventure: "Adventure",
};

const sortoptions = {
  releasedate: "Release date",
  rating: "Rating",
  runtime: "Runtime",
  title: "Title",
};

export const CONSTANTS: I18yConstants = {
  GENRES: genres,
  SORTOPTIONS: sortoptions,
};

export default EN;
