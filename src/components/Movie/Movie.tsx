import React, { useContext, useState } from "react";
import LanguageContext from "../../core/contexts/i18y";
import EditorContext, {
  EditorContextActionType,
} from "../../core/contexts/movieEditor";
import ContextMenu from "../ContextMenu/ContextMenu";

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
  const { dispatchEditor } = useContext(EditorContext);

  const [menuState, setMenuState] = useState<boolean>(false);

  const onEditHandler = (): void => {
    setMenuState(false);
    dispatchEditor({
      type: EditorContextActionType.OPEN_EDITOR,
      payload: {
        modalTitle: dict.FORM_HEADER_EDIT,
        movieDetails: {
          id,
          title,
          date: releaseDate.toString(),
          url,
          rating: rating.toString(),
          genres,
          runtime: runtime.toString(),
          overview: overview.toString(),
        },
      },
    });
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
  );
};

export default Movie;
