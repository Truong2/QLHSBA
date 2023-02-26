import { Collapse, Descriptions, Divider, Tooltip } from "antd";
import moment from "moment";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import axios from "../../../../App/api/axios";
import { PATIENT_LIST } from "../../../../App/api/urlApi";

const { Panel } = Collapse;
const { Item } = Descriptions;

const DescriptionsCustom = styled(Descriptions)`
  .ant-descriptions-item-container {
    /* overflow: hidden;
    white-space: nowrap;
    display: inline-flex;
    text-overflow: ellipsis; */
    width: 280px;
  }
`;
const PatientDetail = ({ defaultActiveKey, patientDetail, key }) => {
  const getAge = () => {
    const yearOfBirth = moment(patientDetail?.birth).format("YYYY");
    const year = moment().year();
    return Number(year) - Number(yearOfBirth);
  };
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="">
      <Collapse
        defaultActiveKey={1}
        expandIconPosition="end"
        onChange={onChange}
      >
        <Panel
          header="Thông tin bệnh nhân"
          key={1}
          style={{ boxShadow: "0px 5px 16px 0px rgb(0 0 0 / 20%)" }}
        >
          <div className="w-full h-full">
            {" "}
            <div className="bg-white rounded h-full w-full ">
              <div className="flex gap-4">
                <div className="grid gap-2">
                  <div className=" w-full flex justify-center">
                    <img
                      className="object-cover rounded-md  "
                      src={patientDetail?.avatar}
                      style={{
                        borderRadius: "100%",
                        width: "150px",
                        height: "150px",
                      }}
                      alt=""
                    />
                  </div>
                  <Descriptions column={4} title="">
                    {/* Bệnh án */}
                    <Item label="Mã bệnh nhân">
                      {patientDetail?.patientCode}
                    </Item>
                    <Item label="Mã bệnh án">
                      {patientDetail?.patientNoteCode}
                    </Item>
                    <Item label="Loại bệnh án">
                      {patientDetail?.patientNoteCode}
                    </Item>
                    <Item label="CCCD">{patientDetail?.citizenId}</Item>
                    {/* Thông tin */}
                    <Item label="Họ và tên">{patientDetail?.name}</Item>
                    <Item label="Giới tính">{patientDetail?.sex}</Item>
                    <Item label="Ngày sinh">
                      {moment(patientDetail?.birth).format("DD/MM/YYYY")}
                    </Item>
                    <Item label="Số điện thoại">{patientDetail.phone}</Item>
                    <Item label={<span className="w-[40px]">Email</span>}>
                      <Tooltip placement="topLeft" title={patientDetail.email}>
                        <span className="w-[230px] truncate">
                          {patientDetail.email}
                        </span>
                      </Tooltip>
                    </Item>
                    <Item label="Nghề nghiệp">{patientDetail?.occupation}</Item>
                    <Item label="Quốc tịch">{patientDetail?.nationality}</Item>
                    <Item label={<span className="w-[50px]">Địa chỉ</span>}>
                      <Tooltip
                        placement="topLeft"
                        title={`${patientDetail?.village} - ${patientDetail?.commune} - ${patientDetail?.district} - ${patientDetail?.province}`}
                      >
                        <span className="w-[230px] truncate">
                          {patientDetail?.village} - {patientDetail?.commune} -{" "}
                          {patientDetail?.district} - {patientDetail?.province}
                        </span>
                      </Tooltip>
                    </Item>
                    <Item label="Tôn giáo"> {patientDetail?.religion}</Item>
                    <Item label="Tình trạng hôn nhân">
                      {patientDetail.martialStatus}
                    </Item>
                    <Item label="Loại đối tượng">
                      {" "}
                      {patientDetail?.typeObject === "Không"
                        ? "Tự đến"
                        : "Có thẻ Bảo hiểm y tế"}
                    </Item>

                    <Item label="BHYT">
                      {" "}
                      {patientDetail?.typeObject === "Không"
                        ? "Không"
                        : patientDetail?.healthInsurance}{" "}
                    </Item>
                    <Item label="Giá trị thẻ tới ngày">
                      {moment(patientDetail.expiryBHYT).format("DD/MM/YYYY")}
                    </Item>
                    <Item label="Trạng thái bệnh nhân">
                      {patientDetail?.status === 1 ? "Mới" : "Ra viện"}
                      {patientDetail?.status === 2 ? "Ngoại trú" : "Ra viện"}
                      {patientDetail?.status === 3 ? "Nội trú" : "Ra viện"}
                    </Item>
                    <Item label="Khoa">{patientDetail?.department}</Item>
                    <Item label="Phòng">{patientDetail?.room}</Item>
                    <Item label="Giường">{patientDetail.bed}</Item>

                    <Item label="Thời gian vào viện">
                      {moment(patientDetail.dayIn).format("HH:MM DD/MM/YYYY")}
                    </Item>
                    <Item label="Bác sỹ điều trị">{patientDetail.doctor}</Item>
                    <Item label="Chẩn đoán">{patientDetail.diagnose}</Item>
                  </Descriptions>
                </div>
              </div>
            </div>
          </div>
        </Panel>
        <Panel
          header="Thông tin người thân bệnh nhân"
          key={2}
          style={{
            marginTop: "10px",
            boxShadow: "0px 5px 16px 0px rgb(0 0 0 / 20%)",
          }}
        >
          <div className="w-full h-full">
            {" "}
            <div className="bg-white rounded h-full w-full ">
              <div className="flex gap-4">
                <Descriptions column={3} title="">
                  {/* Thông tin người nhà bệnh nhân*/}
                  <Item label="Họ tên người thân">
                    {patientDetail?.relativeName}
                  </Item>
                  <Item label="Số điện thoại người thân">
                    {patientDetail?.phoneRelative}
                  </Item>
                  <Item label="Địa chỉ người thân">
                    {patientDetail?.addressRelative}
                  </Item>
                </Descriptions>
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default PatientDetail;
