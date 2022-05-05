import React, { Dispatch, SetStateAction, ReactNode, useState } from "react";

import { AvailableLanguages } from "../i18y/I18yStrings";

interface LanguageContextValue {
  languageState: AvailableLanguages;
  setLanguageState: Dispatch<SetStateAction<AvailableLanguages>>;
}

const defaultLanguageContext: LanguageContextValue = {
  languageState: "EN",
  setLanguageState: (): AvailableLanguages => "EN",
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

interface LanguageContextProviderProps {
  children?: ReactNode;
}

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps): JSX.Element => {
  const [languageState, setLanguageState] = useState<AvailableLanguages>(
    defaultLanguageContext.languageState
  );

  return (
    <LanguageContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        languageState,
        setLanguageState,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
