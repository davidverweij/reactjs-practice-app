import React, { useState } from "react";
import I18Y from "../../core/i18y";
import ContextMenu from "../ContextMenu/ContextMenu";

import styles from "./Movie.module.scss";

export interface MovieProps {
  id: string;
  title: string;
  genre: string;
  releaseDate: number;
  imgUrl: string;
}

const Movie = ({
  id,
  title,
  genre,
  releaseDate,
  imgUrl,
}: MovieProps): JSX.Element => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const onEditHandler = (): void => {
    console.warn(`Not yet Implemented - editing movie ${id}`);
    setMenuState(false);
  };

  const onDeleteHandler = (): void => {
    console.warn(`Not yet Implemented - deleting movie ${id}`);
    setMenuState(false);
  };

  return (
    <div
      onMouseEnter={() => {
        setMenuState(true);
      }}
      onMouseLeave={() => {
        setMenuState(false);
      }}
      className={styles.movie}
    >
      <img alt={`${I18Y().MOVIE_POSTER_ALT} ${title}`} src={imgUrl} />
      <div className={styles.caption}>
        <span>{title}</span>
        <span className={styles.date}>{releaseDate}</span>
      </div>
      <span className={styles.genre}>{genre}</span>
      {menuState && (
        <ContextMenu onEdit={onEditHandler} onDelete={onDeleteHandler} />
      )}
    </div>
  );
};

export default Movie;
