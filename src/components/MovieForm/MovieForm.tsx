import React, { useContext, useState, useReducer } from "react";
import LanguageContext from "../../core/contexts/i18y";
import {
  urlValidator,
  movieScoreValidator,
  movieRuntimeValidator,
} from "../../core/utils/validators";
import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";
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

interface StateProps {
  id: string;
  title: string;
  url: string;
  genres: string[];
  overview: string;
  date: string;
  rating: string;
  runtime: string;
}

interface FormProps extends StateProps {
  formTitle: string;
  closeFormHandler: () => void;
}

interface FormState {
  idState: string;
  titleState: FormStateAttribute;
  urlState: FormStateAttribute;
  genreState: { value: string[]; isValid: boolean };
  overviewState: FormStateAttribute;
  dateState: FormStateAttribute;
  ratingState: FormStateAttribute;
  runtimeState: FormStateAttribute;

  showHintsState: boolean;
}

const defaultFormAttribute = (
  value: string,
  validator: Function
): FormStateAttribute => {
  return {
    value,
    isValid: validator(value),
  };
};

const formValidators: Record<string, (v: string | string[]) => boolean> = {
  title: (v: string) => v.trim().length > 0,
  url: (v: string) => urlValidator(v),
  genre: (v: string[]) => v.length > 0,
  overview: (v: string) => v.trim().length > 0,
  date: (v: string) => v.length > 0,
  rating: (v: string) => movieScoreValidator(v),
  runtime: (v: string) => movieRuntimeValidator(v),
};

const createFormState = ({
  id,
  title,
  url,
  genres,
  overview,
  date,
  rating,
  runtime,
}: StateProps): FormState => {
  return {
    idState: id,
    titleState: defaultFormAttribute(title, formValidators.title),
    urlState: defaultFormAttribute(url, formValidators.url),
    genreState: {
      value: genres,
      isValid: formValidators.genre(genres),
    },
    overviewState: defaultFormAttribute(overview, formValidators.overview),
    dateState: defaultFormAttribute(date, formValidators.date),
    ratingState: defaultFormAttribute(rating, formValidators.rating),
    runtimeState: defaultFormAttribute(runtime, formValidators.runtime),
    showHintsState: false,
  };
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  const { type, payload } = action;
  const values = { ...state };
  switch (type) {
    case FormActionType.UPDATE_TITLE:
      return {
        ...values,
        titleState: { value: payload, isValid: formValidators.title(payload) },
      };
    case FormActionType.UPDATE_URL:
      return {
        ...values,
        urlState: { value: payload, isValid: formValidators.url(payload) },
      };
    case FormActionType.UPDATE_GENRE:
      return {
        ...values,
        genreState: {
          value: [payload],
          isValid: formValidators.genre(payload),
        },
      };
    case FormActionType.UPDATE_OVERVIEW:
      return {
        ...values,
        overviewState: {
          value: payload,
          isValid: formValidators.overview(payload),
        },
      };
    case FormActionType.UPDATE_DATE:
      return {
        ...values,
        dateState: { value: payload, isValid: formValidators.date(payload) },
      };
    case FormActionType.UPDATE_RATING:
      return {
        ...values,
        ratingState: {
          value: payload,
          isValid: formValidators.rating(payload),
        },
      };
    case FormActionType.UPDATE_RUNTIME:
      return {
        ...values,
        runtimeState: {
          value: payload,
          isValid: formValidators.runtime(payload),
        },
      };
    case FormActionType.SHOW_HINTS:
      return {
        ...values,
        showHintsState: true,
      };
    case FormActionType.RESET_FORM:
      return createFormState({
        id: values.idState,
        title: "",
        url: "",
        genres: [],
        rating: "",
        runtime: "",
        date: "",
        overview: "",
      });
    default:
      return { ...values };
  }
};

const MovieForm = ({
  id,
  title,
  url,
  genres,
  overview,
  date,
  rating,
  runtime,
  closeFormHandler,
  formTitle,
}: FormProps): JSX.Element => {
  const { dict, constants } = useContext(LanguageContext);

  const initialFormState = createFormState({
    id,
    title,
    url,
    genres,
    overview,
    date,
    rating,
    runtime,
  });

  const [showGenreState, setShowGenreState] = useState<boolean>(false);
  const [
    {
      titleState,
      urlState,
      genreState,
      overviewState,
      dateState,
      ratingState,
      runtimeState,
      showHintsState,
    },
    dispatchForm,
  ] = useReducer(formReducer, initialFormState);

  const genreToggleHandler = (): void => {
    setShowGenreState((prev) => !prev);
  };

  const handleOnSubmit = (): void => {
    const states = [
      titleState,
      urlState,
      genreState,
      overviewState,
      dateState,
      ratingState,
      runtimeState,
    ];
    const invalidStateIndex = states.findIndex(
      (s: FormStateAttributeBase) => !s.isValid
    );

    if (invalidStateIndex !== -1) {
      // found at least one invalid property
      return dispatchForm({
        type: FormActionType.SHOW_HINTS,
        payload: null,
      });
    }
    return closeFormHandler();
  };

  return (
    <Modal header={formTitle} onDismiss={closeFormHandler}>
      <form>
        <div className={styles.form}>
          <MovieFormInput
            title={dict.FORM_TITLE}
            id="title"
            type="text"
            value={titleState.value}
            dispatch={dispatchForm}
            placeholder="Title"
            action={FormActionType.UPDATE_TITLE}
            showValidation={showHintsState && !titleState.isValid}
            validationMessage={dict.FORM_TITLE_VALIDATION}
          />
          <MovieFormInput
            title={constants.SORTOPTIONS.RELEASE_DATE}
            id="releaseDate"
            type="date"
            value={dateState.value}
            dispatch={dispatchForm}
            placeholder=""
            action={FormActionType.UPDATE_DATE}
            showValidation={showHintsState && !dateState.isValid}
            validationMessage={dict.FORM_DATE_VALIDATION}
          />
          <MovieFormInput
            title={dict.FORM_URL}
            id="url"
            type="text"
            value={urlState.value}
            dispatch={dispatchForm}
            placeholder="https://"
            action={FormActionType.UPDATE_URL}
            showValidation={showHintsState && !urlState.isValid}
            validationMessage={dict.FORM_URL_VALIDATION}
          />
          <MovieFormInput
            title={constants.SORTOPTIONS.RATING}
            id="rating"
            type="text"
            value={ratingState.value}
            dispatch={dispatchForm}
            placeholder="7.8"
            action={FormActionType.UPDATE_RATING}
            showValidation={showHintsState && !ratingState.isValid}
            validationMessage={dict.FORM_RATING_VALIDATION}
          />
          <label htmlFor="genre">
            {dict.GENRE + genreState}
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
            value={runtimeState.value}
            dispatch={dispatchForm}
            placeholder={dict.FORM_RUNTIME_PLACEHOLDER}
            action={FormActionType.UPDATE_RUNTIME}
            showValidation={showHintsState && !runtimeState.isValid}
            validationMessage={dict.FORM_RUNTIME_VALIDATION}
          />
          <MovieFormInput
            title={dict.FORM_OVERVIEW}
            id="overview"
            type="textarea"
            value={overviewState.value}
            dispatch={dispatchForm}
            placeholder={dict.FORM_OVERVIEW_PLACEHOLDER}
            action={FormActionType.UPDATE_OVERVIEW}
            showValidation={showHintsState && !overviewState.isValid}
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
          <Button text="Submit" onClick={handleOnSubmit} />
        </div>
      </form>
    </Modal>
  );
};

export default MovieForm;
