import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { LanguageContextProvider } from "./core/contexts/i18y";
import { EditorContextProvider } from "./core/contexts/movieEditor";

import "./style/global.scss";

const root = ReactDom.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <EditorContextProvider>
        <App />
      </EditorContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
