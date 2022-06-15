import React, { Dispatch } from "react";

export enum FormActionType {
  "UPDATE_TITLE",
  "UPDATE_URL",
  "UPDATE_GENRE",
  "UPDATE_OVERVIEW",
  "UPDATE_DATE",
  "UPDATE_RATING",
  "UPDATE_RUNTIME",
  "RESET_FORM",
  "SHOW_HINTS",
}

export interface FormAction {
  type: FormActionType;
  payload: string;
}

export interface MultiselectFormAction extends FormAction {
  checked: boolean;
}

interface MovieFormBaseProps {
  title: string;
  placeholder: string;
  id: string;
  value: string;
  dispatch: Dispatch<FormAction>;
  action: FormActionType;
  showValidation: boolean;
  validationMessage: string;
}

interface MovieFormInputProps extends MovieFormBaseProps {
  type: string;
}

const MovieFormInput = ({
  title,
  placeholder,
  type,
  id,
  value,
  dispatch,
  action,
  showValidation,
  validationMessage,
}: MovieFormInputProps): JSX.Element => {
  return (
    <label htmlFor={id}>
      {title}
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: action,
            payload: event.target.value,
          });
        }}
      />
      {showValidation && <span>{validationMessage}</span>}
    </label>
  );
};

export const MovieFormTextArea = ({
  title,
  placeholder,
  id,
  value,
  dispatch,
  action,
  showValidation,
  validationMessage,
}: MovieFormBaseProps): JSX.Element => {
  return (
    <label htmlFor={id}>
      {title}
      <textarea
        placeholder={placeholder}
        id={id}
        name={id}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          dispatch({
            type: action,
            payload: event.target.value,
          });
        }}
      />
      {showValidation && <span>{validationMessage}</span>}
    </label>
  );
};

export default MovieFormInput;
