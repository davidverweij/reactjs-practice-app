import React from "react";

import styles from "./GenreToggle.module.css";

const GenreToggle = (props) => {
  return (
    <div className={styles.genre}>
      <div className={styles.dropdown}>
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
  );
};

export default GenreToggle;
