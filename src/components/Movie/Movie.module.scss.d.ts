declare namespace MovieModuleScssNamespace {
  export interface IMovieModuleScss {
    caption: string;
    date: string;
    genre: string;
    movie: string;
  }
}

declare const MovieModuleScssModule: MovieModuleScssNamespace.IMovieModuleScss;

export = MovieModuleScssModule;
