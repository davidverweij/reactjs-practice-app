import React from "react";
import I18Y from "../../core/i18y";

import styles from "./ContextMenuDropdown.module.scss";

interface ContextMenuDropdownProps {
  onExit: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ContextMenuDropdown = ({
  onExit,
  onEdit,
  onDelete,
}: ContextMenuDropdownProps): JSX.Element => {
  return (
    <div className={styles.dropdown}>
      <span
        role="button"
        tabIndex={0}
        onClick={onExit}
        onKeyDown={onExit}
        className={styles.exit}
        aria-label={I18Y().EXIT_BUTTON}
      />
      <button type="button" onClick={onEdit}>
        {I18Y().EDIT_BUTTON}
      </button>
      <button type="button" onClick={onDelete}>
        {I18Y().DELETE_BUTTON}
      </button>
    </div>
  );
};

export default ContextMenuDropdown;
