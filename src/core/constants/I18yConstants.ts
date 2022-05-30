export interface I18yGenres {
  all: string;
  action: string;
  adventure: string;
  drama: string;
  biography: string;
  music: string;
  oscar: string;
}

export interface I18ySortoptions {
  releasedate: string;
  rating: string;
  runtime: string;
  title: string;
}

interface I18yConstants {
  GENRES: I18yGenres;
  SORTOPTIONS: I18ySortoptions;
}

// type I18yConstants = Record<keyof I18yValues, typeof I18yValues>;

export default I18yConstants;
