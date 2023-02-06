import {
  Button,
  Card,
  Collapse,
  Descriptions,
  Divider,
  Drawer,
  Form,
  Input,
  Row,
  Table,
  Tabs,
} from "antd";
import React from "react";
import { AvatarDashboard } from "../../../App/Images";
import { Sticky, StickyContainer } from "react-sticky";
import MedicalHistory from "../Dashboard/Components/MedicalHistory";
import UrlBreadcrumb from "../../common/utils/UrlBreadcrumb";
import MyDialog from "../components/common/MyDialog";

import {
  PlusSquareFilled,
  SearchOutlined,
  SettingFilled,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import PatientInformation from "../components/PatientInformation";

const { Panel } = Collapse;

const MedicalExaminationHistory = () => {
  const { id } = useParams();

  const onChange = (key) => {
    console.log(key);
  };
  const columns = [
    {
      title: "Cơ sở khám chữa bệnh",
      dataIndex: "hospitalName",
      key: "hospitalName",
      fixed: true,
      width: 250,
    },
    { title: "Ngày vào viện", dataIndex: "date", key: "date" },
    {
      title: "Ngày ra viện",
      dataIndex: "hospitalizedDate",
      key: "hospitalizedDate",
    },
    {
      title: "Khoa nhập viện",
      dataIndex: "departmentIn",
      key: "departmentIn",
      width: 150,
    },
    {
      title: "Khoa điều trị ",
      dataIndex: "treatmentDepartment",
      key: "treatmentDepartment",
      width: 150,
    },
    { title: "Loại bệnh án ", dataIndex: "type", key: "type" },
    {
      title: "Chẩn đoán",
      dataIndex: "diagnose",
      key: "diagnose",
      width: 300,
    },

    {
      title: "Chi tiết",
      key: "action",
      render: () => (
        <>
          <div className="flex items-center justify-between ">
            <Link>Xem quá trình điều trị</Link>
            <Link>Xem bệnh án</Link>
          </div>
        </>
      ),
      width: 280,
    },
  ];
  const dataRender = [
    {
      key: 1,
      hospitalName: "Bệnh viện Đại học y Hà Nội",
      date: "14/08/2022",
      hospitalizedDate: "14/08/2022",
      departmentIn: "Khoa nội tổng hợp",
      treatmentDepartment: "Khoa nội tổng hợp",
      diagnose: "A01.3-Bệnh phó thương hàn C",
      type: "Nội khoa",
    },
    {
      key: 2,
      hospitalName: "Bệnh viện TW Quân đội 108",
      date: "14/09/2022",
      hospitalizedDate: "17/09/2022",
      departmentIn: "Khoa nội tổng hợp ",
      treatmentDepartment: "Khoa nội tổng hợp",
      diagnose: "A04-Nhiễm trùng đường ruột do vi khuẩn khác",
      type: "Ngoại khoa ",
    },
    {
      key: 3,
      hospitalName: "Bệnh viện Thanh Nhàn",
      date: "01/10/2022",
      hospitalizedDate: "05/10/2022",
      departmentIn: "Khoa nội tổng hợp ",
      treatmentDepartment: "Khoa nội tổng hợp",
      diagnose: "A02.1-Nhiễm trùng huyết do Salmonella",
      type: "Nội khoa",
    },
    {
      key: 4,
      hospitalName: "Bệnh viện phụ sản Thiện An ",
      date: "06/10/2022",
      hospitalizedDate: "07/10/2022",
      departmentIn: "Khoa cấp cứu",
      treatmentDepartment: "Khoa sản ",
      diagnose: "N.72-Viêm cổ tử cung",
      type: "Sản khoa",
    },
  ];
  return (
    <>
      <UrlBreadcrumb
        type={"MedicalExaminationHistory"}
        style={{ margin: "20px" }}
      />
      <h1 className="text-xl  " style={{ padding: "0 20px 20px" }}>
        LỊCH SỬ KHÁM CHỮA BỆNH
      </h1>
      <div className="p-2">
        <PatientInformation id={id} defaultActiveKey={["1"]} key={"1"} />

        <div className="mt-2">
          <Collapse expandIconPosition="end">
            <Panel
              header="Thông tin vào viện"
              key="2"
              style={{ boxShadow: "0px 5px 16px 0px rgb(0 0 0 / 20%)" }}
            >
              <div className="bg-white rounded">
                <div className="p-4">
                  <Descriptions
                    bordered
                    layout="horizontal"
                    className="break-words"
                    column={{
                      xxl: 4,
                      xl: 3,
                      lg: 3,
                      md: 3,
                      sm: 2,
                      xs: 1,
                    }}
                  >
                    <Descriptions.Item label="Lý do vào viện">
                      Đau bụng trên, chướng bụng
                    </Descriptions.Item>
                    <Descriptions.Item label="Nơi giới thiệu">
                      Tự đến
                    </Descriptions.Item>
                    <Descriptions.Item label="Nhập viện lúc">
                      14:00 10/10/2022
                    </Descriptions.Item>
                    <Descriptions.Item label="Trực tiếp vào">
                      {" "}
                      Khoa cấp cứu
                    </Descriptions.Item>
                    <Descriptions.Item label="Ngày nhập khoa">
                      23/8/2022
                    </Descriptions.Item>
                    <Descriptions.Item label="Khoa nhập viện">
                      Khoa nội tổng hợp
                    </Descriptions.Item>
                    <Descriptions.Item label="Vào viện lần này thứ">
                      5
                    </Descriptions.Item>
                    <Descriptions.Item label="Khoa điều trị">
                      Khoa nội tổng hợp
                    </Descriptions.Item>
                    <Descriptions.Item label="Phòng">P001</Descriptions.Item>
                    <Descriptions.Item label="Giường">G001</Descriptions.Item>
                    <Descriptions.Item label="Bác sĩ điều trị">
                      Lương Quỳnh Thư
                    </Descriptions.Item>
                    <Descriptions.Item label="Chẩn đoán nơi chuyển đến">
                      Không có
                    </Descriptions.Item>
                    <Descriptions.Item label="Chẩn đoán KKB, Cấp cứu">
                      A04-Nhiễm trùng đường ruột do vi khuẩn khác
                    </Descriptions.Item>
                    <Descriptions.Item label="Chẩn đoán hiện tại">
                      A02.1-Nhiễm trùng huyết do Salmonella
                    </Descriptions.Item>
                    <Descriptions.Item label="Chẩn đoán ra viện"></Descriptions.Item>
                  </Descriptions>
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
        <div className="mt-6">
          <div className="patient-list-management pa-20 poin">
            <div className="my-table-default">
              <Card
                bordered={false}
                title="Bộ dữ liệu"
                extra={
                  <div className="display-flex js-flex-end">
                    <Input
                      // onKeyPress={onSearch}
                      className="table-search"
                      name="searchValue"
                      type="text"
                      // placeholder={placeholderSearch}
                      prefix={<SearchOutlined />}
                    />
                    <Row
                      // onClick={handlePlusButton}
                      className="ml-20"
                      align="middle"
                    >
                      <PlusSquareFilled
                        className="fz-32 plus-btn"
                        size="large"
                      />
                      <span className="color-white fw-600 ml-5">
                        {/* {titleRedirectAddPage} */}
                      </span>
                    </Row>
                    <Row
                      // onClick={handleSettingButton}
                      className="ml-20"
                      align="middle"
                    >
                      <SettingFilled className="fz-32 plus-btn" size="large" />
                      <span className="color-white fw-600 ml-5">
                        {/* {titleRedirectAddPage} */}
                      </span>
                    </Row>
                  </div>
                }
              >
                <Table
                  scroll={{ x: 1500 }}
                  // rowSelection={rowSelection}
                  columns={columns}
                  dataSource={dataRender?.sort(function (a, b) {
                    return b.id - a.id;
                  })}
                  className="table-custom"
                  rowKey={(record) => record.id || record.userId}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalExaminationHistory;
