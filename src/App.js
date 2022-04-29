import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import GenreToggle from "./components/GenreToggle/GenreToggle";
import SearchBar from "./components/SearchBar/SearchBar";
import StaticHeader from "./components/StaticHeader/StaticHeader";

const genres = ["Crime", "Documentary", "Horror", "Comedy"];

function App() {
  return React.createElement(
    "div",
    { className: "App" },
    <StaticHeader />,
    React.createElement(
      "section",
      { className: "App-header" },
      <Counter />,
      <SearchBar />,
      <GenreToggle genres={genres} />
    )
  );
}

export default App;
