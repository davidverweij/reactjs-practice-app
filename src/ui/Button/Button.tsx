import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ text, onClick, className }: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${styles.button}`}
    >
      {text}
    </button>
  );
};

export default Button;
