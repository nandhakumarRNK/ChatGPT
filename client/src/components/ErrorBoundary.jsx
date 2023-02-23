import React, { Component } from "react";
import ErrorHomeContainer from "./ErrorHomeContainer";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <ErrorHomeContainer />
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
