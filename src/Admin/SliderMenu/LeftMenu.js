import {
  ApiOutlined,
  ExceptionOutlined,
  ForkOutlined,
  LogoutOutlined,
  ReconciliationOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const menus = [
  {
    type: "group",
    to: "administration",
    title: "Quản lý hành chính",
    Icon: ReconciliationOutlined,
    subMenus: [
      {
        to: "administration/patient",
        title: "Danh sách bệnh nhân",
      },
      {
        to: "administration/hospital-history",
        title: "Quá trình khám bệnh",
      },
    ],
  },
  {
    type: "group",
    to: "account",
    title: "Quản lý tài khoản",
    Icon: UserOutlined,
    subMenus: [
      {
        to: "account",
        title: "Danh sách tài khoản",
      },
      {
        to: "account/permission",
        title: "Danh sách nhóm quyền",
      },
    ],
  },
  {
    type: "No-group",
    to: "medical-record",
    title: "Hồ sơ bệnh án",
    Icon: UserOutlined,
  },
];
export const ItemMenu = [
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
    key: "account",
    icon: <UserOutlined />,
    label: "Quản lý tài khoản",
    children: [
      { label: "Danh sách tài khoản", key: "account" },
      { label: "Danh sách nhóm quyền", key: "permission" },
    ],
  },
  {
    key: "appointment",
    icon: <ExceptionOutlined />,
    label: "Quản lý lịch hẹn",
    children: [
      { label: "LỊch khám bệnh của bác sỹ", key: "appointment/doctor" },
      { label: "Cuộc hẹn mới", key: "11" },
    ],
  },
  {
    key: "logOut",
    icon: <LogoutOutlined />,
    label: "Đăng xuất",
    danger: true,
  },
];
