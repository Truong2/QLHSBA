import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;

// import { useContext } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { UserContext } from "../.././App.js";

// const useAuth = () => {
//   const { user } = useContext(UserContext);
//   return user && user.loggedIn;
// };

// const ProtectedRoutes = () => {
//   const isAuth = useAuth();

//   return isAuth ? <Outlet /> : <Navigate to="/" />;
// };

// export default ProtectedRoutes;
