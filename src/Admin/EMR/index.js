import {
  ApiOutlined,
  ExceptionOutlined,
  ForkOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReconciliationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import EMR from "../../App/Images/EMR.png";
import ListAccount from "./Account/ListAccount";
import Schedule from "./Appointment/Schedule";
import ListPermission from "./permission/permission";
import ListPatient from "./Patient/Patient";
import ExaminationProcess from "./ExaminationProcess";

const { Sider } = Layout;

const AdminEMR = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const handleOnClickPath = (keyPath) => {
    console.log(...keyPath);
    if (keyPath === "logOut") {
      navigate("/");
    } else {
      navigate(...keyPath);
    }
  };

  //   {
  //     title: "Id",
  //     dataIndex: "id",
  //     key: "id",
  //   },
  //   {
  //     title: "Tên",
  //     dataIndex: "name",
  //     key: "name",
  //   },
  //   {
  //     title: "Địa chỉ email",
  //     dataIndex: "email",
  //     key: "email",
  //   },
  //   {
  //     title: "Nhóm quyền",
  //     dataIndex: "permissions",
  //     key: "permissions",
  //   },
  //   {
  //     title: "Hành động",
  //     dataIndex: "",
  //     key: "x",
  //     align: "center",
  //     render: (value, record) => (
  //       <>
  //         <Button
  //           style={{ marginRight: "8px" }}
  //           onClick={() => {
  //             setItemAccount(record);
  //             setEditAccount(true);
  //           }}
  //         >
  //           Chỉnh sửa
  //         </Button>
  //         <Button>Xoá</Button>
  //       </>
  //     ),
  //   },
  // ];
  function Content() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/patient" element={<ListPatient />} />
          <Route path="/hospital-history" element={<ExaminationProcess />} />
          <Route path="/account" element={<ListAccount />} />
          <Route path="/permission" element={<ListPermission />} />
          <Route path="/appointment" element={<Schedule />} />
        </Routes>
      </div>
    );
  }
  return (
    <div className="">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed} width={250}>
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
              handleOnClickPath(keyPath);
            }}
            defaultSelectedKeys={[location.pathname]}
            items={[
              {
                key: "administration",
                icon: <ReconciliationOutlined />,
                label: "Quản lý hành chính",
                children: [
                  { label: "Danh sách bệnh nhân", key: "patient" },
                  { label: "Quá trình khám bệnh", key: "hospital-history" },
                ],
              },
              {
                key: "1",
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
                key: "3111",
                icon: <UserOutlined />,
                label: "Quản lý tài khoản",
                children: [
                  { label: "Danh sách tài khoản", key: "account" },
                  { label: "Danh sách nhóm quyền", key: "permission" },
                ],
              },
              {
                key: "111",
                icon: <ExceptionOutlined />,
                label: "Quản lý lịch hẹn",
                children: [
                  { label: "LỊch khám bệnh của bác sỹ", key: "appointment" },
                  { label: "Cuộc hẹn mới", key: "11" },
                ],
              },
              {
                key: "/",
                icon: <LogoutOutlined />,
                label: "Đăng xuất",
                danger: true,
              },
            ]}
          ></Menu>
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
              margin: "70px 16px 0px",
              padding: 24,
              minHeight: 280,
              background: "white",
            }}
          ></Content>
        </Layout>
      </Layout>
    </div>
    // <LayoutWithRoute>
    //   <Content />
    // </LayoutWithRoute>
  );
};

export default AdminEMR;
