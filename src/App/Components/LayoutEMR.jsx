import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Route, Router, useNavigate, useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import Meseros from "./Meseros";
import styled from "styled-components";
import clsx from "clsx";
const { Header, Sider, Content } = Layout;
const LayoutEMR = ({ LeftMenu, routers, type }) => {
  const navigate = useNavigate();
  const [isItem, setIsItem] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  if (isItem === "10") {
    navigate("/");
  }
  const CustomSider = styled(Sider)`
    overflow: auto;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    .ant-layout-sider-trigger {
      top: 104px;
      bottom: unset;
    }
  `;

  return (
    // <Router>
    <Layout>
      <Sider
        width="14rem"
        className={clsx("bg-white modify-sider")}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        trigger={null}
      >
        <div className="bg-slate-300 w-[100%] h-[100px]" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={({ keyPath }) => {
            console.log(...keyPath);
            setIsItem(...keyPath);
          }}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Thông tin cá nhân",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Quản lý thuốc",
              children: [
                { label: "Danh sách đơn thuốc", key: "4" },
                { label: "Đơn thuốc đã lấy", key: "5" },
              ],
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Hố sơ bệnh án",
            },
            {
              key: "10",
              icon: <LogoutOutlined />,
              label: "Đăng xuất",
              danger: true,
            },
          ]}
        />
        {/* <LeftMenu /> */}
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background bg-slate-200 "
          style={{
            padding: 0,
            backgroundColor: "white",
            color: "#1f2d3d",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger p-5 text-lg",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {/* <Route exact path="/" component={Dashboard} />
            <Route path="/meseros" component={Meseros} /> */}
          {isItem === "1" && (
            <>
              <div className="text-center text-xl ">Thông tin bệnh nhân</div>
            </>
          )}
          {isItem === "4" && (
            <>
              <div className="text-center text-xl">Danh sách thuốc</div>
            </>
          )}
          {isItem === "5" && (
            <>
              <div className="text-center text-xl">Đơn thuốc đã lấy</div>
            </>
          )}
          {isItem === "3" && (
            <>
              <div className="text-center text-xl">Thông tin hồ sơ bệnh án</div>
            </>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutEMR;
