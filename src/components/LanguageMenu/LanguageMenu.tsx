import React, { useContext } from "react";
import LanguageContext, { ContextActionType } from "../../core/contexts/i18y";

import styles from "./LanguageMenu.module.scss";

import {
  AvailableLanguages,
  availableLanguagesObject,
} from "../../core/i18y/I18yStrings";

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
      key={lang}
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
  const { lang, dict, setLanguageState } = useContext(LanguageContext);

  const selectHandler = (language: AvailableLanguages): void => {
    setLanguageState({
      type: ContextActionType.CHANGE_LANGUAGE,
      payload: language,
    });
    onExit();
  };

  const languageList = languageMapper(
    availableLanguagesObject,
    selectHandler,
    lang
  );

  return (
    <div className={styles["language-menu"]}>
      <span
        role="button"
        tabIndex={0}
        onClick={onExit}
        onKeyDown={onExit}
        className={styles.exit}
        aria-label={dict.EXIT_BUTTON}
      />
      {languageList}
    </div>
  );
};

export default LanguageMenu;
