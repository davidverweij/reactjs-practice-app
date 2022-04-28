import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";

const root = ReactDom.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    {/* Type error on purpose */}
    <App message={"Hello GitHub Pages"} />
  </React.StrictMode>
);
