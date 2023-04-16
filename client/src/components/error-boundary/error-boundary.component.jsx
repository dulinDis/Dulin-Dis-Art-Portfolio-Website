import React from "react";
import { GiBrokenHeart } from "react-icons/gi";
import DataContext from "../../context/DataContext";
class ErrorBoundary extends React.Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    const { logError } = this.context;
    logError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <p>Sorry this page is broken. Please try again later.</p>
          <GiBrokenHeart />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
