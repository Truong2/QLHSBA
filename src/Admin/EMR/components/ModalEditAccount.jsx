import { Button, Form, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import {
  validateEmail,
  validateMaxLengthStr,
  validatePassword,
  validateRequireInput,
} from "../../../App/validator";

const { Item } = Form;
const ModalEditAccount = ({
  editAccount,
  setEditAccount,
  itemAccount,
  form,
  dataTable,
  setDataTable,
}) => {
  const [isDirty, setIsDirty] = useState(false);
  useEffect(() => {
    form.setFieldsValue({
      name: itemAccount.name,
      email: itemAccount.email,
      permissions: itemAccount.permissions.split(","),
    });
  }, []);
  const handleEditAccount = (valueForm) => {
    const indexValueAccount = dataTable.findIndex(
      (e) => e.id === valueForm?.id
    );
    const dataEdit = dataTable?.fill(
      valueForm,
      indexValueAccount,
      indexValueAccount + 1
    );

    setDataTable(dataEdit);
  };
  return (
    <Modal
      visible={editAccount}
      okButtonProps={{ disabled: !isDirty }}
      onCancel={() => setEditAccount(false)}
      centered
      closable={false}
      footer={null}
      okText="Xác nhận"
      cancelText="Huỷ"
      maskClosable
      width="60rem"
      bodyStyle={{
        padding: "2rem 1.9rem",
        maxHeight: "calc(100vh - 3rem)",
        overflow: "auto",
      }}
      destroyOnClose
    >
      <div className="mb-6">
        <div className="font-bold text-base justify-center flex mb-4 uppercase">
          Sửa tài khoản
        </div>
      </div>

      <Form
        form={form}
        onFinish={(value) => {
          let valueForm = {
            ...itemAccount,
            ...value,
            permissions: value.permissions?.toString(),
          };
          console.log(valueForm);
          handleEditAccount(valueForm);
        }}
        onValuesChange={() => !isDirty && setIsDirty(true)}
        className="text-base grid gap-4"
        layout="vertical"
      >
        <div className="mx-4">
          <div className="flex gap-4 ">
            <Item
              className="w-1/2"
              name="name"
              required
              style={{ marginBottom: "8px" }}
              label="Tên Đầy Đủ"
              rules={[
                validateRequireInput(
                  "Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên, ví dụ: Nguyễn Văn Trường. Vui lòng nhập thông tin"
                ),
                validateMaxLengthStr(
                  50,
                  "Vui lòng nhập thông tin đúng qui tắc: Độ dài không quá 50 ký tự"
                ),
              ]}
            >
              <Input type="text" placeholder="Nhập họ và tên" />
            </Item>
            <Item
              className="w-1/2"
              name="email"
              required
              style={{ marginBottom: "8px" }}
              label="Địa chỉ email"
              rules={[
                validateRequireInput("Vui lòng nhập email"),
                validateEmail("Vui lòng nhập đúng định dạng email"),
              ]}
            >
              <Input type="text" placeholder="Nhập email" />
            </Item>
          </div>

          <div className="flex gap-4 mt-4">
            <Item
              className="w-full "
              name="permissions"
              required
              style={{ marginBottom: "4px" }}
              rules={
                [
                  // validateRequireInput(tValidation('opt_isRequired', { field: 'cardDescription' })),
                  // validateMaxLengthStr(
                  // 	300,
                  // 	'Vui lòng nhập thông tin đúng qui tắc: Độ dài không quá 300 ký tự',
                  // ),
                ]
              }
            >
              <Select
                allowClear
                showArrow
                showSearch
                mode="multiple"
                className="w-full flex-1"
                placeholder="Chọn Nhóm Quyền"
                // onChange={onChangeSelect}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    label: "Supper Admin",
                    value: "Supper Admin",
                  },
                  {
                    label: "Admin",
                    value: "Admin",
                  },
                  {
                    label: "Nurse",
                    value: "Nurse",
                  },
                  {
                    label: "Doctor",
                    value: "Doctor",
                  },
                  {
                    label: "Technicians",
                    value: "Technicians",
                  },
                  {
                    label: "Receptionist",
                    value: "Receptionist",
                  },
                ]}
                autoFocus
              />
            </Item>
          </div>
        </div>

        {/* Save */}
        <div className="text-center my-4">
          <Button
            size="large"
            onClick={() => setEditAccount(false)}
            style={{
              width: "170px",
              marginRight: "10px",
              textAlign: "center",
            }}
          >
            Huỷ
          </Button>
          <Button
            size="large"
            type="primary"
            disabled={!isDirty}
            htmlType="submit"
            style={{
              width: "170px",
              marginLeft: "10px",
              textAlign: "center",
            }}
          >
            Xác nhận
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalEditAccount;
