import React from "react";
import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useState } from "react";
import { Content } from "./Content";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

const LayoutWithRoute = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu collapsed={collapsed} />
      <Layout lassName="site-layout">
        <Header
          className="site-layout-background bg-slate-200 "
          style={{
            padding: 0,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#1f2d3d",
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger p-5 text-lg",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div class="flex justify-between items-center gap-4 mr-4">
            <div className="flex items-center gap-4">
              <i class="fa-solid fa-gear" style={{ fontSize: "18px" }}></i>
              <BellOutlined style={{ fontSize: "18px" }} />
              <QuestionCircleOutlined style={{ fontSize: "18px" }} />
            </div>
            <div class="flex items-center cursor-pointer ant-dropdown-trigger">
              <span class="va-bg-blue ant-avatar ant-avatar-sm ant-avatar-circle">
                <span
                  className="ant-avatar-string"
                  style={{ transform: "scale(1) translateX(-50%)" }}
                ></span>
              </span>
            </div>
          </div>
        </Header>
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;
