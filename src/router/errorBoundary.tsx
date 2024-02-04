import * as React from "react";
import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div className="tw-h-full">Dang!</div>;
}
export default ErrorBoundary;
