import React, { useContext, useState } from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../../ui/Button/Button";

import styles from "./Menu.module.scss";
import ICONS from "../../core/constants/ICONS";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import LanguageContext from "../../core/contexts/i18y";
import MovieForm from "../MovieForm/MovieForm";

const Menu = (): JSX.Element => {
  const { dict } = useContext(LanguageContext);
  const [showEditor, setShowEditor] = useState<boolean>(false);

  const addMovieHandler = (): void => {
    setShowEditor((prev) => !prev);
  };

  return (
    <>
      {showEditor && (
        <MovieForm
          id=""
          title=""
          url=""
          genres={[]}
          overview=""
          date=""
          rating=""
          runtime=""
          closeFormHandler={addMovieHandler}
          formTitle={dict.FORM_HEADER_ADD}
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
