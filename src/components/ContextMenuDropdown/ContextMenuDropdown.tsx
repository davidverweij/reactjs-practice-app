import React, { useContext } from "react";
import LanguageContext from "../../core/contexts/i18y";

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
  const { dict } = useContext(LanguageContext);

  return (
    <div className={styles.dropdown}>
      <span
        role="button"
        tabIndex={0}
        onClick={onExit}
        onKeyDown={onExit}
        className={styles.exit}
        aria-label={dict.EXIT_BUTTON}
      />
      <button type="button" onClick={onEdit}>
        {dict.EDIT_BUTTON}
      </button>
      <button type="button" onClick={onDelete}>
        {dict.DELETE_BUTTON}
      </button>
    </div>
  );
};

export default ContextMenuDropdown;
