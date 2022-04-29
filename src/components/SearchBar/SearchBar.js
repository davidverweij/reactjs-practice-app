import React, { useState } from "react";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [inputState, setInputState] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();
    console.log(`Searching for '${inputState}'`);
    setInputState("");
  };

  const inputChangeHandler = (event) => {
    setInputState(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.bar}
        type="text"
        placeholder="What do you want to watch?"
        value={inputState}
        onChange={inputChangeHandler}
      ></input>
      <button onClick={searchHandler} type="submit" className={styles.button}>
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
