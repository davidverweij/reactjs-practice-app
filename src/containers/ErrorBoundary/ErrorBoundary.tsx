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
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render(): ReactNode {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorComponent />;
    }

    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
