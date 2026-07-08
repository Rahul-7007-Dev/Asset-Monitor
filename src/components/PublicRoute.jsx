// src/components/PublicRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../features/auth/authenticationSlice";

const PublicRoute = ({ children }) => {
  const loggedIn = useSelector(isAuthenticated);

  if (loggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
