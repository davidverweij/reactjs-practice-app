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
  "SUBMIT_FORM",
}

export interface FormAction {
  type: FormActionType;
  payload: string;
}

interface MovieFormInputProps {
  title: string;
  placeholder: string;
  type: string;
  id: string;
  value: string;
  dispatch: Dispatch<FormAction>;
  action: FormActionType;
  showValidation: boolean;
  validationMessage: string;
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
  const input =
    type === "textarea" ? (
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
    ) : (
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
    );

  return (
    <label htmlFor="title">
      {title}
      {input}
      {showValidation && <span>{validationMessage}</span>}
    </label>
  );
};

export default MovieFormInput;
