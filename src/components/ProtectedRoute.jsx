import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../features/auth/authenticationSlice";

const ProtectedRoute = ({ children }) => {
  const loggedIn = useSelector(isAuthenticated);

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

/*
Without replace— history looks like this: /add-entry → /login    (back button goes to /add-entry again)
With replace— history looks like this: /login    (back button goes wherever they were before /add-entry)
*/
