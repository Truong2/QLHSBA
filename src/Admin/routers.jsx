import React from "react";
import AdminCMS from "./CMS/index";
import AdminEMR from "./EMR/index";
// const RedirectToHomePage = () => <Redirect to={"/homePage"} />;

const routerAdmin = ({ roles, permissions }) => [
  {
    path: "CMS",
    exact: true,
    Component: AdminCMS,
  },
  {
    path: "EMR",
    exact: true,
    Component: AdminEMR,
  },
];

export default routerAdmin;
