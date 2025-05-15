import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();
  console.error('ErrorBoundary caught:', error); // Debug: Log the error

  return (
    <div className="text-center m-4 bg-red-600 text-white p-4 text-2xl">
      <h2>Something went wrong!</h2>
      <p>{error?.message || 'An unexpected error occurred.'}</p>
    </div>
  );
}

export default ErrorBoundary;