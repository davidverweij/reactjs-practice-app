import I18yStrings, { AvailableLanguages } from "./I18yStrings";

// Module imports can be done dynamically/lazy in future tasks
import NL from "./locales/NL";
import EN from "./locales/EN";

const I18Y = (language: AvailableLanguages): I18yStrings => {
  switch (language) {
    case "NL":
      return NL;
    default:
      return EN;
  }
};

export default I18Y;
