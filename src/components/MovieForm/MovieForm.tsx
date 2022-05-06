import React, { useContext, useState } from "react";
import LanguageContext from "../../core/contexts/i18y";
import Button from "../../ui/Button/Button";

import styles from "./MovieForm.module.scss";

const MovieForm = (): JSX.Element => {
  const { dict } = useContext(LanguageContext);

  const [showGenreState, setShowGenreState] = useState<boolean>(false);

  const genreToggleHandler = (): void => {
    setShowGenreState((prev) => !prev);
  };

  return (
    <form>
      <div className={styles.form}>
        <label htmlFor="title">
          {dict.FORM_TITLE}
          <input placeholder="Title" type="text" id="title" name="title" />
        </label>
        <label htmlFor="lname">
          Release Date
          <input type="date" id="date" name="date" />
        </label>

        <label htmlFor="url">
          Movie URL
          <input placeholder="https://" type="text" id="url" name="url" />
        </label>
        <label htmlFor="rating">
          Rating
          <input placeholder="7.8" type="text" id="rating" name="rating" />
        </label>
        {showGenreState && (
          <label htmlFor="genre">
            Genre
            <input
              type="button"
              onClick={genreToggleHandler}
              id="genre"
              name="genre"
              placeholder="Select Genre"
              value="Select Genre"
            />
          </label>
        )}
        <label htmlFor="runtime">
          Runtime
          <input
            placeholder="Minutes"
            type="text"
            id="runtime"
            name="runtime"
          />
        </label>

        <label htmlFor="runtime">
          Overview
          <textarea
            placeholder="Movie description"
            id="runtime"
            name="runtime"
          />
        </label>
      </div>
      <div className={styles.control}>
        <Button className={styles.reset} text="Reset" onClick={() => {}} />
        <Button text="Submit" onClick={() => {}} />
      </div>
    </form>
  );
};

export default MovieForm;
