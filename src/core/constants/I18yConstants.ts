export interface I18yGenres {
  ALL: string;
  DOCUMENTARY: string;
  COMEDY: string;
  HORROR: string;
  CRIME: string;
  DRAMA: string;
  BIOGRAPHY: string;
  MUSIC: string;
  OSCAR: string;
}

interface I18ySortoptions {
  RELEASE_DATE: string;
  RATING: string;
  RUNTIME: string;
  TITLE: string;
}

interface I18yConstants {
  GENRES: I18yGenres;
  SORTOPTIONS: I18ySortoptions;
}

// type I18yConstants = Record<keyof I18yValues, typeof I18yValues>;

export default I18yConstants;
