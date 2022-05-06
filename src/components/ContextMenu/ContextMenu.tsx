import React, { useState } from "react";
import ContextMenuButton from "../ContextMenuButton/ContextMenuButton";
import ContextMenuDropdown from "../ContextMenuDropdown/ContextMenuDropdown";

interface ContextMenuProps {
  onEdit: () => void;
  onDelete: () => void;
}

const ContextMenu = ({ onEdit, onDelete }: ContextMenuProps): JSX.Element => {
  const [dropdownState, setDropdownState] = useState<boolean>(false);

  return (
    <>
      <ContextMenuButton
        onClick={() => {
          setDropdownState(true);
        }}
      />
      {dropdownState && (
        <ContextMenuDropdown
          onExit={() => {
            setDropdownState(false);
          }}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default ContextMenu;
