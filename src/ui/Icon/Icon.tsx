import React from "react";
import { SVGAttributes } from "../../core/constants/ICONS";

import styles from "./Icon.module.scss";

interface IconProps {
  icon: SVGAttributes;
  className?: string;
}

const Icon = ({ icon, className }: IconProps): JSX.Element => {
  return (
    <svg className={`${styles.icon} ${className}`} viewBox={icon.viewbox}>
      <path d={icon.path} />
    </svg>
  );
};

export default Icon;
