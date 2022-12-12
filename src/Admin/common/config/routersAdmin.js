import React from "react";
import ListAccount from "../../EMR/Account/ListAccount";
import Schedule from "../../EMR/Appointment/Schedule";
import Home from "../../EMR/Home";
import ExaminationProcess from "../../EMR/Patient/ModalPatient";
import ListPatient from "../../EMR/Patient/Patient";
import ListPermission from "../../EMR/permission/permission";
import PATH_URL from "./pathURLAdmin";

const routesAdmin = [
  {
    id: 1,
    path: PATH_URL.HOME,
    element: <Home />,
    isNoLayout: false,
  },
  {
    id: 2,
    path: PATH_URL.PATIENT_LIST,
    element: <ListPatient />,
    isNoLayout: false,
  },
  {
    id: 3,
    path: PATH_URL.HOSPITAL_HISTORY,
    element: <ExaminationProcess />,
    isNoLayout: false,
  },
  {
    id: 4,
    path: PATH_URL.ACCOUNT,
    element: <ListAccount />,
    isNoLayout: false,
  },
  {
    id: 5,
    path: PATH_URL.PERMISSION,
    element: <ListPermission />,
    isNoLayout: false,
  },
  {
    id: 6,
    path: PATH_URL.APPOINTMENT,
    element: <Schedule />,
    isNoLayout: false,
  },
];

export default routesAdmin;
