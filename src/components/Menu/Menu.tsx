import React, { useContext, useState } from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../../ui/Button/Button";

import styles from "./Menu.module.scss";
import ICONS from "../../core/constants/ICONS";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import MovieForm from "../MovieForm/MovieForm";
import Modal from "../../ui/Modal/Modal";
import LanguageContext from "../../core/contexts/i18y";

const Menu = (): JSX.Element => {
  const { dict } = useContext(LanguageContext);

  const [menuState, setMenuState] = useState<boolean>(false);

  return (
    <div className={styles.menu}>
      <Logo />
      <div className={styles.buttons}>
        {menuState && (
          <Modal
            header={dict.ADD_MOVIE_HEADER}
            onDismiss={() => {
              setMenuState(false);
            }}
          >
            <MovieForm />
          </Modal>
        )}

        <LanguageToggle />

        <Button
          className={styles.button}
          text={dict.ADD_MOVIE_BTN}
          icon={ICONS.PLUS}
          onClick={() => setMenuState(true)}
        />
      </div>
      <div className={styles.search}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Menu;
