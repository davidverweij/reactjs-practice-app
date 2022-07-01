import React, { useContext, useState } from "react";
import LanguageContext from "../../core/contexts/i18y";
import ContextMenu from "../ContextMenu/ContextMenu";
import MovieForm from "../MovieForm/MovieForm";
import { MovieProps } from "../../core/api";

import styles from "./Movie.module.scss";
import ModalSuccess from "../../ui/ModalSuccess/ModalSuccess";
import Modal from "../../ui/Modal/Modal";
import Button from "../../ui/Button/Button";

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
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const onEditHandler = (): void => {
    setMenuState(false);
    setShowEditor((prev) => !prev);
  };

  const onSubmitHandler = (): void => {
    setShowEditor(false);
    setShowSuccessModal(true);
  };

  const onDeleteHandler = (): void => {
    setMenuState(false);
    setShowDeleteModal((prev) => !prev);
  };

  const mouseEnterHandler = (): void => {
    setMenuState(true);
  };

  const mouseExitHandler = (): void => {
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
          onSubmitHandler={onSubmitHandler}
        />
      )}
      {showSuccessModal && (
        <ModalSuccess
          title={dict.FORM_SUCCESS_TITLE}
          body={dict.FORM_SUCCESS_BODY_EDIT}
          onDismiss={() => setShowSuccessModal(false)}
        />
      )}
      {showDeleteModal && (
        <Modal
          className={styles["delete-modal"]}
          header={dict.FORM_HEADER_DELETE}
          onDismiss={onDeleteHandler}
        >
          <p>{dict.FORM_BODY_DELETE}</p>
          <Button
            className={styles["delete-button"]}
            text={dict.CONFIRM_BUTTON}
            onClick={onDeleteHandler}
          />
        </Modal>
      )}
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseExitHandler}
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
