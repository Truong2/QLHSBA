import { EditOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Modal, Select, Table, Tag } from "antd";
import React from "react";
import { useState } from "react";
import SearchCommon from "../../../App/hooks/SearchCommon";
import { DeleteBin } from "../../../App/icons";
import ModalPatient from "./ModalPatient";

let dataSource = [
  {
    key: "1",
    id: "1",
    codePatient: "BN1663752393",
    name: "Phạm Văn Vinh",
    phone: "0964463235",
    address: "Xã Bộc Bố, Huyện Pác Nặm, Tỉnh Bắc Kạn",
    update: "2022-11-04 11:28:23",
    vocative: "Ông",
    email: "phamvinh123@gmail.com",
    cccd: "125913276",
    job: "Sinh viên",
    sex: "Nam",
    // dateBirth: "10/10/2002",
    nationality: "Việt Nam",
    ethnic: "Kinh",
    maritalStatus: "Độc thân",
  },
  {
    key: "2",
    id: "2",
    codePatient: "BN1663752394",
    name: "Phạm Văn Bình",
    phone: "0964463235",
    address: "Xã Bộc Bố, Huyện Pác Nặm, Tỉnh Bắc Kạn",
    update: "2022-11-04 11:28:23",
    vocative: "Ông",
    email: "phamvinh123@gmail.com",
    cccd: "125913276",
    job: "Sinh viên",
    sex: "Nam",
    // dateBirth: "10/12/2002",
    nationality: "Việt Nam",
    ethnic: "Kinh",
    maritalStatus: "Độc thân",
  },
  {
    key: "3",
    id: "3",
    codePatient: "BN1663752395",
    name: "Phạm Văn Nam",
    phone: "0964463235",
    address: "Xã Bộc Bố, Huyện Pác Nặm, Tỉnh Bắc Kạn",
    update: "2022-11-04 11:28:23",
    vocative: "Ông",
    email: "PhamNam123@gmail.com",
    cccd: "12593313276",
    job: "Sinh viên",
    sex: "Nam",
    // dateBirth: "1/10/2002",
    nationality: "Việt Nam",
    ethnic: "Kinh",
    maritalStatus: "Độc thân",
  },
  {
    key: "4",
    id: "4",
    codePatient: "BN1663752396",
    name: "Trần Văn Công",
    phone: "0964463235",
    address: "Xã Bộc Bố, Huyện Pác Nặm, Tỉnh Bắc Kạn",
    update: "2022-11-04 11:28:23",
    vocative: "Ông",
    email: "vancong123@gmail.com",
    cccd: "12591033276",
    job: "Giáo viên",
    sex: "Nam",
    // dateBirth: "10/12/2002",
    nationality: "Việt Nam",
    ethnic: "Kinh",
    maritalStatus: "Kết hôn",
  },
  {
    key: "5",
    id: "5",
    codePatient: "BN1663752397",
    name: "Nguyễn Thị Châu",
    phone: "0964463235",
    address: "Xã Bộc Bố, Huyện Pác Nặm, Tỉnh Bắc Kạn",
    update: "2022-11-04 11:28:23",
    vocative: "Bà",
    email: "Chauchau123@gmail.com",
    cccd: "12305913276",
    job: "Công nhân",
    sex: "Nữ",
    // dateBirth: "10/2/2002",
    nationality: "Việt Nam",
    ethnic: "Kinh",
    maritalStatus: "Ly hôn",
  },
  {
    key: "6",
    id: "6",
    codePatient: "BN1663752398",
    name: "Nguyễn Thị Minh Anh",
    phone: "0978888888",
    address: "Xã Bộc Bố, Huyện Pác Nặm, Tỉnh Bắc Kạn",
    update: "2022-11-04 11:28:23",
    vocative: "Bà",
    email: "minhAnh123@gmail.com",
    cccd: "12305913276",
    job: "Công nhân",
    sex: "Nữ",
    // dateBirth: "10/2/2002",
    nationality: "Việt Nam",
    ethnic: "Kinh",
    maritalStatus: "Độc thân",
  },
  {
    key: "7",
    id: "7",
    codePatient: "BN1663752399",
    name: "Trần Văn Nam",
    phone: "0964433335",
    address: "Xã Bộc Bố, Huyện Pác Nặm, Tỉnh Bắc Kạn",
    update: "2022-11-04 11:28:23",
    vocative: "Ông",
    email: "Nam123@gmail.com",
    cccd: "12591033276",
    job: "Giáo viên",
    sex: "Nam",
    // dateBirth: "10/12/2002",
    nationality: "Việt Nam",
    ethnic: "Kinh",
    maritalStatus: "Kết hôn",
  },
];
const ListPatient = () => {
  const [form] = Form.useForm();
  const [dataTable, setDataTable] = useState(dataSource);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectPatient, setSelectPatient] = useState(false);
  const [itemPatients, setItemPatients] = useState();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleClickView = (record) => {
    setType("view");
    setIsModalVisible(true);
    setItemPatients(record);
  };
  const handleEditPatient = (record) => {
    setType("edit");
    setIsModalVisible(true);
    setItemPatients(record);
  };
  const handleDeletePatient = (record) => {
    console.log(record);
  };
  function ListPatient() {
    return [
      ...dataSource.map((e) => ({
        label: e.name,
        value: e.name,
      })),
    ];
  }
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "5%",
    },
    {
      title: "Mã bệnh nhân",
      dataIndex: "codePatient",
      key: "codePatient",
      width: "12%",
    },
    {
      title: "Họ và Tên",
      dataIndex: "name",
      key: "name",
      render: (value, record) => (
        <Button
          className="p-0 m-0"
          type="link"
          onClick={() => handleClickView(record)}
          style={{ color: "#2c3d94", display: "flex", fontSize: "16px" }}
        >
          {value}
        </Button>
      ),
      width: "18%",
      align: "center",
      sorter: (a, b) => {
        const arrNameA = a.name.split(" ");
        const arrNameB = b.name.split(" ");
        return arrNameA[arrNameA.length - 1].localeCompare(
          arrNameB[arrNameB.length - 1]
        );
      },
      ellipsis: true,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      width: "10%",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Hành động",
      dataIndex: "",
      key: "x",
      align: "center",
      render: (value, record) => (
        <>
          <div className="">
            <Button
              type="text "
              className="text-black p-2"
              onClick={() => handleEditPatient(record)}
              icon={<EditOutlined style={{ fontSize: "20px" }} />}
            />
            <Button
              type="text "
              onClick={() => handleDeletePatient(record)}
              className="text-black p-2"
              icon={<DeleteBin style={{ fontSize: "20px" }} />}
            />
          </div>
        </>
      ),
      width: "12%",
    },
    {
      title: "Cập nhật",
      dataIndex: "update",
      key: "update",
      width: "15%",
    },
  ];
  // console.log(dataTable);
  return (
    <div className="mx-4">
      <div className="py-[15px] px-2">
        <div className="container-fluid">
          <div className="flex items-center justify-start mx-4">
            <div className="mr-4 pt-2">
              <h1 className="uppercase text-xl">Danh Sách Bệnh Nhân</h1>
            </div>
            <div className="flex items-center justify-center">
              <Button
                size="large"
                type="primary"
                onClick={() => {
                  setType("create");
                  setIsModalVisible(true);
                }}
                // onClick={showDrawer}
              >
                <i className="fas fa-plus"></i> Thêm Bệnh Nhân mới
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-between ">
          <SearchCommon
            placeholder="Nhập tên, mã bệnh nhân"
            // onSearch={(value) => onChangeOneParam('address')(value)}
            className="w-1/5"
            style={{ width: "40%" }}
            autoFocus
            // defaultValue={query.get('address') || ''}
          />
          <Button
            type="primary"
            size="large"
            onClick={() => setSelectPatient(true)}
            style={{ borderRadius: "5px" }}
          >
            <i class="fas fa-hand-pointer"></i>
            Chọn bệnh nhân thăm khám
          </Button>
        </div>
        <Table bordered={true} dataSource={dataTable} columns={columns} />
      </div>
      {isModalVisible && (
        <ModalPatient
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          type={type}
          itemPatients={itemPatients}
          form={form}
        />
      )}
      {selectPatient && (
        <Modal
          title="Chọn bệnh nhân thăm khám"
          open={selectPatient}
          onOk={() => setSelectPatient(false)}
          // confirmLoading={confirmLoading}
          onCancel={() => setSelectPatient(false)}
        >
          <Select
            allowClear
            showArrow
            showSearch
            // disabled={canView}
            // suffixIcon={<SearchIcon />}
            className="w-full flex-1"
            placeholder="Lựa chọn bệnh nhân"
            // onChange={onChangeSelect}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={ListPatient()}
            autoFocus
          />
        </Modal>
      )}
    </div>
  );
};

export default ListPatient;
