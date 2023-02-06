import React from "react";
import ListAccount from "../../EMR/Account/ListAccount";
import Schedule from "../../EMR/Appointment/Schedule";
import Home from "../../EMR/Home";
import ExaminationProcess from "../../EMR/ExaminationProcess";
import ListPatient from "../../EMR/Patient/Patient";
import ListPermission from "../../EMR/permission/permission";
import PATH_URL from "./pathURLAdmin";
import DashboardAnalysis from "../../EMR/Dashboard";
import AddPatient from "../../EMR/Patient/AddPatient";
import MedicalExaminationHistory from "../../EMR/MedicalExaminationHistory";

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
  {
    id: 7,
    path: PATH_URL.Analysis,
    element: <DashboardAnalysis />,
    isNoLayout: false,
  },
  {
    id: 8,
    path: PATH_URL.PATIENT_CREATE,
    element: <AddPatient />,
    isNoLayout: false,
  },
  {
    id: 9,
    path: PATH_URL.PATIENT_EDIT,
    element: <AddPatient edit />,
    isNoLayout: false,
  },
  {
    id: 10,
    path: PATH_URL.Medical_Examination_history,
    element: <MedicalExaminationHistory />,
    isNoLayout: false,
  },
];

export default routesAdmin;
