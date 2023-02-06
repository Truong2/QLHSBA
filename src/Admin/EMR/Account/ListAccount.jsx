import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Form, message, Modal, Spin, Table } from "antd";
import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import axios from "../../../App/api/axios";
import { LOGIN_URL } from "../../../App/api/urlApi";
import SearchCommon from "../../../App/hooks/SearchCommon";
import UrlBreadcrumb from "../../common/utils/UrlBreadcrumb";
import ModalCreateAccount from "../components/ModalCreateAccount";
import ModalEditAccount from "../components/ModalEditAccount";

const ListAccount = () => {
  const { confirm } = Modal;
  const [form] = Form.useForm();
  const [createAccount, setCreateAccount] = useState(false);
  const [editAccount, setEditAccount] = useState(false);
  const [itemAccount, setItemAccount] = useState();
  const [dataTable, setDataTable] = useState([]);
  const [dataItem, setDataItem] = useState();
  const { data, refetch, isFetching } = useQuery(
    ["getAccount"],
    async () => {
      const res = await axios.get(LOGIN_URL);
      setDataTable(res?.data);
      return res?.data;
    },
    { initialData: [], onError: (e) => {} }
  );
  const permission = [
    {
      label: "Supper Admin",
      value: 1,
    },
    {
      label: "Admin",
      value: 2,
    },
    {
      label: "Nurse",
      value: 3,
    },
    {
      label: "Doctor",
      value: 4,
    },
    {
      label: "Technicians",
      value: 5,
    },
    {
      label: "Receptionist",
      value: 6,
    },
  ];

  // function getPermission() {

  //   // console.log(arr);
  // }
  // console.log(getPermission());
  const deleteAccount = useMutation(
    async (id) => {
      const response = await axios.delete(`${LOGIN_URL}/${id}`);
      console.log(response);
    },
    {
      onSuccess: () => {
        message.success("Xoas tài khoản thành công");
        refetch();
      },
      onError: (err) => {
        message.error("Xoas tài khoản thất bại");
      },
    }
  );
  const handleDeleteAccount = async (record) => {
    confirm({
      title: "Bạn có chắc chắn muốn xoá tài khoản này",
      icon: <ExclamationCircleOutlined />,
      okText: "Xác nhận",
      cancelText: "Huỷ",
      onOk: () => {
        deleteAccount.mutate(record.id);
      },
      onCancel() {},
      confirmLoading: isFetching,
    });
  };
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
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Mật khẩu",
      dataIndex: "passWord",
      key: "passWord",
    },
    {
      title: "Nhóm quyền",
      dataIndex: "role",
      key: "role",
      render: (value, record) => <div>{value?.sort().join(",")}</div>,
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
          <Button onClick={() => handleDeleteAccount(record)}>Xoá</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <UrlBreadcrumb type={"account"} style={{ margin: "20px" }} />
      <Spin spinning={isFetching}>
        <div className="bg-white">
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
              refetch={refetch}
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
              refetch={refetch}
            />
          )}
        </div>
      </Spin>
    </>
  );
};

export default ListAccount;
