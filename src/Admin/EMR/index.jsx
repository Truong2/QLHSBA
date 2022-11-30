import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
  ReconciliationOutlined,
  ForkOutlined,
  ApiOutlined,
  ExceptionOutlined,
} from "@ant-design/icons";
import { Button, Form, Layout, Menu, Table } from "antd";
import { Route, Router, useNavigate, useParams } from "react-router-dom";
import routers from "./../routers";
import LeftMenu from "./layout/LeftMenu";
import LayoutEMR from "../../App/Components/LayoutEMR";
import { Header } from "antd/lib/layout/layout";
import MedicalSchedule from "./components/MedicalSchedule";
import EMR from "../../App/Images/EMR.png";
import Avatar from "../../App/Images/doctor_2.jpg";
import Modal from "antd/lib/modal/Modal";
import ModalCreateAccount from "./components/ModalCreateAccount";
import ModalEditAccount from "./components/ModalEditAccount";
import SearchCommon from "../../App/hooks/SearchCommon";

const { Sider, Content } = Layout;

const dataSource = [
  {
    key: "1",
    id: "1",
    name: "Mike",
    email: "truong8dt@gmail.com",
    permissions: "Admin, Doctor, Nurse, Receptionist",
  },
  {
    key: "2",
    id: "2",
    name: "Truong",
    email: "truong8dt234@gmail.com",
    permissions: "Admin, Doctor, Nurse, Receptionist",
  },
  {
    key: "3",
    id: "3",
    name: "Yan",
    email: "truong8dt234@gmail.com",
    permissions: " Doctor, Nurse, Receptionist",
  },
  {
    key: "4",
    id: "4",
    name: "Yunky",
    email: "Yunky8dt234@gmail.com",
    permissions: "Nurse, Receptionist",
  },
  {
    key: "5",
    id: "5",
    name: "Miker",
    email: "Mikert234@gmail.com",
    permissions: "Admin, Doctor",
  },
];
const AdminEMR = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isItem, setIsItem] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [editAccount, setEditAccount] = useState(false);
  const [itemAccount, setItemAccount] = useState();
  const [dataTable, setDataTable] = useState(dataSource);
  const [dataItem, setDataItem] = useState();
  if (isItem === "12") {
    navigate("/");
  }
  console.log(dataTable);
  console.log("dataItem", dataItem);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Địa chỉ email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Nhóm quyền",
      dataIndex: "permissions",
      key: "permissions",
    },
    {
      title: "Hành động",
      dataIndex: "",
      key: "x",
      align: "center",
      render: (value, record) => (
        <>
          <Button
            style={{ marginRight: "8px" }}
            onClick={() => {
              setItemAccount(record);
              setEditAccount(true);
            }}
          >
            Chỉnh sửa
          </Button>
          <Button>Xoá</Button>
        </>
      ),
    },
  ];
  return (
    // <Router>
    <div className="w-[100%] h-[100vh] flex flex-row">
      <Layout>
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
                key: "6",
                icon: <UserOutlined />,
                label: "Quản lý tài khoản",
                children: [
                  { label: "Danh sách tài khoản", key: "7" },
                  { label: "Danh sách nhóm quyền", key: "8" },
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
            {isItem === "7" && (
              <div className="py-[15px] px-2">
                <div className="container-fluid">
                  <div className="flex items-center justify-start mx-4">
                    <div className="mr-4 pt-2">
                      <h1 className="uppercase text-xl">Danh Sách Tài Khoản</h1>
                    </div>
                    <div className="flex items-center justify-center">
                      <Button
                        size="large"
                        type="primary"
                        onClick={() => setCreateAccount(true)}
                      >
                        <i className="fas fa-plus"></i> Thêm Tài Khoản Mới
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isItem === "10" && (
              <div className="py-[15px] px-2">
                <div className="container-fluid">
                  <div className="flex items-center justify-start mx-4">
                    <div className="mr-4 pt-2">
                      <h1 className="uppercase text-xl">
                        Quản lý kế hoạch khám bệnh của bác sỹ
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
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
          >
            {/* <Route exact path="/" component={Dashboard} />
            <Route path="/meseros" component={Meseros} /> */}
            {isItem === "1" && (
              <>
                <div className="text-center text-xl ">Thông tin bệnh nhân</div>
              </>
            )}
            {isItem === "3" && (
              <>
                <div className="text-center text-xl">Danh sách thuốc</div>
              </>
            )}
            {isItem === "4" && (
              <>
                <div className="text-center text-xl">Đơn thuốc đã lấy</div>
              </>
            )}
            {isItem === "13" && (
              <>
                <div className="text-center text-xl">
                  Thông tin hồ sơ bệnh án
                </div>
              </>
            )}
            {isItem === "10" && (
              <>
                <div className="text-center text-xl">
                  Lịch khám bệnh của bác sỹ
                </div>
                <MedicalSchedule />
              </>
            )}
            {isItem === "7" && (
              <>
                <div className="">
                  <div className="flex items-center justify-between">
                    <h1>Danh sách tài khoản </h1>
                    <SearchCommon
                      placeholder="Tài khoản"
                      // onSearch={(value) => onChangeOneParam('address')(value)}
                      className="w-1/5"
                      style={{ width: "20%" }}
                      autoFocus
                      // defaultValue={query.get('address') || ''}
                    />
                  </div>
                  <Table
                    bordered={true}
                    dataSource={dataTable}
                    columns={columns}
                  />
                  {createAccount && (
                    <ModalCreateAccount
                      createAccount={createAccount}
                      setCreateAccount={setCreateAccount}
                      form={form}
                      dataTable={dataTable}
                      setDataTable={setDataTable}
                    />
                  )}
                  {editAccount && (
                    <ModalEditAccount
                      editAccount={editAccount}
                      setEditAccount={setEditAccount}
                      itemAccount={itemAccount}
                      form={form}
                      dataTable={dataTable}
                      setDataTable={setDataTable}
                      setDataItem={setDataItem}
                      dataItem={dataItem}
                    />
                  )}
                </div>
              </>
            )}
          </Content>
        </Layout>
      </Layout>
    </div>
    // <LayoutEMR type="ADMIN" LeftMenu={LeftMenu} routers={routers} />
  );
};
export default AdminEMR;
