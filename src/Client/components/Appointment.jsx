import { Button, Modal, Select, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import SearchCommon from "../../App/hooks/SearchCommon";
import { DoctorsSlider } from "../Models/data";

const Appointment = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [dataTable, setDataTable] = useState(DoctorsSlider);
  const navigate = useNavigate();
  const onChange = (value) => {
    if (value !== undefined) {
      let data = DoctorsSlider?.filter((doctor) => doctor?.name === value);
      setDataTable(data);
    } else {
      setDataTable(DoctorsSlider);
    }
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const columns = [
    {
      dataIndex: "avatar",
      key: "avatar",
      render: (value, record) => (
        <div className="w-8 h-8 rounded-t-full">
          <img src={value} alt="" />
        </div>
      ),
      width: "10%",
    },
    {
      dataIndex: "name",
      key: "name",
      render: (text, record) => <Link to="booking/1">{text}</Link>,
      width: "30%",
    },
    {
      dataIndex: "age",
      key: "age",
      width: "10%",
    },
    {
      dataIndex: "address",
      key: "address",
    },
  ];

  function listDoctor() {
    return [
      ...DoctorsSlider.map((e) => ({
        label: e.name,
        value: e.name,
      })),
    ];
  }

  return (
    <div>
      <div className="w-[100%] max-w-[1210px] mx-auto my-0 px-3 pb-15">
        <div className="flex flex-row justify-between pt-[60px]">
          <div className="flex w-[50%] flex-row items-end justify-center">
            <img src="https://nhakhoanucuoiviet.vn/uploads/static/anh-co-dinh/img_appointment.jpg" />
          </div>
          <div className="w-[50%] flex flex-col items-center justify-center">
            <div className=" flex flex-col items-center justify-between">
              <div className="pt-8 mb-8">
                <img
                  src="https://nhakhoanucuoiviet.vn/logo.png"
                  className="w-[80%]"
                />
              </div>
              <div
                className="h-[60px] w-[150px] px-4 text-center flex items-center justify-center rounded-2xl shadow-md bg-gradient-to-l from-sky-500 to-indigo-500 hover:bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer"
                onClick={() => setIsBooking(true)}
              >
                <Link
                  to=""
                  //   type="primary"

                  style={{ color: "white", fontSize: "20px" }}
                >
                  Đặt lịch hẹn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        visible={isBooking}
        onCancel={() => setIsBooking(false)}
        centered
        footer={null}
        closable={false}
        maskClosable
        width="50rem"
        bodyStyle={{
          padding: "2rem 1.9rem",
          maxHeight: "calc(100vh - 3rem)",
          overflow: "auto",
        }}
      >
        <div className="mb-6">
          <div className="font-bold text-base justify-center flex mb-4 uppercase">
            Danh sách bác sỹ
          </div>
          <Button
            size="large"
            onClick={() => navigate("/booking")}
            style={{
              float: "right",
              marginBottom: "20px",
              background: "rgb(56,170,158)",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Xem tất cả
          </Button>
          <Select
            allowClear
            showArrow
            showSearch
            // suffixIcon={<SearchIcon />}
            className="w-full flex-1"
            placeholder="Bác sỹ: Tất cả"
            onChange={onChange}
            onSearch={onSearch}
            onClear={() => setDataTable(DoctorsSlider)}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={listDoctor()}
            autoFocus
          />
        </div>
        <Table columns={columns} dataSource={dataTable} />
      </Modal>
    </div>
  );
};

export default Appointment;
