import I18yConstants from "./I18yConstants";

// Module imports can be done dynamically/lazy in future tasks
import { CONSTANTS as NL } from "../i18y/locales/NL";
import { CONSTANTS as EN } from "../i18y/locales/EN";
import { AvailableLanguages } from "../i18y/I18yStrings";

const CONSTANTS = (lang: AvailableLanguages): I18yConstants => {
  switch (lang) {
    case "NL":
      return NL;
    default:
      return EN;
  }
};

export default CONSTANTS;
