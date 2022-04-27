import React from "react";

interface ErrorBoundaryProps {
  children?: any;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  private ErrorMessage =
    "Something went wrong. Please bear with us as we fix the issue.";

  public render() {
    if (this.state.hasError) {
      return this.ErrorMessage;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
