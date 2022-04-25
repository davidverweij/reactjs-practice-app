import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";

const root = ReactDom.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <App message={1} />
  </React.StrictMode>
);
