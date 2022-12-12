import { IconToggle } from "@assets/icons";
import PATH_URL from "@common/config/pathURL";
import { avatarDefault } from "@common/constant";
import { Breadcrumb, Button, Col, Dropdown, Menu, Row } from "antd";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

function Header({ name, subName, onPress }) {
  useEffect(() => window.scrollTo(0, 0));
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => setVisible(true);
  const token = true;
  const message = `${t("validate.success.logout")}`;

  const onRedirect = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    navigate(PATH_URL.LOGIN);
  };

  const dataLogined = [
    {
      label: <div>Nguyen Anh Tai</div>,
      key: 1,
    },
    {
      label: <div>Notify</div>,
      key: 2,
    },
    {
      label: <div onClick={() => {}}>Setting Info</div>,
      key: 3,
    },
    {
      label: <div onClick={handleLogout}>Logout</div>,
      key: 4,
    },
  ];

  const menu = <Menu items={dataLogined} />;

  const dataBreacrumb = {
    [PATH_URL.PATIENT_LIST]: "Quản lý hành chính",
  };
  const dataSubBreacrumb = {
    [PATH_URL.ACCOUNT_MANAGEMENT_CHANGE_PASS]: "ChangePass",
    [PATH_URL.ACCOUNT_MANAGEMENT_CHANGE_EMAIL]: "ChangeEmail",
  };

  return (
    <Row gutter={[24, 0]}>
      <Col span={24} md={6}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/home">Home</NavLink>
          </Breadcrumb.Item>
          {dataBreacrumb[`/${name.split("/")[0]}`] && (
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              <NavLink to={`/${name.split("/")[0]}`}>
                {dataBreacrumb[`/${name.split("/")[0]}`]}
              </NavLink>
            </Breadcrumb.Item>
          )}
          {dataSubBreacrumb[`/${name}`] && (
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              <NavLink to={`/${name}`}>{dataSubBreacrumb[`/${name}`]}</NavLink>
            </Breadcrumb.Item>
          )}
        </Breadcrumb>
        <div className="ant-page-header-heading">
          <span
            className="ant-page-header-heading-title"
            style={{ textTransform: "capitalize" }}
          >
            {dataBreacrumb[`/${name}`]}
          </span>
        </div>
      </Col>
      {token ? (
        <Col
          span={24}
          md={18}
          className="header-control display-flex jc-space-btwn"
        >
          <div>
            <Button
              type="link"
              className="sidebar-toggler"
              onClick={() => onPress()}
            >
              <IconToggle />
            </Button>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              className="ma-10 cursor-pointer"
            >
              <img
                src="https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg"
                alt="avatar"
                className="header-avatar"
              />
            </Dropdown>
          </div>
        </Col>
      ) : (
        <Col span={24} md={18} className="header-control">
          <div
            className="cursor-pointer"
            onClick={() => onRedirect(PATH_URL.LOGIN)}
          >
            {t("pulldown.login")}
          </div>
        </Col>
      )}
    </Row>
  );
}
Header.propTypes = {
  name: PropTypes.string,
  subName: PropTypes.string,
  onPress: PropTypes.func,
};
export default Header;
