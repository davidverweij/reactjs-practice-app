import React from "react";

import styles from "./Title.module.scss";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps): JSX.Element => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default Title;
