import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { LanguageContextProvider } from "./core/contexts/i18y";

import "./style/global.scss";

const root = ReactDom.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </React.StrictMode>
);
