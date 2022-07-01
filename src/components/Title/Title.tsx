import React from "react";

import styles from "./Title.module.scss";

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps): JSX.Element => {
  return (
    <h1 className={`${className} ${styles.title}`}>{text.toUpperCase()}</h1>
  );
};

export default Title;
