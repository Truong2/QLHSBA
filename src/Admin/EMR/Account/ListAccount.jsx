import { Button, Form, Table } from "antd";
import React from "react";
import { useState } from "react";
import SearchCommon from "../../../App/hooks/SearchCommon";
import ModalCreateAccount from "../components/ModalCreateAccount";
import ModalEditAccount from "../components/ModalEditAccount";

let dataSource = [
  {
    key: "1",
    id: "1",
    name: "Mike",
    email: "truong8dt@gmail.com",
    permissions: "Admin, Doctor, Nurse, Receptionist",
  },
  {
    key: "2",
    id: "2",
    name: "Truong",
    email: "truong8dt234@gmail.com",
    permissions: "Admin, Doctor, Nurse, Receptionist",
  },
  {
    key: "3",
    id: "3",
    name: "Yan",
    email: "truong8dt234@gmail.com",
    permissions: " Doctor, Nurse, Receptionist",
  },
  {
    key: "4",
    id: "4",
    name: "Yunky",
    email: "Yunky8dt234@gmail.com",
    permissions: "Nurse, Receptionist",
  },
  {
    key: "5",
    id: "5",
    name: "Miker",
    email: "Mikert234@gmail.com",
    permissions: "Admin, Doctor",
  },
];
const ListAccount = () => {
  const [form] = Form.useForm();
  const [createAccount, setCreateAccount] = useState(false);
  const [editAccount, setEditAccount] = useState(false);
  const [itemAccount, setItemAccount] = useState();
  const [dataTable, setDataTable] = useState(dataSource);
  const [dataItem, setDataItem] = useState();
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Địa chỉ email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Nhóm quyền",
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
              setItemAccount(record);
              setEditAccount(true);
            }}
          >
            Chỉnh sửa
          </Button>
          <Button>Xoá</Button>
        </>
      ),
    },
  ];
  console.log(dataTable);
  return (
    <div className="">
      <div className="py-[15px] px-2">
        <div className="container-fluid">
          <div className="flex items-center justify-start mx-4">
            <div className="mr-4 pt-2">
              <h1 className="uppercase text-xl">Danh Sách Tài Khoản</h1>
            </div>
            <div className="flex items-center justify-center">
              <Button
                size="large"
                type="primary"
                onClick={() => setCreateAccount(true)}
              >
                <i className="fas fa-plus"></i> Thêm Tài Khoản Mới
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <SearchCommon
          placeholder="Tài khoản"
          // onSearch={(value) => onChangeOneParam('address')(value)}
          className="w-1/5"
          style={{ width: "20%" }}
          autoFocus
          // defaultValue={query.get('address') || ''}
        />
      </div>
      <Table bordered={true} dataSource={dataTable} columns={columns} />
      {createAccount && (
        <ModalCreateAccount
          createAccount={createAccount}
          setCreateAccount={setCreateAccount}
          form={form}
          dataTable={dataTable}
          setDataTable={setDataTable}
        />
      )}
      {editAccount && (
        <ModalEditAccount
          editAccount={editAccount}
          setEditAccount={setEditAccount}
          itemAccount={itemAccount}
          form={form}
          dataTable={dataTable}
          setDataTable={setDataTable}
          setDataItem={setDataItem}
          dataItem={dataItem}
        />
      )}
    </div>
  );
};

export default ListAccount;
