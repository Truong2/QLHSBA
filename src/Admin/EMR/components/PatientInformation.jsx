import { Collapse } from "antd";
import moment from "moment";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "../../../App/api/axios";
import { PATIENT_LIST } from "../../../App/api/urlApi";

const { Panel } = Collapse;
const PatientInformation = ({ id, defaultActiveKey, key }) => {
  const [dataPatient, setDataPatient] = useState({});
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
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="">
      <Collapse
        defaultActiveKey={defaultActiveKey}
        expandIconPosition="end"
        onChange={onChange}
      >
        <Panel
          header="Thông tin bệnh nhân"
          key={key}
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
                    <p className="my-auto">CCCD: {dataPatient?.citizenId}</p>
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
                      <div className="font-bold">{dataPatient?.diagnose}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default PatientInformation;
