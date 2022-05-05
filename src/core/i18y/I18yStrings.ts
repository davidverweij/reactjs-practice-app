interface I18yValues {
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
}

export const availableLanguagesObject = ["EN", "NL"] as const;
export type AvailableLanguages = typeof availableLanguagesObject[number];

type I18yStrings = Record<keyof I18yValues, string>;

export default I18yStrings;
