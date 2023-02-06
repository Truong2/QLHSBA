import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import routesAdmin from "../../Admin/common/config/routersAdmin";

export function Content() {
  const generateRoutes = () => {
    let result = null;
    result = routesAdmin.map((route) => {
      return <Route key={route.id} path={route.path} element={route.element} />;
    });
    return result;
  };
  return (
    <div>
      <Layout.Content
        className="site-layout-background"
        style={{
          margin: "0px 10px",
          minHeight: 280,
          // background: "white",
        }}
      >
        <div>
          <Routes>{generateRoutes()}</Routes>
        </div>
      </Layout.Content>
    </div>
  );
}
