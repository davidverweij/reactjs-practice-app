import React, { useContext } from "react";
import EditorContext, {
  EditorContextActionType,
} from "../../core/contexts/movieEditor";
import Modal from "../../ui/Modal/Modal";
import MovieForm from "../MovieForm/MovieForm";

const MovieEditor = (): JSX.Element => {
  const { showEditor, details, dispatchEditor } = useContext(EditorContext);

  const closeEditorHandler = (): void => {
    dispatchEditor({
      type: EditorContextActionType.CLOSE_EDITOR,
    });
  };

  return (
    showEditor && (
      <Modal header={details.modalTitle} onDismiss={closeEditorHandler}>
        <MovieForm closeFormHandler={closeEditorHandler} />
      </Modal>
    )
  );
};

export default MovieEditor;
