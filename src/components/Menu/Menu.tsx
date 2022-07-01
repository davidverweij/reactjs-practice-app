import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../../ui/Button/Button";

import styles from "./Menu.module.scss";
import ICONS from "../../core/constants/ICONS";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import LanguageContext from "../../core/contexts/i18y";
import MovieForm from "../MovieForm/MovieForm";
import { MovieProps, putMovie } from "../../core/api";
import ModalSuccess from "../../ui/ModalSuccess/ModalSuccess";

const Menu = (): JSX.Element => {
  const { dict } = useContext(LanguageContext);
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const submitMovieHandler = async (movie: MovieProps): Promise<void> => {
    await putMovie(movie);
    setShowEditor(false);
    return setShowSuccessModal(true);
  };

  const dismissSuccessModalHandler = (): void => {
    setShowSuccessModal(false);
  };

  const closeFormHandler = (): void => {
    setShowEditor(false);
  };

  const addMovieHandler = (): void => {
    setShowEditor(true);
  };

  return (
    <>
      {showEditor && (
        <MovieForm
          id={uuidv4()}
          title=""
          url=""
          genres={[]}
          overview=""
          date=""
          rating=""
          runtime=""
          closeFormHandler={closeFormHandler}
          formTitle={dict.FORM_HEADER_ADD}
          onSubmitHandler={submitMovieHandler}
        />
      )}
      {showSuccessModal && (
        <ModalSuccess
          title={dict.FORM_SUCCESS_TITLE}
          body={dict.FORM_SUCCESS_BODY_ADD}
          onDismiss={dismissSuccessModalHandler}
        />
      )}
      <div className={styles.menu}>
        <Logo />
        <div className={styles.buttons}>
          <LanguageToggle />
          <Button
            className={styles.button}
            text={dict.ADD_MOVIE_BTN}
            icon={ICONS.PLUS}
            onClick={addMovieHandler}
          />
        </div>
        <div className={styles.search}>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Menu;
