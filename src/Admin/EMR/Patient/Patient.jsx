import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  PlusSquareFilled,
  SearchOutlined,
  SettingFilled,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Drawer,
  Form,
  Input,
  List,
  Modal,
  Row,
  Spin,
  Table,
} from "antd";
import axios from "../../.././App/api/axios.js";
import { PATIENT_LIST } from "../../.././App/api/urlApi.js";
import moment from "moment";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { Group1, Group3 } from "../../.././App/Images";
import { TYPE_FIELD } from "../../common/constant";
import renderInputForm from "../../common/utils/renderInputForm";
import UrlBreadcrumb from "../../common/utils/UrlBreadcrumb";
import MyDialog from "../components/common/MyDialog";
function ListCamera() {
  const { confirm } = Modal;
  const navigate = useNavigate();
  const titleTable = "Bộ dữ liệu";
  const [dataRender, setDataRender] = useState([]);
  const loading = false;
  const [rowSelection, setRowSelection] = useState({});
  const [open, setOpen] = useState(false);
  // const [isDelete, setIsDelete] = useState(false);
  const [idPatient, setIdPatient] = useState();
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
    { key: 12, checked: false },
    { key: 13, checked: false },
  ]);

  const { data, refetch, isFetching } = useQuery(
    ["getListPatient"],
    async () => {
      const res = await axios.get(PATIENT_LIST);
      setDataRender(res?.data);
      return res?.data;
    },
    { initialData: [], onError: (e) => {} }
  );

  const deletePatient = useMutation(
    (id) => {
      return axios.delete(`${PATIENT_LIST}/${id}`);
    },
    {
      onSuccess: () => {
        refetch();
      },
      onError: (err) => {
        refetch();
      },
    }
  );
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
    // console.log("record", record);
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
  const handleDeletePatient = (id) => {
    confirm({
      title: "Bạn có chắc chắn muốn xoá bệnh nhân",
      icon: <ExclamationCircleOutlined />,
      okText: "Xác nhận",
      cancelText: "Huỷ",
      onOk: () => {
        deletePatient.mutate(id);
      },
      onCancel() {},
      confirmLoading: isFetching,
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
      width: 100,
    },
    {
      hidden: hideColumn[2].checked,
      title: "Năm sinh",
      dataIndex: "birth",
      key: "birth",
      render: (_, values) => {
        return <span>{moment(values.birth).format("DD/MM/YYYY")}</span>;
      },
      width: 180,
      ellipsis: true,
    },
    {
      hidden: hideColumn[3].checked,
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 180,
      ellipsis: true,
    },
    {
      hidden: hideColumn[4].checked,
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      width: 180,
      ellipsis: true,
    },
    {
      hidden: hideColumn[5].checked,
      title: "Mã bệnh nhân",
      dataIndex: "patientCode",
      key: "patientCode",
      width: 150,
      ellipsis: true,
    },
    {
      hidden: hideColumn[6].checked,
      title: "Mã bệnh án",
      dataIndex: "patientNoteCode",
      key: "patientNoteCode",
      width: 120,
      ellipsis: true,
    },
    {
      hidden: hideColumn[7].checked,
      title: "Phòng",
      dataIndex: "room",
      key: "room",
      width: 200,
      ellipsis: true,
    },
    {
      hidden: hideColumn[8].checked,
      title: "Giường",
      dataIndex: "bed",
      key: "bed",
      width: 100,
      ellipsis: true,
    },
    {
      hidden: hideColumn[9].checked,
      title: "Khoa điều trị",
      dataIndex: "department",
      key: "department",
      width: 250,
      ellipsis: true,
    },
    {
      hidden: hideColumn[10].checked,
      title: "Ngày vào",
      dataIndex: "dayIn",
      render: (_, values) => {
        return <span>{moment(values.dayIn).format(" DD/MM/YYYY")}</span>;
      },
      key: "dayIn",
      width: 150,
      ellipsis: true,
    },
    {
      hidden: hideColumn[11].checked,
      title: "Chẩn đoán",
      dataIndex: "diagnose",
      key: "diagnose",
      width: 400,
      ellipsis: true,
    },
    {
      hidden: hideColumn[12].checked,
      title: "Bác sĩ điều trị",
      dataIndex: "doctor",
      key: "doctor",
      width: 200,
      ellipsis: true,
    },
    {
      hidden: hideColumn[13].checked,
      title: "Hành động",
      key: "action",
      width: 120,
      render: (value, record) => (
        <>
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate(`edit/${record.id}`)}
              icon={<EditOutlined />}
            ></Button>
            <Button
              onClick={() => {
                handleDeletePatient(record?.id);
              }}
              icon={<DeleteOutlined />}
            ></Button>
          </div>
        </>
      ),
    },
  ].filter((item) => !item.hidden);

  const fieldsDataForm = [
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Loại bệnh án",
      placeholder: "Chọn loại bệnh án",
      colWidth: 8,
    },
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Khoa",
      placeholder: "Chọn khoa",
      colWidth: 8,
    },
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Phòng",
      placeholder: "Chọn phòng",
      colWidth: 8,
    },
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Giường",
      placeholder: "Chọn giường",
      colWidth: 8,
    },
    {
      type: TYPE_FIELD.SELECT,
      name: "resolutionId",
      label: "Tìm theo mã BA, mã BN, tên BN",
      placeholder: "Mã BA, mã BN, tên BN",
      colWidth: 8,
    },
    {
      type: TYPE_FIELD.DATE_PICKER,
      name: "resolutionId",
      label: "Từ ngày - Đến ngày",
      placeholder: "Chọn ngày",
      colWidth: 8,
      isRangePicker: true,
      style: { width: "100%" },
    },
  ];

  const onSearch = (event) => {
    if (event.key === "Enter") {
      // handleSearchData(event.target.value);
    }
  };

  const handlePlusButton = () => {
    console.log("handlePlusButton");
    navigate("create");
  };
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
    { key: 3, name: "Email" },
    { key: 4, name: "Số điện thoại" },
    { key: 5, name: "Mã bệnh nhân" },
    { key: 6, name: "Mã bệnh án" },
    { key: 7, name: "Phòng" },
    { key: 8, name: "Giường" },
    { key: 9, name: "Khoa điều trị" },
    { key: 10, name: "Ngày vào" },
    { key: 11, name: "Chẩn đoán" },
    { key: 12, name: "Bác sĩ điều trị" },
    { key: 13, name: "Hành động" },
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
    <>
      <UrlBreadcrumb type={"patient"} style={{ margin: "20px" }} />
      <h1 className="text-xl " style={{ padding: "0 20px 20px" }}>
        DANH SÁCH BỆNH NHÂN
      </h1>
      <div className="patient-list-management pa-20 poin">
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
              <Row align="middle" justify="center">
                {renderInputForm(fieldsDataForm)}
              </Row>
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
                <Row
                  onClick={handlePlusButton}
                  className="ml-20"
                  align="middle"
                >
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
            <Spin spinning={isFetching}>
              <div className="table-responsive">
                <Table
                  scroll={{ x: 1500 }}
                  // eslint-disable-next-line react/no-unstable-nested-components
                  expandedRowRender={(record) => (
                    <>
                      <div className="grid grid-cols-3 gap-5 mt-3">
                        <Link to={`analysis/${record?.id}`} className="">
                          <div className="flex gap-2">
                            <div className="">
                              <img src={Group3} alt="" />
                            </div>
                            <p className="font-semibold">Quản lý điều trị </p>
                          </div>
                        </Link>
                        <Link to="/medical-being-treated" class="">
                          <div className="flex gap-2">
                            <div className="">
                              <img src={Group1} alt="" />
                            </div>
                            <p className="font-semibold">
                              Bệnh án đang điều trị
                            </p>
                          </div>
                        </Link>
                        <Link
                          to={`medical-examination-history/${record?.id}`}
                          className=""
                        >
                          <div className="flex gap-2">
                            <div className="">
                              <img src={Group3} alt="" />
                            </div>
                            <p className="font-semibold">
                              Lịch sử khám chữa bệnh{" "}
                            </p>
                          </div>
                        </Link>
                      </div>
                    </>
                  )}
                  // eslint-disable-next-line consistent-return
                  rowClassName={(record) => {
                    if (record.name) {
                      return "NotExpandible";
                    }
                  }}
                  rowSelection={rowSelection}
                  columns={columns}
                  dataSource={dataRender?.sort(function (a, b) {
                    return b.id - a.id;
                  })}
                  loading={loading}
                  className="table-custom"
                  rowKey={(record) => record.id || record.userId}
                />
              </div>
            </Spin>
          </Card>
        </div>
      </div>
    </>
  );
}

ListCamera.propTypes = {};

export default ListCamera;
