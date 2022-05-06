import { useContext } from "react";
import I18yConstants from "./I18yConstants";

// Module imports can be done dynamically/lazy in future tasks
import LanguageContext from "../contexts/i18y";
import { CONSTANTS as NL } from "../i18y/locales/NL";
import { CONSTANTS as EN } from "../i18y/locales/EN";

const CONSTANTS = (): I18yConstants => {
  const { languageState } = useContext(LanguageContext);

  switch (languageState) {
    case "NL":
      return NL;
    default:
      return EN;
  }
};

export default CONSTANTS;
