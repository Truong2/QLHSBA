import {
  LogoutOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React from "react";
import SiderMenu from "../../../Client/Layout/SiderMenu";

const rootPath = "client-Clinic";
const menus = ({ permissions }, { dynamicExportTab, dynamicDashboardTab }) => [
  {
    to: "/administration",
    title: "Quản lý hành chính",
    Icon: UserOutlined,
    subMenus: [
      {
        to: "/administration/patient",
        title: "Dánh sách bệnh nhân",
        Icon: VideoCameraOutlined,
      },
    ],
  },
  {
    to: "/hospital-history",
    title: "Quá trình khám bệnh",
    Icon: UserOutlined,
  },
];
const LeftMenu = ({ dynamicMenu, isCollapsed, user }) => {
  return (
    <SiderMenu
      menus={menus(user, dynamicMenu)}
      isCollapsed={isCollapsed}
      rootPath={rootPath}
      type="ADMIN"
    />
  );
};

export default React.memo(LeftMenu);
