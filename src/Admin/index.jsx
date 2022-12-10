import { Routes, Route } from "react-router-dom";
import Error from "../App/page/Error";
import SharedLayout from "../Client/Layout/SharedLayout";
import BookingCare from "../Client/Pages/Booking";
import HomePage from "../Client/Pages/HomePage";
import AdminEMR from "./EMR";
import LogInAdmin from "./LoginPage";

export function AdminRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<AdminEMR />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

// import React from "react";

// import { Route } from "react-router-dom";

// import Layout from "../App/Layout";

// const App = ({ element: Component, rest }) => {
//   return (
//     <Route
//       {...rest}
//       element={(routeProps) => (
//         <Layout>
//           <Component {...routeProps} />
//         </Layout>
//       )}
//     />
//   );
// };

// export default App;

// import React from "react";

// import { LayoutDX } from "app/components/Atoms";
// import routers from "./routers";
// import { LeftMenu, Header } from "./layout";

// function SMEPortal() {
//   return (
//     <LayoutDX
//       type="ADMIN"
//       Header={Header}
//       LeftMenu={LeftMenu}
//       routers={routers}
//     />
//   );
// }

// export default SMEPortal;
