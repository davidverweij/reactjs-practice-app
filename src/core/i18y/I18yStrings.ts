interface I18yStrings {
  HEADER_IMAGE_ALT: string;
  MOVIE_POSTER_ALT: string;
  ADD_MOVIE_BTN: string;
  HOME_TITLE: string;
  SEARCH_BTN: string;
  SEARCH_PLACEHOLDER: string;
  SORT_LABEL: string;
  ERROR_MSG: string;
  MOVIES_FOUND: string;
  SET_LANGUAGE: string;
  EXIT_BUTTON: string;
  EDIT_BUTTON: string;
  DELETE_BUTTON: string;
  CONFIRM_BUTTON: string;
  FORM_HEADER_ADD: string;
  FORM_HEADER_DELETE: string;
  FORM_BODY_DELETE: string;
  FORM_HEADER_EDIT: string;
  FORM_HEADER_SUCCESS: string;
  FORM_TITLE: string;
  FORM_URL: string;
  FORM_OVERVIEW: string;
  FORM_OVERVIEW_PLACEHOLDER: string;
  FORM_RUNTIME_PLACEHOLDER: string;
  FORM_GENRE_PLACEHOLDER: string;
  GENRE: string;
  FORM_TITLE_VALIDATION: string;
  FORM_URL_VALIDATION: string;
  FORM_DATE_VALIDATION: string;
  FORM_GENRE_VALIDATION: string;
  FORM_RUNTIME_VALIDATION: string;
  FORM_RATING_VALIDATION: string;
  FORM_OVERVIEW_VALIDATION: string;
  FORM_SUCCESS_TITLE: string;
  FORM_SUCCESS_BODY_ADD: string;
  FORM_SUCCESS_BODY_EDIT: string;
}

export const availableLanguagesObject = ["EN", "NL"] as const;
export type AvailableLanguages = typeof availableLanguagesObject[number];

// type I18yStrings = Record<keyof I18yValues, string>;

export default I18yStrings;
