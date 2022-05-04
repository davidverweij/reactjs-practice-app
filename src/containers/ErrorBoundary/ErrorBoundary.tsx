import React, { Component, ReactNode, ErrorInfo } from "react";

import styles from "./ErrorBoundary.module.scss";

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

const ErrorComponent = (): JSX.Element => {
  return (
    <div className={styles["error-container"]}>
      Something went wrong. Please bear with us as we fix the issue.
    </div>
  );
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
