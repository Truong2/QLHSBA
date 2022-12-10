import React from "react";
import { Outlet } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const index = () => {
  return (
    <>
      <div className="">
        <HomePage />
      </div>
      <Outlet />
    </>
  );
};

export default index;
