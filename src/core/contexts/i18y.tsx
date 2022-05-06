import React, { Dispatch, ReactNode, useReducer } from "react";

import I18yStrings, { AvailableLanguages } from "../i18y/I18yStrings";
import I18Y from "../i18y";
import I18yConstants from "../constants/I18yConstants";
import CONSTANTS from "../constants";

export enum ContextActionType {
  "CHANGE_LANGUAGE",
}

interface ContextAction {
  type: ContextActionType;
  payload: AvailableLanguages;
}

interface LanguageState {
  lang: AvailableLanguages;
  dict: I18yStrings;
  constants: I18yConstants;
  setLanguageState: Dispatch<ContextAction>;
}

interface LanguageContextProviderProps {
  children?: ReactNode;
}

const defaultLanguageContext: LanguageState = {
  lang: "EN",
  dict: I18Y("EN"),
  constants: CONSTANTS("EN"),
  setLanguageState: () => {},
};

const LanguageContext = React.createContext<LanguageState | null>(null);

const cartReducer = (
  state: LanguageState,
  action: ContextAction
): LanguageState => {
  const { type, payload } = action;
  switch (type) {
    case ContextActionType.CHANGE_LANGUAGE:
      return {
        ...state,
        lang: payload,
        dict: I18Y(payload),
        constants: CONSTANTS(payload),
      };
    default:
      return state;
  }
};

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps): JSX.Element => {
  const [languageState, setLanguageState] = useReducer(
    cartReducer,
    defaultLanguageContext
  );

  const { lang, constants, dict } = languageState;

  return (
    <LanguageContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        lang,
        dict,
        constants,
        setLanguageState,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
