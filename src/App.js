import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminCMS from "./Admin/CMS/index";
import AdminEMR from "./Admin/EMR";
import "./App.css";
import ScrollToTop from "./App/Components/ScrollToTop";
import Error from "./App/page/Error";
import PrivateRoutes from "./App/permissions/PrivateRoute";
import SharedLayout from "./Client/Layout/SharedLayout";
import BookingCare from "./Client/Pages/Booking";
import BookingCareDetail from "./Client/Pages/Booking/BookingCareDetail";
import HomePage from "./Client/Pages/HomePage";
import LogInClient from "./Client/Pages/LoginPage/index";
import { privateRoutes } from "./Client/routersCliemt";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Routes>
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

        <Route path="/CMS" exact element={<AdminCMS />} />
        {/* Router cho phần quản lý EMR */}
        <Route path="/EMR*" exact element={<AdminEMR />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default App;
