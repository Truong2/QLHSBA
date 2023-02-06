import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./App/hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const account = JSON.parse(localStorage.getItem("AccountLogin"));
  const redirect =
    auth?.roles?.find((role) => allowedRoles?.includes(role)) ||
    account?.roles?.find((role) => allowedRoles?.includes(role));
  return redirect ? (
    <Outlet />
  ) : account?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/emr/login" state={{ from: location }} replace />
  );
};
export default RequireAuth;
