import { Button, Modal, Select, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopUpSelect from "./popUpSelect";
import SearchCommon from "../../App/hooks/SearchCommon";

const Appointment = () => {
  const [isBooking, setIsBooking] = useState(false);
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const columns = [
    {
      // title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (value, record) => (
        <div className="w-8 h-8 rounded-t-full">
          <img src={value} alt="" />
        </div>
      ),
    },
    {
      // title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <Link to="booking">{text}</Link>,
      width: "30%",
    },
    {
      // title: "Age",
      dataIndex: "age",
      key: "age",
      width: "5%",
    },
    {
      // title: "Address",
      dataIndex: "address",
      key: "address",
      width: "35%",
    },
    {
      // title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
      width: "25%",
    },
  ];
  const data = [
    {
      avatar: "https://nhakhoanucuoiviet.vn/uploads/static/CTT.jpg",
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      avatar: "https://nhakhoanucuoiviet.vn/uploads/static/CTT.jpg",
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      avatar: "https://nhakhoanucuoiviet.vn/uploads/static/CTT.jpg",
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  function listDoctor() {
    return [
      ...data.map((e) => ({
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
          <Select
            allowClear
            showArrow
            showSearch
            // suffixIcon={<SearchIcon />}
            className="w-full flex-1"
            placeholder="Bác sỹ: Tất cả"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={listDoctor()}
            autoFocus
          />
        </div>
        <Table columns={columns} dataSource={data} />
      </Modal>
    </div>
  );
};

export default Appointment;
