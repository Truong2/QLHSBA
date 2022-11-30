import { Affix, Breadcrumb, Button, Dropdown, Menu } from "antd";
import {
  SisternodeOutlined,
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import clsx from "clsx";

const Header = ({ isBooking = true }) => {
  const [current, setCurrent] = useState("mail");
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY >= 200) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  let navigate = useNavigate();

  const items = [
    {
      label: "Trang chủ",
      key: "home",
    },
    {
      label: "Giới thiệu",
      key: "introduce",
      disabled: false,
      children: [
        {
          type: "group",
          label: "",
          children: [
            {
              label: "Đội ngũ bác sỹ",
              key: "introduce:1",
            },
            {
              label: "Cơ sở vật chất",
              key: "introduce:2",
            },
            {
              label: "LaBo",
              key: "introduce:3",
            },
            {
              label: "Vô trùng",
              key: "introduce:4",
            },
            {
              label: "Bộ sưu tập",
              key: "introduce:5",
            },
          ],
        },
      ],
    },
    {
      label: "Dịch vụ",
      key: "Service",
      children: [
        {
          label: "Đội ngũ bác sỹ",
          key: "Service:1",
        },
        {
          label: "Cơ sở vật chất",
          key: "Service:2",
        },
        {
          label: "Vô trùng",
          key: "Service:4",
        },
        {
          label: "Bộ sưu tập",
          key: "Service:5",
        },
      ],
    },
    {
      label: "Gói sản phẩm",
      key: "product",
      disabled: false,
      children: [
        {
          label: "Đội ngũ bác sỹ",
          key: "product:1",
        },
        {
          label: "Cơ sở vật chất",
          key: "product:2",
        },
        {
          label: "Vô trùng",
          key: "product:4",
        },
        {
          label: "Bộ sưu tập",
          key: "product:5",
        },
      ],
    },
    {
      label: "Bảng giá",
      key: "price",
      disabled: false,
      children: [
        {
          label: "Đội ngũ bác sỹ",
          key: "price:1",
        },
        {
          label: "Cơ sở vật chất",
          key: "price:2",
        },
        {
          label: "Vô trùng",
          key: "price:4",
        },
        {
          label: "Bộ sưu tập",
          key: "price:5",
        },
      ],
    },
    {
      label: "Khách hàng",
      key: "client",
      disabled: false,
      children: [
        {
          label: "Đội ngũ bác sỹ",
          key: "client:1",
        },
        {
          label: "Cơ sở vật chất",
          key: "client:2",
        },
        {
          label: "Vô trùng",
          key: "client:4",
        },
        {
          label: "Bộ sưu tập",
          key: "client:5",
        },
      ],
    },
    {
      label: "Liên hệ",
      key: "contact",
      disabled: false,
      children: [
        {
          label: "Đội ngũ bác sỹ",
          key: "contact:1",
        },
        {
          label: "Cơ sở vật chất",
          key: "contact:2",
        },
        {
          label: "Vô trùng",
          key: "contact:4",
        },
        {
          label: "Bộ sưu tập",
          key: "contact:5",
        },
        {
          label: "Bộ sưu tập",
          key: "contact:6",
        },
      ],
    },
  ];
  return (
    <>
      <header className=" w-[100%] p-[30px]">
        <div className="flex items-center w-full  h-[100%] px-3">
          <div className="w-[50%]">
            <div className="logo">
              <img
                src="https://nhakhoanucuoiviet.vn/logo.png"
                className="w-[50%]"
              />
            </div>
          </div>
          <div className="flex items-center w-[50%] justify-end">
            <Button
              type="primary"
              icon={<SisternodeOutlined style={{ fontSize: "20px" }} />}
              size="large"
              style={{
                fontSize: "16px",
                height: "50px",
                borderRadius: "10px",
              }}
              onClick={() => {
                console.log("check");
                navigate("/client-Clinic/login");
              }}
            >
              Bệnh án điện tử
            </Button>
            <div className="online"></div>
            <div className="flex items-center ml-10">
              <Button
                type="primary"
                shape="circle"
                icon={<MailOutlined style={{ fontSize: "20px" }} />}
                size="large"
                style={{ fontSize: "16px" }}
              />
              <div className="ml-2 text-justify pt-4">
                <div className="text-sm font-bold">Thời gian làm việc</div>
                <p className="flex flex-col">
                  <span>Thứ 2 - Chủ nhật</span>
                  <span>07:30 - 19:30</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isBooking ? (
        <div
          className={
            scrollHeader
              ? ""
              : "z-10 relative top-[25px] w-[100%] max-w-[1210px] my-0 mx-auto"
          }
        >
          <Affix offsetTop={0}>
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "rgb(0,124,194)",
                alignItems: "center",
                borderTop: "1px solid #e4e4e4",
                borderBottom: "3px solid #007cc2",
                borderRadius: scrollHeader ? "" : "10px",
                padding: "10px",
                textTransform: "uppercase",
              }}
            />
          </Affix>
        </div>
      ) : (
        <div className="w-[100%] py-5 bg-[#45C3D2] px-10">
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <HomeOutlined style={{ fontSize: "20px" }} />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" style={{ display: "contents" }}>
              <UserOutlined style={{ fontSize: "20px" }} />
              <span style={{ marginLeft: "20px", fontSize: "14px" }}>
                John Brown
              </span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      )}
    </>
  );
};

export default Header;
