import {
  DeleteFilled,
  EditFilled,
  PlusSquareFilled,
  SearchOutlined,
  SettingFilled,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  ConfigProvider,
  Divider,
  Drawer,
  Form,
  Image,
  Input,
  List,
  Radio,
  Row,
  Table,
  Typography,
} from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TYPE_FIELD } from "../../common/constant";
import renderInputForm from "../../common/utils/renderInputForm";
import patientList from "../../dummy/patientList";
import MyDialog from "../components/common/MyDialog";

function ListCamera() {
  const titleTable = "Bộ dữ liệu";
  const loading = false;
  const [rowSelection, setRowSelection] = useState({});
  const [open, setOpen] = useState(false);
  const [hideColumn, setHideColumn] = useState([
    { key: 0, checked: false },
    { key: 1, checked: false },
    { key: 2, checked: false },
    { key: 3, checked: false },
    { key: 4, checked: false },
    { key: 5, checked: false },
    { key: 6, checked: false },
    { key: 7, checked: false },
    { key: 8, checked: false },
    { key: 9, checked: false },
    { key: 10, checked: false },
    { key: 11, checked: false },
  ]);
  const [isVisibleDeleteUser, setIsVisibleDeleteUser] = useState({
    isShow: false,
    id: null,
  });
  const [pagination, setPagination] = useState({
    current: 1,
    skip: 0,
    take: 10,
    total: 0,
  });

  const handleRecord = (record) => {
    console.log("record", record);
  };

  const onOpenModal = (id) => {
    document.body.classList.add("salmon");
    setIsVisibleDeleteUser({
      isShow: true,
      id,
    });
  };

  const onCloseModal = () => {
    document.body.classList.remove("salmon");
    setIsVisibleDeleteUser({
      isShow: false,
      id: null,
    });
  };

  const onChangeTable = (newPagination) => {
    setPagination({
      ...pagination,
      current: newPagination.current,
      skip: (newPagination.current - 1) * pagination.take,
      take: newPagination.pageSize,
    });
  };

  const columns = [
    {
      hidden: hideColumn[0]?.checked,
      title: "Tên bệnh nhân",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (_, values) => {
        return (
          <a className="fw-600" style={{ color: "#000000" }}>
            {values.name}
          </a>
        );
      },
      width: 200,
    },
    {
      hidden: hideColumn[1].checked,
      title: "Giới tính",
      dataIndex: "sex",
      key: "sex",
      width: 80,
    },
    {
      hidden: hideColumn[2].checked,
      title: "Năm sinh",
      dataIndex: "birth",
      key: "birth",
      width: 160,
    },
    {
      hidden: hideColumn[3].checked,
      title: "Mã bệnh nhân",
      dataIndex: "patientCode",
      key: "patientCode",
      width: 150,
    },
    {
      hidden: hideColumn[4].checked,
      title: "Mã bệnh án",
      dataIndex: "patientNoteCode",
      key: "patientNoteCode",
      width: 120,
    },
    {
      hidden: hideColumn[5].checked,
      title: "Phòng",
      dataIndex: "room",
      key: "room",
      width: 200,
    },
    {
      hidden: hideColumn[6].checked,
      title: "Giường",
      dataIndex: "bed",
      key: "bed",
      width: 100,
    },
    {
      hidden: hideColumn[7].checked,
      title: "Khoa điều trị",
      dataIndex: "department",
      key: "department",
      width: 220,
    },
    {
      hidden: hideColumn[8].checked,
      title: "Ngày vào",
      dataIndex: "dayIn",
      key: "dayIn",
      width: 150,
    },
    {
      hidden: hideColumn[9].checked,
      title: "Chẩn đoán",
      dataIndex: "diagnose",
      key: "diagnose",
      width: 400,
    },
    {
      hidden: hideColumn[10].checked,
      title: "Bác sĩ điều trị",
      dataIndex: "doctor",
      key: "doctor",
      width: 200,
    },
    {
      hidden: hideColumn[11].checked,
      title: "Hành động",
      key: "action",
      width: 140,
    },
  ].filter((item) => !item.hidden);

  const fieldsDataForm = [
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Tên bệnh nhân",
      placeholder: "Bệnh nhân A",
      colWidth: 6,
    },
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Tên bệnh nhân",
      placeholder: "Bệnh nhân A",
      colWidth: 6,
    },
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Tên bệnh nhân",
      placeholder: "Bệnh nhân A",
      colWidth: 6,
    },
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Tên bệnh nhân",
      placeholder: "Bệnh nhân A",
      colWidth: 6,
    },
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Tên bệnh nhân",
      placeholder: "Bệnh nhân A",
      colWidth: 6,
    },
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Tên bệnh nhân",
      placeholder: "Bệnh nhân A",
      colWidth: 6,
    },
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Tên bệnh nhân",
      placeholder: "Bệnh nhân A",
      colWidth: 6,
    },
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Tên bệnh nhân",
      placeholder: "Bệnh nhân A",
      colWidth: 6,
    },
  ];

  const onSearch = (event) => {
    if (event.key === "Enter") {
      // handleSearchData(event.target.value);
    }
  };

  const handlePlusButton = () => {};
  const handleSettingButton = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const placeholderSearch = "Tìm kiếm nhanh...";
  const titleRedirectAddPage = "";

  const configPagination = {
    position: ["bottomRight"],
    pageSize: pagination?.take,
    current: pagination?.current,
    total: pagination?.total,
  };

  const dataOptionsTable = [
    { key: 0, name: "Tên bệnh nhân" },
    { key: 1, name: "Giới tính" },
    { key: 2, name: "Năm sinh" },
    { key: 3, name: "Mã bệnh nhân" },
    { key: 4, name: "Mã bệnh án" },
    { key: 5, name: "Phòng" },
    { key: 6, name: "Giường" },
    { key: 7, name: "Khoa điều trị" },
    { key: 8, name: "Ngày vào" },
    { key: 9, name: "Chẩn đoán" },
    { key: 10, name: "Bác sĩ điều trị" },
    { key: 11, name: "Hành động" },
  ];

  const onSubmitForm = () => {};
  const handleCheckbox = (value) => {
    const arr2 = [
      { ...hideColumn[value], checked: !hideColumn[value].checked },
    ];
    const res = hideColumn.map(
      (obj) => arr2.find((o) => o.key === obj.key) || obj
    );
    setHideColumn(res);
  };
  return (
    <div className="patient-list-management pa-20">
      <Row>
        <Drawer
          title="Cấu hình bộ dữ liệu"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Card>
            <List
              header={
                <List.Item>
                  <List.Item.Meta title={<div>Tên cột</div>} />
                  <div>Ẩn cột</div>
                </List.Item>
              }
              dataSource={dataOptionsTable}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item.name} />
                  <Checkbox onClick={() => handleCheckbox(item.key)} />
                </List.Item>
              )}
            />
          </Card>
        </Drawer>
        <MyDialog
          textConfirm="confirm"
          showModal={isVisibleDeleteUser.isShow}
          handleCancel={onCloseModal}
          handleOk={onCloseModal}
          textBtnOk="ok"
          textBtnCancel="cancel"
        />
      </Row>
      <div className="patient-list-form">
        <Divider
          orientation="left"
          className="fz-20 fw-600 patient-list-header pt-10 pb-10"
        >
          Tìm kiếm bệnh nhân
        </Divider>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
          justify="center"
        >
          <Form
            className="patient-list-form"
            layout="vertical"
            onFinish={onSubmitForm}
          >
            <Row justify="center">{renderInputForm(fieldsDataForm)}</Row>
            <div className="pl-20 pb-20">
              <Button className="fw-600 cancel-btn">CANCEL</Button>
            </div>
          </Form>
        </Row>
      </div>
      <div className="my-table-default">
        <Card
          bordered={false}
          title={titleTable}
          extra={
            <div className="display-flex js-flex-end">
              <Input
                onKeyPress={onSearch}
                className="table-search"
                name="searchValue"
                type="text"
                placeholder={placeholderSearch}
                prefix={<SearchOutlined />}
              />
              <Row onClick={handlePlusButton} className="ml-20" align="middle">
                <PlusSquareFilled className="fz-32 plus-btn" size="large" />
                <span className="color-white fw-600 ml-5">
                  {titleRedirectAddPage}
                </span>
              </Row>
              <Row
                onClick={handleSettingButton}
                className="ml-20"
                align="middle"
              >
                <SettingFilled className="fz-32 plus-btn" size="large" />
                <span className="color-white fw-600 ml-5">
                  {titleRedirectAddPage}
                </span>
              </Row>
            </div>
          }
        >
          <div className="table-responsive">
            <Table
              scroll={{ x: 1500 }}
              // eslint-disable-next-line react/no-unstable-nested-components
              expandedRowRender={(record) => <p>{record.sex}</p>}
              // eslint-disable-next-line consistent-return
              rowClassName={(record) => {
                if (record.name) {
                  return "NotExpandible";
                }
              }}
              rowSelection={rowSelection}
              columns={columns}
              dataSource={patientList}
              loading={loading}
              pagination={configPagination}
              className="table-custom"
              rowKey={(record) => record.key || record.userId}
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    handleRecord(record);
                  },
                };
              }}
              onChange={onChangeTable}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

ListCamera.propTypes = {};

export default ListCamera;
