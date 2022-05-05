import React, { useContext } from "react";
import LanguageContext from "../../core/contexts/i18y";

import styles from "./LanguageMenu.module.scss";

import {
  AvailableLanguages,
  availableLanguagesObject,
} from "../../core/i18y/I18yStrings";
import I18Y from "../../core/i18y";

interface LanguageMenuProps {
  onExit: () => void;
}
const languageMapper = (
  languages: ReadonlyArray<AvailableLanguages>,
  onSelect: (language: AvailableLanguages) => void,
  languageState: AvailableLanguages
): JSX.Element[] => {
  const buttons = languages.map((lang) => (
    <button
      disabled={languageState === lang}
      type="button"
      onClick={() => onSelect(lang)}
    >
      {lang}
    </button>
  ));
  return buttons;
};

const LanguageMenu = ({ onExit }: LanguageMenuProps): JSX.Element => {
  const { languageState, setLanguageState } = useContext(LanguageContext);

  const selectHandler = (language: AvailableLanguages): void => {
    setLanguageState(language);
    onExit();
  };

  const languageList = languageMapper(
    availableLanguagesObject,
    selectHandler,
    languageState
  );

  return (
    <div className={styles["language-menu"]}>
      <span
        role="button"
        tabIndex={0}
        onClick={onExit}
        onKeyDown={onExit}
        className={styles.exit}
        aria-label={I18Y().EXIT_BUTTON}
      />
      {languageList}
    </div>
  );
};

export default LanguageMenu;
