import { Button, Form, Select, Table, Tag } from "antd";
import React from "react";
import { useState } from "react";
import SearchCommon from "../../../App/hooks/SearchCommon";
import UrlBreadcrumb from "../../common/utils/UrlBreadcrumb";
import DrawerFormRole from "./ModalPermissions";

let dataSource = [
  {
    key: "1",
    id: "1",
    permissions: "Admin",
    update: "2022-08-14 09:51:52",
    status: "ACTIVE",
  },
  {
    key: "2",
    id: "2",
    update: "2022-08-14 09:51:52",
    permissions: " Doctor",
    status: "ACTIVE",
  },
  {
    key: "3",
    id: "3",
    permissions: " Nurse",
    update: "2022-08-14 09:51:52",
    status: "INACTIVE",
  },
  {
    key: "4",
    id: "4",
    permissions: "Receptionist",
    update: "2022-08-14 09:51:52",
    status: "ACTIVE",
  },
  {
    key: "5",
    id: "5",
    permissions: "Technicians",
    update: "2022-08-14 09:51:52",
    status: "INACTIVE",
  },
];
const statusOptions = [
  {
    value: "",
    label: "Tất cả",
  },
  {
    value: "ACTIVE",
    label: "Hoạt động",
  },
  {
    value: "INACTIVE",
    label: "Không hoạt động",
  },
];
const ListPermission = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState("add");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataTable, setDataTable] = useState(dataSource);
  const [itemForm, setItemForm] = useState();

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên vai trò",
      dataIndex: "permissions",
      key: "permissions",
    },
    {
      title: "Hành động",
      dataIndex: "",
      key: "x",
      align: "center",
      render: (value, record) => (
        <>
          <Button
            style={{ marginRight: "8px" }}
            onClick={() => {
              setType("edit");
              setIsModalVisible(true);
              setItemForm(record);
            }}
          >
            Chỉnh sửa
          </Button>
          <Button>Xoá</Button>
        </>
      ),
    },
    {
      title: "Cập nhật",
      dataIndex: "update",
      key: "update",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (value) =>
        value === "ACTIVE" ? (
          <Tag color="success">Hoạt động</Tag>
        ) : (
          <Tag color="default">Không hoạt động</Tag>
        ),
    },
  ];
  const closeForm = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  return (
    <>
      <UrlBreadcrumb type={"permission"} style={{ margin: "20px" }} />

      <div className="bg-white">
        <div className="py-[15px] px-2">
          <div className="container-fluid">
            <div className="flex items-center justify-start mx-4">
              <div className="mr-4 pt-2">
                <h1 className="uppercase text-xl">Danh Sách Nhóm Quyền</h1>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  size="large"
                  type="primary"
                  onClick={() => {
                    setType("add");
                    setIsModalVisible(true);
                  }}
                >
                  <i className="fas fa-plus"></i> Thêm mới
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="flex gap-4 mb-8 w-[50%]">
            <SearchCommon
              className="w-72"
              placeholder="Tên vai trò"
              maxLength={100}
            />

            <Select
              className="w-72"
              defaultValue="Trạng thái: Tất cả"
              onSelect={"status"}
              options={statusOptions}
            />
          </div>
          <Table bordered={true} dataSource={dataTable} columns={columns} />
        </div>

        <DrawerFormRole
          type={type}
          form={form}
          canEdit
          closeForm={closeForm}
          isModalVisible={isModalVisible}
          itemForm={itemForm}
        />
      </div>
    </>
  );
};

export default ListPermission;
