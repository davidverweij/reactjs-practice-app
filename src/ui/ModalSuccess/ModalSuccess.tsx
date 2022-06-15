import React from "react";
import ICONS from "../../core/constants/ICONS";
import Icon from "../Icon/Icon";

import Modal from "../Modal/Modal";

import styles from "./ModalSuccess.module.scss";

interface ModalSuccessProps {
  title: string;
  body: string;
  onDismiss: () => void;
}

const ModalSuccess = ({
  title,
  body,
  onDismiss,
}: ModalSuccessProps): JSX.Element => {
  return (
    <Modal className={styles.modal} onDismiss={onDismiss}>
      <span className={styles["icon-wrapper"]}>
        <Icon className={styles.icon} icon={ICONS.CHECK} />
      </span>
      <h1>{title}</h1>
      <p>{body}</p>
    </Modal>
  );
};

export default ModalSuccess;
