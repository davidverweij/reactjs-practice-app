import I18yConstants from "../../constants/I18yConstants";
import I18yStrings from "../I18yStrings";

const NL: I18yStrings = {
  HEADER_IMAGE_ALT: "Wazige achtergrond van een video catalogus",
  MOVIE_POSTER_ALT: "Film poster van",
  ADD_MOVIE_BTN: "Nieuwe film",
  HOME_TITLE: "Vind je film",
  SEARCH_BTN: "Zoek",
  SEARCH_PLACEHOLDER: "What wil je kijken?",
  SORT_LABEL: "Sorteer op",
  ERROR_MSG:
    "Iets ging fout. Even geduld terwijl wij het repareren alstubflieft",
  MOVIES_FOUND: "films gevonden",
  SET_LANGUAGE: "taal",
  EXIT_BUTTON: "sluit venster",
};

const genres = {
  ALL: "Alles",
  DOCUMENTARY: "Documentaire",
  COMEDY: "Comedie",
  HORROR: "Horror",
  CRIME: "Misdaad",
  DRAMA: "Drama",
  BIOGRAPHY: "Biografie",
  MUSIC: "Muziek",
  OSCAR: "Oscar",
};

const sortoptions = {
  RELEASE_DATE: "Publicatiedatum",
  RATING: "Beoordeling",
  RUNTIME: "Duratie",
  TITLE: "Titel",
};

export const CONSTANTS: I18yConstants = {
  GENRES: genres,
  SORTOPTIONS: sortoptions,
};

export default NL;
