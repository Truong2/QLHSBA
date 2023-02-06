import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LayoutWithRoute from "../../App/Layout";
import Error from "../../App/page/Error";
import RequireAuth from "../../RequireAuth";
import routesAdmin from "../common/config/routersAdmin";
import LogInAdmin from "../LoginPage";
import Layout from "./layout/Layout";
import "../styles/index.scss";

const ROLES = {
  User: 2001,
  Admin: [1, 2, 3, 4, 5],
};
export default function AdminEMR() {
  const generateRoutes = () => {
    let result = null;
    result = routesAdmin.map((route) => {
      return <Route key={route.id} path={route.path} element={route.element} />;
    });
    return result;
  };
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="login" element={<LogInAdmin />} />
          {/* we want to protect these routes */}
          <Route element={<RequireAuth allowedRoles={ROLES.Admin} />}>
            <Route path="/" element={<LayoutWithRoute />}>
              {generateRoutes()}
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
