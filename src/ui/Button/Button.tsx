import React from "react";
import { SVGAttributes } from "../../style/icons";
import Icon from "../Icon/Icon";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  icon?: SVGAttributes;
  onClick: () => void;
  className?: string;
}

const Button = ({
  text,
  icon,
  onClick,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${styles.button}`}
    >
      {icon && <Icon icon={icon} />}
      {text}
    </button>
  );
};

export default Button;
