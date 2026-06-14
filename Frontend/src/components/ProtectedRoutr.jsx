import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <Loading></Loading>;

  return isAuthenticated
    ? children
    : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;