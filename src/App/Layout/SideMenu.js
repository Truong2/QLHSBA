import React, { useState } from "react";
import EMR from ".././Images/EMR.png";

import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Link, Navigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="bg-slate-800 w-[100%]  text-white">
        <div
          className="px-4 py-2 flex items-center  "
          style={{
            borderBottom: "1px solid #ffff",
          }}
        >
          <img
            src={EMR}
            alt=""
            style={{
              width: !collapsed ? "20%" : "80%",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={() => Navigate("/")}
          />
          {!collapsed && <div className="text-xl">EMR-TN</div>}
        </div>
        <div className="flex items-center  px-4 py-2">
          <img
            src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4="
            alt=""
            style={{
              width: !collapsed ? "18%" : "80%",
              borderRadius: "100%",
              cursor: "pointer",
              marginRight: "10px",
            }}
          />
          {!collapsed && <div className="text-base">Nguyễn Văn Trường</div>}
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        forceSubMenuRender={true}
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/administration">
          <HomeOutlined />
          <span>Quản lý hành chính</span>
          <Link to="administration"></Link>
        </Menu.Item>

        <Menu.Item key="/users">
          <TeamOutlined />
          <span>Users</span>
          <Link to="/users"></Link>
        </Menu.Item>

        <Menu.Item key="/counter">
          <DashboardOutlined />
          <span>Counter</span>
          <Link to="/counter"></Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default App;
{
  /* <Sider trigger={null} collapsible collapsed={collapsed} width={250}>
  <div className="bg-slate-800 w-[100%]  text-white">
    <div
      className="px-4 py-2 flex items-center  "
      style={{
        borderBottom: "1px solid #ffff",
      }}
    >
      <img
        src={EMR}
        alt=""
        style={{
          width: !collapsed ? "20%" : "80%",
          cursor: "pointer",
          marginRight: "10px",
        }}
        onClick={() => navigate("/")}
      />
      {!collapsed && <div className="text-xl">EMR-TN</div>}
    </div>
    <div className="flex items-center  px-4 py-2">
      <img
        src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4="
        alt=""
        style={{
          width: !collapsed ? "18%" : "80%",
          borderRadius: "100%",
          cursor: "pointer",
          marginRight: "10px",
        }}
      />
      {!collapsed && <div className="text-base">Nguyễn Văn Trường</div>}
    </div>
  </div>
  <Menu
    theme="dark"
    mode="inline"
    forceSubMenuRender={true}
    onClick={({ keyPath }) => {
      console.log(...keyPath);
      setIsItem(...keyPath);
    }}
    defaultSelectedKeys={["1"]}
    items={[
      {
        key: "1",
        icon: <ReconciliationOutlined />,
        label: "Quản lý hành chính",
      },
      {
        key: "2",
        icon: <ForkOutlined />,
        label: "Khám bệnh và điều trị",
      },
      {
        key: "13",
        icon: <ForkOutlined />,
        label: "Hồ sơ bệnh án",
      },
      {
        key: "5",
        icon: <ApiOutlined />,
        label: "Quản lý đơn thuốc",
        children: [
          { label: "Danh sách đơn thuốc", key: "3" },
          { label: "Đơn thuốc đã lấy", key: "4" },
        ],
      },
      {
        key: "",
        icon: <UserOutlined />,
        label: "Quản lý tài khoản",
        children: [
          { label: "Danh sách tài khoản", key: "/account" },
          { label: "Danh sách nhóm quyền", key: "/permission" },
        ],
      },
      {
        key: "9",
        icon: <ExceptionOutlined />,
        label: "Quản lý lịch hẹn",
        children: [
          { label: "LỊch khám bệnh của bác sỹ", key: "10" },
          { label: "Cuộc hẹn mới", key: "11" },
        ],
      },
      {
        key: "12",
        icon: <LogoutOutlined />,
        label: "Đăng xuất",
        danger: true,
      },
    ]}
  />
</Sider>; */
}
