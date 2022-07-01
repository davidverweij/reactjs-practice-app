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
  EDIT_BUTTON: "wijzig",
  CONFIRM_BUTTON: "bevestig",
  DELETE_BUTTON: "verwijder",
  FORM_HEADER_ADD: "Voeg film toe",
  FORM_HEADER_DELETE: "Verwijder film",
  FORM_BODY_DELETE: "Weet je zeker dat je deze film wilt verwijderen?",
  FORM_HEADER_EDIT: "Bewerk film",
  FORM_HEADER_SUCCESS: "Success!",
  FORM_TITLE: "Titel",
  FORM_URL: "Link naar film",
  FORM_OVERVIEW: "Samenvatting",
  FORM_OVERVIEW_PLACEHOLDER: "Film beschrijving",
  FORM_RUNTIME_PLACEHOLDER: "Minuten",
  FORM_GENRE_PLACEHOLDER: "Selecteer genres",
  GENRE: "Genre",
  FORM_TITLE_VALIDATION: "Vul een titel in",
  FORM_URL_VALIDATION: "Vul een geldige URL in",
  FORM_DATE_VALIDATION: "Vul een geldige datum in",
  FORM_RUNTIME_VALIDATION: "Vul een positief nummer in zonder decimalen",
  FORM_RATING_VALIDATION:
    "Vul een score in tussen 0.1 and 10 (optioneel met 1 decimaal)",
  FORM_OVERVIEW_VALIDATION: "Vul een korte samenvatting in",
  FORM_GENRE_VALIDATION: "Selecteer ten minste één genre",
  FORM_SUCCESS_TITLE: "Gefeliciteerd!",
  FORM_SUCCESS_BODY_ADD: "De film is successvol aan de database toegevoegd",
  FORM_SUCCESS_BODY_EDIT: "De film is successvol aangepast in de database",
};

const genres = {
  all: "Alles",
  documentary: "Documentaire",
  drama: "Drama",
  biography: "Biografie",
  music: "Muziek",
  oscar: "Oscar",
  action: "Actie",
  adventure: "Avontuur",
};

const sortoptions = {
  releasedate: "Publicatiedatum",
  rating: "Beoordeling",
  runtime: "Duratie",
  title: "Titel",
};

export const CONSTANTS: I18yConstants = {
  GENRES: genres,
  SORTOPTIONS: sortoptions,
};

export default NL;
