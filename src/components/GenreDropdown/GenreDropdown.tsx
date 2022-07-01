import React, { Dispatch, useState } from "react";
import { I18yGenres } from "../../core/constants/I18yConstants";
import {
  FormActionType,
  MultiselectFormAction,
} from "../MovieFormInput/MovieFormInput";

import styles from "./GenreDropdown.module.scss";

interface GenreDropdownProps {
  title: string;
  id: string;
  value: string[];
  genres: Omit<I18yGenres, "all">;
  placeholder: string;
  dispatch: Dispatch<MultiselectFormAction>;
  action: FormActionType;
  showValidation: boolean;
  validationMessage: string;
}

const genreMapper = ({
  genres,
  value,
  dispatch,
  action,
}: Partial<GenreDropdownProps>): JSX.Element => {
  const mapped = Object.entries(genres).map(([key, val]) => (
    <label htmlFor={`tickbox_${val}`} className={styles.label} key={val}>
      <input
        id={`tickbox_${val}`}
        type="checkbox"
        className={styles.tickbox}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: action,
            payload: key,
            checked: event.target.checked,
          });
        }}
        checked={value.includes(key)}
        value={val}
        key={key}
      />
      {key}
    </label>
  ));
  return <div className={styles.dropdown}>{mapped}</div>;
};

const GenreDropdown = ({
  title,
  id,
  value,
  genres,
  dispatch,
  action,
  placeholder,
  showValidation,
  validationMessage,
}: GenreDropdownProps): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const genreList = genreMapper({ genres, value, dispatch, action });

  const toggleHandler = (): void => {
    setShowDropdown((prev) => !prev);
  };

  const buttonStyle = `${styles["genre-input"]} ${showDropdown && styles.open}`;

  return (
    <label className={styles.wrapper} htmlFor={id}>
      {title}
      <span className={buttonStyle}>
        <button id={id} type="button" name={id} onClick={toggleHandler}>
          {placeholder}
        </button>
        {showDropdown && genreList}
      </span>
      {showValidation && <span>{validationMessage}</span>}
    </label>
  );
};

export default GenreDropdown;
