import React, { useContext, useState, useReducer } from "react";
import LanguageContext from "../../core/contexts/i18y";
import {
  urlValidator,
  movieScoreValidator,
  movieRuntimeValidator,
} from "../../core/utils/validators";
import Button from "../../ui/Button/Button";
import MovieFormInput, {
  FormAction,
  FormActionType,
} from "../MovieFormInput/MovieFormInput";

import styles from "./MovieForm.module.scss";

interface FormStateAttributeBase {
  isValid: boolean;
}

interface FormStateAttribute extends FormStateAttributeBase {
  value: string;
}

interface FormState {
  title: FormStateAttribute;
  url: FormStateAttribute;
  genre: { value: string[]; isValid: boolean };
  overview: FormStateAttribute;
  date: FormStateAttribute;
  rating: FormStateAttribute;
  runtime: FormStateAttribute;

  overallState: FormStateAttributeBase;
}

const defaultFormAttribute: FormStateAttribute = {
  value: "",
  isValid: false,
};

const defaultFormState: FormState = {
  title: defaultFormAttribute,
  url: defaultFormAttribute,
  genre: {
    ...defaultFormAttribute,
    value: [],
  },
  overview: defaultFormAttribute,
  date: defaultFormAttribute,
  rating: defaultFormAttribute,
  runtime: defaultFormAttribute,

  overallState: { isValid: true },
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  const { type, payload } = action;
  const values = { ...state };
  switch (type) {
    case FormActionType.UPDATE_TITLE:
      return {
        ...values,
        title: { value: payload, isValid: payload.trim().length > 0 },
      };
    case FormActionType.UPDATE_URL:
      return {
        ...values,
        url: { value: payload, isValid: urlValidator(payload) },
      };
    case FormActionType.UPDATE_GENRE:
      return {
        ...values,
        genre: { value: [payload], isValid: [payload].length > 0 },
      };
    case FormActionType.UPDATE_OVERVIEW:
      return {
        ...values,
        overview: { value: payload, isValid: payload.trim().length > 0 },
      };
    case FormActionType.UPDATE_DATE:
      return {
        ...values,
        date: { value: payload, isValid: payload.length > 0 },
      };
    case FormActionType.UPDATE_RATING:
      return {
        ...values,
        rating: { value: payload, isValid: movieScoreValidator(payload) },
      };
    case FormActionType.UPDATE_RUNTIME:
      return {
        ...values,
        runtime: { value: payload, isValid: movieRuntimeValidator(payload) },
      };
    case FormActionType.RESET_FORM:
      return defaultFormState;
    case FormActionType.SUBMIT_FORM: {
      const { overallState, ...rest } = state;
      const invalidStateIndex = Object.values(rest).findIndex(
        (s: FormStateAttributeBase) => !s.isValid
      );
      if (invalidStateIndex !== -1) {
        // found at least one invalid property
        return {
          ...values,
          overallState: { isValid: false },
        };
      }

      console.log(`Submitting new movie: ${JSON.stringify(state)}`);
      return defaultFormState;
    }
    default:
      return { ...values };
  }
};

const MovieForm = (): JSX.Element => {
  const { dict, constants } = useContext(LanguageContext);

  const [showGenreState, setShowGenreState] = useState<boolean>(false);
  const [
    { title, url /* genre */, overview, date, rating, runtime, overallState },
    dispatchForm,
  ] = useReducer(formReducer, defaultFormState);

  const genreToggleHandler = (): void => {
    setShowGenreState((prev) => !prev);
  };

  return (
    <form>
      <div className={styles.form}>
        <MovieFormInput
          title={dict.FORM_TITLE}
          id="title"
          type="text"
          value={title.value}
          dispatch={dispatchForm}
          placeholder="Title"
          action={FormActionType.UPDATE_TITLE}
          showValidation={!overallState.isValid && !title.isValid}
          validationMessage={dict.FORM_TITLE_VALIDATION}
        />
        <MovieFormInput
          title={constants.SORTOPTIONS.RELEASE_DATE}
          id="releaseDate"
          type="date"
          value={date.value}
          dispatch={dispatchForm}
          placeholder=""
          action={FormActionType.UPDATE_DATE}
          showValidation={!overallState.isValid && !date.isValid}
          validationMessage={dict.FORM_DATE_VALIDATION}
        />
        <MovieFormInput
          title={dict.FORM_URL}
          id="url"
          type="text"
          value={url.value}
          dispatch={dispatchForm}
          placeholder="https://"
          action={FormActionType.UPDATE_URL}
          showValidation={!overallState.isValid && !url.isValid}
          validationMessage={dict.FORM_URL_VALIDATION}
        />
        <MovieFormInput
          title={constants.SORTOPTIONS.RATING}
          id="rating"
          type="text"
          value={rating.value}
          dispatch={dispatchForm}
          placeholder="7.8"
          action={FormActionType.UPDATE_RATING}
          showValidation={!overallState.isValid && !rating.isValid}
          validationMessage={dict.FORM_RATING_VALIDATION}
        />
        <label htmlFor="genre">
          {dict.GENRE}
          <input
            type="button"
            onClick={genreToggleHandler}
            id="genre"
            name="genre"
            placeholder="Select Genre"
            value="Select Genre"
          />
        </label>
        {showGenreState}
        <MovieFormInput
          title={constants.SORTOPTIONS.RUNTIME}
          id="runtime"
          type="text"
          value={runtime.value}
          dispatch={dispatchForm}
          placeholder={dict.FORM_RUNTIME_PLACEHOLDER}
          action={FormActionType.UPDATE_RUNTIME}
          showValidation={!overallState.isValid && !runtime.isValid}
          validationMessage={dict.FORM_RUNTIME_VALIDATION}
        />
        <MovieFormInput
          title={dict.FORM_OVERVIEW}
          id="overview"
          type="textarea"
          value={overview.value}
          dispatch={dispatchForm}
          placeholder={dict.FORM_OVERVIEW_PLACEHOLDER}
          action={FormActionType.UPDATE_OVERVIEW}
          showValidation={!overallState.isValid && !overview.isValid}
          validationMessage={dict.FORM_OVERVIEW_VALIDATION}
        />
      </div>
      <div className={styles.control}>
        <Button
          className={styles.reset}
          text="Reset"
          onClick={() => {
            dispatchForm({
              type: FormActionType.RESET_FORM,
              payload: "",
            });
          }}
        />
        <Button
          text="Submit"
          onClick={() => {
            dispatchForm({
              type: FormActionType.SUBMIT_FORM,
              payload: "",
            });
          }}
        />
      </div>
    </form>
  );
};

export default MovieForm;
