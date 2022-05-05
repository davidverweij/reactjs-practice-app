import I18yStrings from "./I18yStrings";

// Module imports can be done dynamically/lazy in future tasks
import NL from "./locales/NL";
import EN from "./locales/EN";

type AvailableLanguages = "EN" | "NL";

const I18Y = (language: AvailableLanguages): I18yStrings => {
  switch (language) {
    case "NL":
      return NL;
    default:
      return EN;
  }
};

export default I18Y;
