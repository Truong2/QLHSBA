import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer, Form, Input, Modal, Radio, Tree } from "antd";
import { trim } from "lodash";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { validateRequireInput } from "../../../App/validator";

const treeData = [
  {
    title: "Quản lý hành chính bệnh nhân",
    key: "0-0",
    children: [
      {
        title: "Thêm bệnh nhân",
        key: "0-0-0",
      },
      {
        title: "Chỉnh sửa bệnh nhân",
        key: "0-0-1",
      },
      {
        title: "Xoá bệnh nhân",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "Quản lý khám lâm sàng",
    key: "0-1",
    children: [
      {
        title: "Thêm quá trình khám lâm sàng",
        key: "0-1-0-0",
      },
      {
        title: "Sửa quá trình khám lâm sàng",
        key: "0-1-0-1",
      },
      {
        title: "Xoá quá trình khám lâm sàng",
        key: "0-1-0-2",
      },
    ],
  },
  {
    title: "Quản lý cận lâm sàng",
    key: "0-2",
    children: [
      {
        title: "Thêm quá trình khám cận lâm sàng",
        key: "0-2-0",
      },
      {
        title: "Chỉnh sửa quá trình khám cận lâm sàng",
        key: "0-2-1",
      },
      {
        title: "Xoá quá trình khám cận lâm sàng",
        key: "0-2-2",
      },
    ],
  },
  {
    title: "Quản lý hồ sơ bệnh án",
    key: "0-3",
    children: [
      {
        title: "Sửa hồ sơ bệnh án",
        key: "0-3-1",
      },
      {
        title: "Xoá hồ sơ bệnh án",
        key: "0-3-2",
      },
    ],
  },
  {
    title: "Quản lý thuốc",
    key: "0-4",
    children: [
      {
        title: "Thêm danh mục thuốc",
        key: "0-4-1",
      },
      {
        title: "Sửa danh mục thuốc",
        key: "0-4-2",
      },
      {
        title: "Xoá danh mục thuốc",
        key: "0-4-3",
      },
    ],
  },
  {
    title: "Quản lý lịch hẹn",
    key: "0-5",
    children: [
      {
        title: "Thêm lịch hẹn",
        key: "0-5-1",
      },
      {
        title: "Sửa lịch hẹn",
        key: "0-5-2",
      },
      {
        title: "Xoá lịch hẹn",
        key: "0-5-3",
      },
      {
        title: "Huỷ lịch hẹn",
        key: "0-5-4",
      },
    ],
  },
  //   {
  //     title: "Quản lý tài khoản",
  //     key: "0-6",
  //     children: [
  //       {
  //         title: "Thêm tài khoản ",
  //         key: "0-5-1",
  //       },
  //       {
  //         title: "Xoá tài khoản",
  //         key: "0-5-2",
  //       },
  //       {
  //         title: "Xoá lịch hẹn",
  //         key: "0-5-3",
  //       },
  //       {
  //         title: "Huỷ lịch hẹn",
  //         key: "0-5-4",
  //       },
  //     ],
  //   },
];

const DrawerFormRole = ({
  type,
  form,
  refetch,
  unitInfo,
  closeForm,
  isModalVisible,
  canEdit,
  itemForm,
}) => {
  const [isDirty, setDirty] = useState(false);
  const nameRef = React.useRef();

  useEffect(() => {
    setDirty(false);

    if (isModalVisible && type === "add") {
      form.setFieldsValue({
        status: "ACTIVE",
      });
    }
    if (isModalVisible && type === "edit") {
      form.setFieldsValue({
        displayName: itemForm.permissions,
        status: itemForm.status,
      });
    }
    if (isModalVisible && nameRef?.current) {
      setTimeout(() => {
        nameRef.current.focus({
          cursor: "end",
        });
      }, 50);
    }
  }, [isModalVisible, type]);

  const onFinish = (values) => {
    // Add parent tree
    const parentKey = treeData.map((x) => x.key);
    // eslint-disable-next-line no-param-reassign
    values.permissions = [...values.permissions, ...parentKey];
  };
  function onFormChange() {
    let dirty;
    if (type === "add") {
      if (trim(form.getFieldValue("displayName"))) {
        dirty = true;
      } else dirty = false;
    } else if (trim(form.getFieldValue("displayName"))) dirty = true;
    else dirty = false;
    if (!dirty) {
      form.setFields([
        {
          name: "status",
          errors: [],
        },
      ]);
    }
    setDirty(dirty);
  }
  const onCancelForm = () => {
    Modal.confirm({
      title: "Bạn có chắc chắn muốn hủy thay đổi?",
      icon: <ExclamationCircleOutlined />,
      okText: "Hủy",
      cancelText: "Không",
      onOk: () => {
        closeForm();
      },
    });
  };
  return (
    <div>
      <Drawer
        title={type === "add" ? "Thêm mới" : "Chỉnh sửa vai trò"}
        width={650}
        onClose={closeForm}
        visible={isModalVisible}
        maskClosable={false}
        footer={
          canEdit && (
            <div className="text-right mr-2">
              <Button onClick={onCancelForm}>Hủy</Button>
              <Button
                htmlType="submit"
                type="primary"
                onClick={() => form.submit()}
                disabled={!isDirty}
                // loading={type === 'add' ? addMutation.isLoading : updateMutation.isLoading}
                className="ml-4"
              >
                {type === "add" ? "Thêm mới" : "Lưu"}
              </Button>
            </div>
          )
        }
      >
        {isModalVisible ? (
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onValuesChange={() => !isDirty && setDirty(true)}
            autoComplete="off"
            disabled={!canEdit}
          >
            <Form.Item
              name="displayName"
              label="Tên nhóm quyền"
              rules={[
                validateRequireInput("Tên Nhóm quyền không được bỏ trống"),
              ]}
            >
              <Input
                ref={nameRef}
                disabled={!canEdit}
                placeholder="Vai trò"
                maxLength={50}
              />
            </Form.Item>

            <Form.Item name="status" label="Trạng thái" onchage>
              <Radio.Group>
                <Radio disabled={!canEdit} value="ACTIVE">
                  Hoạt động
                </Radio>
                <Radio disabled={!canEdit} value="INACTIVE">
                  Không hoạt động
                </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="portalType">
              <Divider />
              <div className="text-base">Danh sách nhóm quyền: </div>
            </Form.Item>
            <Form.Item name="permissions">
              <Tree
                disabled={!canEdit}
                checkable
                selectable={false}
                // onCheck={onCheck}
                defaultCheckedKeys={true}
                treeData={treeData}
              />
            </Form.Item>
          </Form>
        ) : null}
      </Drawer>
    </div>
  );
};

export default DrawerFormRole;
