import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin/index";
import AdminCMS from "./Admin/CMS/index";
import AdminEMR from "./Admin/EMR/index";
import LogInClient from "./Client/Pages/LoginPage/index";
import { Suspense, useState } from "react";
import Client from "./Client/index";
import BookingCare from "./Client/Pages/Booking";
import BookingCareDetail from "./Client/Pages/Booking/BookingCareDetail";
import User from "./Client/AccountClient/Users";
import { publicRoutes, privateRoutes } from "./Client/routersCliemt";
import PrivateRoutes from "./App/permissions/PrivateRoute";
import ScrollToTop from "./App/Components/ScrollToTop";
import Error from "./App/page/Error";
import SharedLayout from "./Client/Layout/SharedLayout";
import HomePage from "./Client/Pages/HomePage";
import LogInAdmin from "./Admin/LoginPage";
import RouteApp from "./Admin/index";
import { AdminRoutes } from "./Admin/index";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Routes>
        {/* Test PR */}
        {/* Chia router cho trang khách hàng */}
        {/* {publicRoutes?.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })} */}
        {/* Layout chung cho phần trang khách hàng */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          {/* Chia tạm các router ở phần header khi ấn các mục */}
          <Route path="introduce" element={<>Giới thiệu</>} />
          <Route path="services" element={<>Dịch vụ</>} />
          <Route path="booking" element={<BookingCare />} />
          <Route path="booking/:bookingId" element={<BookingCareDetail />} />
        </Route>
        <Route path="Client-Clinic/login" element={<LogInClient />} />
        <Route element={<PrivateRoutes />}>
          {privateRoutes?.map((route, index) => {
            const Page = route.component;
            return (
              <Route key={index} element={<Page />} path={route.path} exact />
            );
          })}
        </Route>

        <Route path="/Admin-Clinic/login" exact element={<LogInAdmin />} />
        <Route path="/CMS" exact element={<AdminCMS />} />
        <Route path="/EMR*" exact element={<AdminEMR />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
    // <Routes>
    //   <Route path="/" />
    //   <Route path="/client-Clinic" exact element={<Client />} />
    //   <Route path="/Admin-Clinic" exact element={<Admin />} />
    //   <Route path="/admin-Clinic/CMS" exact element={<AdminCMS />} />
    //
    // </Routes>
  );
}

export default App;
// import { createContext, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Client from "./Client/index";
// import User from "./Client/AccountClient/Users";
// import LogInClient from "./Client/Pages/LoginPage/index";
// import BookingCare from "./Client/Pages/Booking";
// import BookingCareDetail from "./Client/Pages/Booking/BookingCareDetail";
// import PrivateRoutes from "./App/permissions/PrivateRoute";

// export const UserContext = createContext();

// function App() {
//   const [user, setUser] = useState({ loggedIn: false });
//   return (
//     <Routes>
//       <Route path="/" exact element={<Client />} />
//       <Route path="/booking" exact element={<BookingCare />} />
//       <Route path="/booking/1" exact element={<BookingCareDetail />} />
//       <Route path="/client-Clinic/login" exact element={<LogInClient />} />
//       <Route element={<PrivateRoutes />}>
//         <Route element={<User />} path="/client-Clinic/Truong" exact />
//         {/* <Route element={<Products/>} path="/products"/> */}
//       </Route>
//     </Routes>
//   );
// }

// export default App;
