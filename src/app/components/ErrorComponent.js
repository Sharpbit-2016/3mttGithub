import React from 'react';

const ErrorComponent = () => {
  // Simulate an error by throwing an error
  throw new Error('This is a simulated error for testing.');

  // This part will not be executed because an error has been thrown above
  return <div>This component will not render because an error occurred.</div>;
};

export default ErrorComponent;
