import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

//  Tạp list các breadcrumbs để render theo url trang web
const BREADCRUMBS = {
  patient: [
    {
      name: "Trang chủ",
      url: "",
    },
    {
      name: "Danh sách bệnh nhân",
      url: "",
    },
  ],
  patientCreate: [
    {
      name: "Trang chủ",
      url: "",
    },
    {
      name: "Danh sách bệnh nhân",
      url: "/EMR/patient",
    },
    {
      name: "Thêm mới bệnh nhân",
      url: "",
    },
  ],
  patientEdit: [
    {
      name: "Trang chủ",
      url: "",
    },
    {
      name: "Danh sách bệnh nhân",
      url: "/EMR/patient",
    },
    {
      name: "Chỉnh sửa thông tin bệnh nhân",
      url: "",
    },
  ],
  patientDetail: [
    {
      name: "Trang chủ",
      url: "",
    },
    {
      name: "Danh sách bệnh nhân",
      url: "/EMR/patient",
    },
    {
      name: "Thông tin bệnh nhân",
      url: "",
    },
  ],
  analysis: [
    {
      name: "Trang chủ",
      url: "",
    },
    {
      name: "Danh sách bệnh nhân",
      url: "/EMR/patient",
    },
    {
      name: "Tổng quan",
      url: "",
    },
  ],
  MedicalExaminationHistory: [
    {
      name: "Trang chủ",
      url: "",
    },
    {
      name: "Danh sách bệnh nhân",
      url: "/EMR/patient",
    },
    {
      name: "Lịch sử khám chữa bệnh",
      url: "",
    },
  ],
  account: [
    {
      name: "Trang chủ",
      url: "",
    },
    {
      name: "Danh sách tài khoản",
      url: "",
    },
  ],
  permission: [
    {
      name: "Trang chủ",
      url: "",
    },
    {
      name: "Danh sách nhóm quyền",
      url: "",
    },
  ],
  appointment: [
    {
      name: "Trang chủ",
      url: "",
    },
    {
      name: "Lịch khám bệnh bác sỹ",
      url: "",
    },
  ],
};

export default function UrlBreadcrumb({ breadcrumbs, type, style }) {
  // Lấy item theo mặc định hoặc truyền từ các component khác vào
  const items = breadcrumbs || BREADCRUMBS[type] || [];
  //  Hàm lấy tên breadcrumbs
  function getNameMenu(item) {
    const [key, field] = item.name?.split("/");

    return key;
  }
  // render ra name kèm link
  function render(item) {
    if (item.url) {
      return (
        <Link to={item.url}>
          {!item.isName ? getNameMenu(item) : item.name}
        </Link>
      );
    }
    return !item.isName ? getNameMenu(item) : item.name;
  }

  return (
    <Breadcrumb style={style}>
      {items !== null
        ? items.map((e, index) => (
            <Breadcrumb.Item
              key={`${index + 1}`}
              onClick={items?.func ? items.func : null}
            >
              {render(e)}
            </Breadcrumb.Item>
          ))
        : ""}
    </Breadcrumb>
  );
}
