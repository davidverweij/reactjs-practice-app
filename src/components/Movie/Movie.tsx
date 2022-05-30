import React, { useContext, useState } from "react";
import LanguageContext from "../../core/contexts/i18y";
import ContextMenu from "../ContextMenu/ContextMenu";
import MovieForm from "../MovieForm/MovieForm";

import styles from "./Movie.module.scss";

export interface MovieProps {
  id: string;
  title: string;
  genres: string[];
  releaseDate: string;
  runtime: number;
  rating: number;
  url: string;
  imgUrl: string;
  overview: string;
}

const Movie = ({
  id,
  title,
  genres,
  url,
  runtime,
  rating,
  releaseDate,
  imgUrl,
  overview,
}: MovieProps): JSX.Element => {
  const { dict } = useContext(LanguageContext);

  const [menuState, setMenuState] = useState<boolean>(false);
  const [showEditor, setShowEditor] = useState<boolean>(false);

  const onEditHandler = (): void => {
    setMenuState(false);
    setShowEditor((prev) => !prev);
  };

  const onDeleteHandler = (): void => {
    console.warn(`Not yet Implemented - deleting movie ${id}`);
    setMenuState(false);
  };

  return (
    <>
      {showEditor && (
        <MovieForm
          id={id}
          title={title}
          url={url}
          genres={genres}
          overview={overview}
          date={releaseDate}
          rating={rating.toString()}
          runtime={runtime.toString()}
          closeFormHandler={onEditHandler}
          formTitle={dict.FORM_HEADER_EDIT}
        />
      )}
      <div
        onMouseEnter={() => {
          setMenuState(true);
        }}
        onMouseLeave={() => {
          setMenuState(false);
        }}
        className={styles.movie}
      >
        <img alt={`${dict.MOVIE_POSTER_ALT} ${title}`} src={imgUrl} />
        <div className={styles.caption}>
          <span>{title}</span>
          <span className={styles.date}>{releaseDate}</span>
        </div>
        <span className={styles.genre}>{genres.join(", ")}</span>
        {menuState && (
          <ContextMenu onEdit={onEditHandler} onDelete={onDeleteHandler} />
        )}
      </div>
    </>
  );
};

export default Movie;
