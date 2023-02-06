import React from "react";
import EMR from ".././Images/EMR.png";

import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ItemMenu } from "../../Admin/SliderMenu/LeftMenu";
import useAuth from "../hooks/useAuth";

const { Sider } = Layout;
const { Item, SubMenu } = Menu;
const SiderMenu = ({ collapsed }) => {
  const { pathname } = useLocation();
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const CustomSubmenu = styled(SubMenu)`
    ${({ type }) =>
      type !== "group" &&
      `
    .ant-menu-submenu-arrow {
      color: #ffffff;
      display:none
    }
    `}
  `;
  const handleOnClickPath = (keyPath) => {
    console.log(keyPath);
    if (keyPath[0] === "logOut") {
      localStorage.removeItem("AccountLogin");
      setAuth({});
      navigate("/emr/login");
    } else {
      navigate(...keyPath);
    }
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
      style={{ background: "rgba(3,49,93)" }}
    >
      <div className=" w-[100%]  text-white">
        <div
          className="px-4 py-2 flex items-center  "
          style={{
            borderBottom: "1px solid #ffff",
          }}
        >
          <img
            src={EMR}
            alt=""
            style={{
              width: !collapsed ? "20%" : "80%",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={() => navigate("/")}
          />
          {!collapsed && <div className="text-xl">EMR-TN</div>}
        </div>
        <div className="flex items-center  px-4 py-2">
          <img
            src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4="
            alt=""
            style={{
              width: !collapsed ? "18%" : "80%",
              borderRadius: "100%",
              cursor: "pointer",
              marginRight: "10px",
            }}
          />
          {!collapsed && <div className="text-base">Nguyễn Văn Trường</div>}
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        forceSubMenuRender={true}
        style={{ background: "#03315D" }}
        defaultSelectedKeys={[pathname]}
        onClick={({ keyPath }) => {
          handleOnClickPath(keyPath);
        }}
        items={ItemMenu}
      ></Menu>
    </Sider>
  );
};

export default SiderMenu;
