import { useContext } from "react";
import I18yStrings from "./I18yStrings";

// Module imports can be done dynamically/lazy in future tasks
import NL from "./locales/NL";
import EN from "./locales/EN";
import LanguageContext from "../contexts/i18y";

const I18Y = (): I18yStrings => {
  const { languageState } = useContext(LanguageContext);

  switch (languageState) {
    case "NL":
      return NL;
    default:
      return EN;
  }
};

export default I18Y;
