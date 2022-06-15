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
            payload: event.target.value,
            checked: event.target.checked,
          });
        }}
        checked={value.includes(val)}
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

  const buttonStyle = `${styles["genre-input"]} ${showDropdown && styles.open}`;

  return (
    <label className={styles.wrapper} htmlFor={id}>
      {title}
      <span className={buttonStyle}>
        <button
          id={id}
          type="button"
          name={id}
          onClick={() => {
            setShowDropdown((prev) => !prev);
          }}
        >
          {placeholder}
        </button>
        {showDropdown && genreList}
      </span>
      {showValidation && <span>{validationMessage}</span>}
    </label>
  );
};

export default GenreDropdown;

// <div className={styles.sort}>
//       <span className={styles["sort-label"]}>{dict.SORT_LABEL}</span>
//       <div className={styles["select-wrapper"]}>
//         <button
//           className={styles.button}
//           onClick={dropdownHandler}
//           type="button"
//         >
//           {sortby[state as keyof I18ySortoptions]}
//         </button>
//         {showDropdown && (
//           <SortByDropdown selectHandler={selectSortHandler} sortby={sortby} />
//         )}
//       </div>
//     </div>
