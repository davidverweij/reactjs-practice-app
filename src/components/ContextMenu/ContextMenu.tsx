import React, { useState } from "react";
import ContextMenuButton from "../ContextMenuButton/ContextMenuButton";
import ContextMenuDropdown from "../ContextMenuDropdown/ContextMenuDropdown";

interface ContextMenuProps {
  onEdit: () => void;
  onDelete: () => void;
}

const ContextMenu = ({ onEdit, onDelete }: ContextMenuProps): JSX.Element => {
  const [dropdownState, setDropdownState] = useState<boolean>(false);

  const exitHandler = (): void => {
    setDropdownState(false);
  };

  const onShowDropdownHandler = (): void => {
    setDropdownState(true);
  };

  return (
    <>
      <ContextMenuButton onClick={onShowDropdownHandler} />
      {dropdownState && (
        <ContextMenuDropdown
          onExit={exitHandler}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default ContextMenu;
