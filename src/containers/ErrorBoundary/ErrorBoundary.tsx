import React, { Component, ReactNode, ErrorInfo, useContext } from "react";
import LanguageContext from "../../core/contexts/i18y";

import styles from "./ErrorBoundary.module.scss";

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

const ErrorComponent = (): JSX.Element => {
  const { dict } = useContext(LanguageContext);

  return <div className={styles["error-container"]}>{dict.ERROR_MSG}</div>;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  render(): ReactNode {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorComponent />;
    }

    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
