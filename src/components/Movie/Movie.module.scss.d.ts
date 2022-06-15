declare namespace MovieModuleScssNamespace {
  export interface IMovieModuleScss {
    caption: string;
    date: string;
    "delete-button": string;
    "delete-modal": string;
    genre: string;
    movie: string;
  }
}

declare const MovieModuleScssModule: MovieModuleScssNamespace.IMovieModuleScss;

export = MovieModuleScssModule;
