import User from "./AccountClient/Users";
import BookingCare from "./Pages/Booking";
import BookingCareDetail from "./Pages/Booking/BookingCareDetail";
import HomePage from "./Pages/HomePage";
import LogInClient from "./Pages/LoginPage";

// publicRoutes
const publicRoutes = [
  { path: "", component: HomePage },
  { path: "booking", component: BookingCare },
  { path: "booking/:ID", component: BookingCareDetail },
  { path: "Client-Clinic/login", component: LogInClient },
];
const privateRoutes = [{ path: "/client-Clinic/:ID", component: User }];
export { publicRoutes, privateRoutes };
