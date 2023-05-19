import { Navigate } from "react-router-dom";
import React from "react";

function ProtectedRoute({ element }: { element: JSX.Element }) {
  const isauth = !!localStorage.getItem("authToken");
  if (isauth) {
    return element;
  } else {
    return <Navigate to="/signin" />;
  }
}

export default ProtectedRoute;
