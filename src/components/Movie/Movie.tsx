import React, { useContext, useState } from "react";
import LanguageContext from "../../core/contexts/i18y";
import ContextMenu from "../ContextMenu/ContextMenu";
import MovieForm from "../MovieForm/MovieForm";
import { MovieProps, putMovie } from "../../core/api";

import styles from "./Movie.module.scss";

const Movie = ({
  id,
  title,
  genres,
  url,
  runtime,
  rating,
  releasedate,
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
          date={releasedate}
          rating={rating.toString()}
          runtime={runtime.toString()}
          closeFormHandler={onEditHandler}
          formTitle={dict.FORM_HEADER_EDIT}
          onSubmitHandler={putMovie}
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
          <span className={styles.date}>{releasedate}</span>
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
