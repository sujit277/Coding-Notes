import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // This lifecycle method is called whenever an error is thrown in the child components
  static getDerivedStateFromError(error) {
    // Update state to indicate that an error has occurred
    return { hasError: true };
  }

  // This lifecycle method is called when an error occurs, but it allows the component to log the error
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error);
    console.error('Error info:', errorInfo);
    // You can also log the error to a logging service
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return (
        <div>
          <h1>Something went wrong...</h1>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }

    // Render children as normal if there's no error
    return this.props.children;
  }
}

export default ErrorBoundary;
