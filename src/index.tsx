import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

import "./style/global.scss";

const root = ReactDom.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
