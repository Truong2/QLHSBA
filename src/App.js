import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Client from "./Client/index";
import Admin from "./Admin/index";
import AdminCMS from "./Admin/CMS/index";
import AdminEMR from "./Admin/EMR/index";
import LogInClient from "./Client/Pages/LoginPage/index";
import { Suspense } from "react";
import BookingCare from "./Client/Pages/Booking";

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" exact element={<Client />} />
        <Route path="/client-Clinic/login" exact element={<LogInClient />} />
        <Route path="/client-Clinic/viewMedicine" exact />
        <Route path="/client-Clinic/medicalRecord" exact />
        <Route path="/Admin-Clinic/login" exact element={<Admin />} />
        <Route path="/Admin-Clinic/CMS" exact element={<AdminCMS />} />
        <Route path="/Admin-Clinic/EMR" exact element={<AdminEMR />} />
        <Route path="/booking" exact element={<BookingCare />} />
      </Routes>
    </Suspense>
    // <Routes>
    //   <Route path="/" />
    //   <Route path="/client-Clinic" exact element={<Client />} />
    //   <Route path="/Admin-Clinic" exact element={<Admin />} />
    //   <Route path="/admin-Clinic/CMS" exact element={<AdminCMS />} />
    //   <Route path="/admin-Clinic/EMR" exact element={<AdminEMR />} />
    // </Routes>
  );
}

export default App;
