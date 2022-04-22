import React, { useState } from "react";

import styles from "./GenreToggle.module.css";

const GenreToggle = (props) => {
  const [showGenreState, setShowGenreState] = useState(false);

  const showGenreHandler = () => {
    setShowGenreState(!showGenreState);
  };

  return (
    <div className={styles.genre}>
      <div className={styles.button}>
        <div onClick={showGenreHandler}>
          <span className={showGenreState ? styles.open : ""}>
            Select Genre
          </span>
        </div>
        <div
          className={`${!showGenreState ? styles.hide : ""} ${styles.dropdown}`}
        >
          {props.genres.map((genre) => {
            return (
              <div className={styles.option} key={genre}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id={genre}
                  name={genre}
                ></input>
                <label htmlFor={genre}>{genre}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GenreToggle;
