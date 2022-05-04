import React from "react";
import { SVGAttributes } from "../../style/icons";

import styles from "./Icon.module.scss";

interface IconProps {
  icon: SVGAttributes;
}

const Icon = ({ icon }: IconProps): JSX.Element => {
  return (
    <svg className={styles.icon} viewBox={icon.viewbox}>
      <path d={icon.path} />
    </svg>
  );
};

export default Icon;
