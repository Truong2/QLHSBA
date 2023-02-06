import { Collapse, Descriptions, Spin, Tabs } from "antd";
import React, { useState } from "react";
import { AvatarDashboard } from "../../../App/Images";
import { Sticky, StickyContainer } from "react-sticky";
import MedicalHistory from "./Components/MedicalHistory";
import UrlBreadcrumb from "../../common/utils/UrlBreadcrumb";
import ClinicalExamination from "./Components/ClinicalExamination";
import TestResults from "./Components/TestResults";
import CDHA from "./Components/CDHA";
import Diagnose from "./Components/Diagnose";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { PATIENT_LIST } from "../../../App/api/urlApi";
import axios from "../../../App/api/axios";
import moment from "moment";
import PatientInformation from "../components/PatientInformation";
const { Panel } = Collapse;

const DashboardAnalysis = () => {
  const { id } = useParams();
  const [dataPatient, setDataPatient] = useState({});
  const onChange = (key) => {
    console.log(key);
  };

  const { isFetching } = useQuery(
    ["getPatientDetails"],
    async () => {
      const response = await axios.get(`${PATIENT_LIST}/${id}`);

      console.log(response);
      setDataPatient(response?.data);
    },
    {
      initialData: [],
      onError: (e) => {},
    }
  );
  const getAge = () => {
    const yearOfBirth = moment(dataPatient?.birth).format("YYYY");
    const year = moment().year();
    return Number(year) - Number(yearOfBirth);
  };
  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
      {({ style }) => (
        <DefaultTabBar
          {...props}
          className="site-custom-tab-bar"
          style={{
            ...style,
          }}
        />
      )}
    </Sticky>
  );
  const items = [
    {
      id: 0,
      label: "Bệnh sử, tiền sử",
      key: 0,
      children: <MedicalHistory />,
    },
    {
      id: 1,
      label: "Khám lâm sàng, tổng quát",
      key: 1,
      children: <ClinicalExamination />,
    },
    {
      id: 2,
      label: "Kết quả xét nghiệm",
      key: 2,
      children: <TestResults />,
    },
    {
      id: 3,
      label: "CDHA",
      key: 3,
      children: <CDHA />,
    },
    {
      id: 4,
      label: "Chẩn đoán",
      key: 4,
      children: <Diagnose />,
    },
  ];

  return (
    <>
      <UrlBreadcrumb type={"analysis"} style={{ margin: "20px" }} />
      <Spin spinning={isFetching}>
        <div className="p-2">
          {/* <div className="">
            <Collapse
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              onChange={onChange}
            >
              <Panel
                header="Thông tin bệnh nhân"
                key="1"
                style={{ boxShadow: "0px 5px 16px 0px rgb(0 0 0 / 20%)" }}
              >
                <div className="w-full h-full">
                  {" "}
                  <div className="bg-white rounded h-full w-full ">
                    <div className="flex gap-4">
                      <div className="w-[10%]">
                        <img
                          className="object-fill rounded-md"
                          src={dataPatient?.avatar}
                          alt=""
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center">
                          <p className="font-extrabold my-auto text-lg">
                            {dataPatient?.name}
                          </p>
                          <div
                            className="ant-divider ant-divider-vertical my-auto"
                            role="separator"
                          ></div>
                          <p className="my-auto">{dataPatient?.sex}</p>
                          <div
                            className="ant-divider ant-divider-vertical my-auto"
                            role="separator"
                          ></div>
                          <p className="my-auto">
                            {moment(dataPatient?.birth).format("DD/MM/YYYY")}
                          </p>
                          <div
                            className="ant-divider ant-divider-vertical my-auto"
                            role="separator"
                          ></div>
                          <p className="my-auto">{getAge()} tuổi</p>
                          <div
                            className="ant-divider ant-divider-vertical my-auto"
                            role="separator"
                          ></div>
                          <p className="my-auto">{dataPatient?.ethnic}</p>
                          <div
                            className="ant-divider ant-divider-vertical my-auto"
                            role="separator"
                          ></div>
                          <p className="my-auto">
                            {dataPatient?.village} - {dataPatient?.district} -{" "}
                            {dataPatient?.province}
                          </p>
                        </div>
                        <div className="flex">
                          <div className="gap-1 flex">
                            <p className="my-auto">Sổ bệnh án:</p>
                            <p className="text-[red] my-auto">028863/22/NOI</p>
                          </div>
                          <div
                            className="ant-divider ant-divider-vertical my-auto"
                            role="separator"
                          ></div>
                          <p className="my-auto">
                            CCCD: {dataPatient?.citizenId}
                          </p>
                          <div
                            className="ant-divider ant-divider-vertical my-auto"
                            role="separator"
                          ></div>
                          <p className="my-auto">
                            Mã số sức khỏe: {dataPatient?.healthCode}
                          </p>
                          <div
                            className="ant-divider ant-divider-vertical my-auto"
                            role="separator"
                          ></div>
                          <p className="my-auto">
                            {" "}
                            Bảo hiểm y tế: {dataPatient?.healthInsurance}
                          </p>
                        </div>
                        <div className="my-auto">
                          <div className="flex gap-2">
                            <div className="">Chẩn đoán:</div>
                            <div className="font-bold">
                              {dataPatient?.diagnose}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div> */}
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
                        {dataPatient?.description}
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
          <div className="mt-4 px-2">
            <StickyContainer>
              <Tabs
                defaultActiveKey="1"
                renderTabBar={renderTabBar}
                items={items}
              />
            </StickyContainer>
          </div>
        </div>
      </Spin>
    </>
  );
};

export default DashboardAnalysis;
