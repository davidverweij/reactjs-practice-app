import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} ${styles.button}`}>
      {text}
    </button>
  );
};

export default Button;
