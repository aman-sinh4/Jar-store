import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/auth-context";

function RequiresAuth({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequiresAuth;
