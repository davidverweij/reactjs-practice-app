import React, { Dispatch, ReactNode, useReducer } from "react";

export enum EditorContextActionType {
  "OPEN_EDITOR",
  "CLOSE_EDITOR",
}

interface MovieEditorPayload {
  modalTitle: string;
  movieDetails: {
    id: string;
    title: string;
    date: string;
    url: string;
    rating: string;
    genres: string[];
    runtime: string;
    overview: string;
  };
}

interface ContextAction {
  type: EditorContextActionType;
  payload?: MovieEditorPayload;
}

interface EditorState {
  showEditor: boolean;
  details: MovieEditorPayload | null;
  dispatchEditor: Dispatch<ContextAction>;
}

interface EditorContextProviderProps {
  children?: ReactNode;
}

const defaultEditorContext: EditorState = {
  showEditor: false,
  details: null,
  dispatchEditor: () => {},
};

const defaultDetails: MovieEditorPayload = {
  modalTitle: "",
  movieDetails: {
    id: "",
    title: "",
    date: "",
    url: "",
    rating: "",
    genres: [],
    runtime: "",
    overview: "",
  },
};

const EditorContext = React.createContext<EditorState | null>(null);

const movieReducer = (
  state: EditorState,
  action: ContextAction
): EditorState => {
  const { type, payload } = action;
  switch (type) {
    case EditorContextActionType.OPEN_EDITOR:
      return {
        ...state,
        showEditor: true,
        details: {
          modalTitle: payload.modalTitle ?? defaultDetails.modalTitle,
          movieDetails: payload.movieDetails ?? defaultDetails.movieDetails,
        },
      };
    case EditorContextActionType.CLOSE_EDITOR:
      return {
        ...state,
        showEditor: false,
        details: null,
      };
    default:
      return state;
  }
};

export const EditorContextProvider = ({
  children,
}: EditorContextProviderProps): JSX.Element => {
  const [editorState, dispatchEditor] = useReducer(
    movieReducer,
    defaultEditorContext
  );

  const { showEditor, details } = editorState;

  return (
    <EditorContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        showEditor,
        details,
        dispatchEditor,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContext;
