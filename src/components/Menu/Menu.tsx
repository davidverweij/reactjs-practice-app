import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../../ui/Button/Button";

import styles from "./Menu.module.scss";
import ICONS from "../../core/constants/ICONS";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import LanguageContext from "../../core/contexts/i18y";
import EditorContext, {
  EditorContextActionType,
} from "../../core/contexts/movieEditor";

const Menu = (): JSX.Element => {
  const { dict } = useContext(LanguageContext);
  const { dispatchEditor } = useContext(EditorContext);

  const addMovieHandler = (): void => {
    dispatchEditor({
      type: EditorContextActionType.OPEN_EDITOR,
      payload: {
        modalTitle: dict.FORM_HEADER_EDIT,
        movieDetails: null,
      },
    });
  };

  return (
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
  );
};

export default Menu;
