import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { uniqueId } from "lodash";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import {
  validateEmail,
  validateMaxLengthStr,
  validateNumberInput,
  validatePassword,
  validatePhoneNumber,
  validateRequireInput,
} from "../../../App/validator";

const { Item } = Form;
const ModalPatient = ({
  setCreateAccount,
  form,
  dataTable,
  setDataTable,
  isModalVisible,
  setIsModalVisible,
  type,
  itemPatients,
}) => {
  const [isDirty, setIsDirty] = useState(false);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const [valueSelect, setValueSelect] = useState();

  const onChangeSelect = (value) => {
    setValueSelect(value);
  };

  useEffect(() => {
    if (type === "view" || type === "edit") {
      form.setFieldsValue(itemPatients);
    } else {
      form.setFieldsValue({});
    }
  }, [type]);
  const data = [
    {
      key: "1",
      province: "Hà Nội",
      district: [
        {
          id: "100",
          name: "Ba Đình",
        },
        {
          id: "101",
          name: "Hoàn Kiếm",
        },
        {
          id: "102",
          name: "Tây Hồ",
        },
        {
          id: "103",
          name: "Long Biên",
        },
        {
          id: "104",
          name: "Cầu Giấy",
        },
        {
          id: "105",
          name: "Đống Đa",
        },
        {
          id: "106",
          name: "Hai Bà Trưng",
        },
        {
          id: "107",
          name: "Từ Liêm",
        },
        {
          id: "108",
          name: "Thanh Trì",
        },
        {
          id: "109",
          name: "Mê Linh",
        },
        {
          id: "110",
          name: "Hà Đông",
        },
      ],
    },
    {
      key: "2",
      province: "Bắc Ninh",
      district: [
        {
          name: "Thuận Thành",
          id: "200",
        },
        {
          name: "Tiên Du",
          id: "201",
        },
        {
          name: "Quế Võ",
          id: "202",
        },
        {
          name: "Gia Bình",
          id: "203",
        },
        {
          name: "Lương Tài",
          id: "204",
        },
        {
          name: "Yên Phong",
          id: "205",
        },
        {
          name: "Tx Từ Sơn",
          id: "206",
        },
      ],
    },
    {
      province: "Vĩnh phúc",
      district: [
        {
          name: "Bình Xuyên",
          id: "300",
        },
        {
          name: "Vĩnh Tường",
          id: "301",
        },
        {
          name: "Tam Dương",
          id: "302",
        },
        {
          name: "Lập Thạch",
          id: "303",
        },
        {
          name: "Kim Anh",
          id: "304",
        },
        {
          name: "Đông Anh",
          id: "305",
        },
        {
          name: "Đa Phúc",
          id: "306",
        },
      ],
    },
    {
      key: "4",
      province: "Đà Nẵng",
      district: [],
    },
    {
      key: "5",
      province: "TP Hồ Chí Minh",
      district: [],
    },
    {
      key: "6",
      province: "Thái Nguyên",
      district: [],
    },
    {
      key: "7",
      province: "Hà Tĩnh",
      district: [],
    },
    {
      key: "8",
      province: "Nghệ An",
      district: [],
    },
  ];
  function ListProvince() {
    return [
      ...data.map((e) => ({
        label: e.province,
        value: e.province,
      })),
    ];
  }
  function ListDistrict() {
    const list = [];
    const findDistrict = data?.filter((e) => e.province === valueSelect);
    findDistrict[0]?.district?.map((e) =>
      list.push({
        label: e.name,
        value: e.name,
      })
    );
    return list;
  }
  const SelectCustom = styled(Select)`
    .ant-select-selection-item {
      color: black;
    }
  `;
  const FormCustom = styled(Form)`
    .ant-input.ant-input-disabled {
      color: black;
    }
    .ant-select-selection-item {
      color: black;
    }
  `;
  const canEdit = type === "edit" ? true : false;
  const canView = type === "view" ? true : false;
  return (
    <Modal
      open={isModalVisible}
      okButtonProps={{ disabled: !isDirty }}
      onCancel={() => setIsModalVisible(false)}
      onOk={() => setIsModalVisible(false)}
      centered
      closable={false}
      footer={null}
      okText="Xác nhận"
      cancelText="Huỷ"
      maskClosable
      width="80rem"
      bodyStyle={{
        padding: "2rem 1.9rem",
        maxHeight: "calc(100vh - 3rem)",
        overflow: "auto",
      }}
      destroyOnClose
    >
      <div className="mb-6">
        <div className="font-bold text-base justify-center flex mb-4 uppercase">
          {type === "view" && "Xem Thông tin bệnh nhân"}
          {type === "edit" && "Sửa Thông tin bệnh nhân"}
          {type === "create" && "Thêm bệnh nhân mới"}
        </div>
      </div>

      {type === "create" ? (
        <FormCustom
          onFinish={(value) => {
            console.log(value);
          }}
          onValuesChange={() => !isDirty && setIsDirty(true)}
          className="text-base grid gap-4"
          layout="vertical"
        >
          <div className="mx-4">
            <div className="flex items-center gap-4 ">
              <Item className="w-1/12" name="vocative" label="Ông/bà">
                <SelectCustom
                  allowClear
                  showArrow
                  disabled={canView}
                  showSearch
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1 text-black"
                  placeholder="Ông / Bà"
                  onChange={onChangeSelect}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Ông",
                      value: "Ông",
                    },
                    {
                      label: "Bà",
                      value: "Bà",
                    },
                  ]}
                  autoFocus
                />
              </Item>
              <Item
                className="w-1/3"
                name="name"
                required={!canView}
                label="Tên Đầy Đủ"
                rules={[
                  validateRequireInput(
                    "Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên"
                  ),
                  validateMaxLengthStr(
                    50,
                    "Vui lòng nhập thông tin đúng qui tắc: Độ dài không quá 50 ký tự"
                  ),
                ]}
              >
                <Input
                  disabled={canView}
                  type="text"
                  placeholder="Nhập họ và tên"
                />
              </Item>
              <Item
                className="w-1/3"
                name="email"
                required={!canView}
                label="Địa chỉ email"
                rules={[
                  validateRequireInput("Vui lòng nhập email"),
                  validateEmail("Vui lòng nhập đúng định dạng email"),
                ]}
              >
                <Input
                  disabled={canView}
                  type="text"
                  placeholder="Nhập email"
                />
              </Item>
              <Item
                className="w-1/3 "
                name="phone"
                required={!canView}
                label="Số điện thoại"
                rules={[
                  validateRequireInput("Vui lòng nhập số điện thoại"),
                  validatePhoneNumber(
                    "normal",
                    "Vui lòng nhập đúng định dạng SĐT"
                  ),
                ]}
              >
                <Input
                  disabled={canView}
                  type="number"
                  placeholder="Nhập số điện thoại"
                />
              </Item>
            </div>
            <div className="flex items-center gap-4 ">
              <Item
                className="w-1/4"
                name="cccd"
                required={!canView}
                label="Căn cước công dân"
                rules={[
                  validateRequireInput("Vui lòng nhập CCCD "),
                  validateNumberInput(),
                ]}
              >
                <Input
                  disabled={canView}
                  type="number"
                  placeholder="Nhập CCCD"
                />
              </Item>
              <Item className="w-2/12" name="job" label="Nghề nghiệp">
                <SelectCustom
                  allowClear
                  showArrow
                  showSearch
                  disabled={canView}
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Lựa chọn Nghề nghiệp"
                  onChange={onChangeSelect}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Nông dân",
                      value: "Nông dân",
                    },
                    {
                      label: "Bác sỹ",
                      value: "Bác sỹ",
                    },
                    {
                      label: "Giáo viên",
                      value: "Giáo viên",
                    },
                    {
                      label: "Học sinh / Sinh viên",
                      value: "Học Sinh / Sinh viên",
                    },
                    {
                      label: "Công an",
                      value: "Công an",
                    },
                    {
                      label: "Công nhân",
                      value: "Công nhân",
                    },
                  ]}
                  autoFocus
                />
              </Item>
              <Item className="w-2/12" name="sex" label="Giới tính">
                <SelectCustom
                  allowClear
                  showArrow
                  showSearch
                  disabled={canView}
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Giới tính"
                  onChange={onChangeSelect}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Nam",
                      value: "Nam",
                    },
                    {
                      label: "Nữ",
                      value: "Nữ",
                    },
                  ]}
                  autoFocus
                />
              </Item>
              <Item
                className="w-2/12 "
                name="dateBirth"
                required={!canView}
                disabled={canView}
                label="Năm sinh"
                rules={[validateRequireInput("Vui lòng chọn năm sinh")]}
              >
                <DatePicker
                  placeholder="Năm sinh"
                  disabled={canView}
                  size="normal"
                  format={dateFormatList}
                />
              </Item>
              <Item className="w-2/12" name="nationality" label="Quốc tịch">
                <SelectCustom
                  allowClear
                  showArrow
                  showSearch
                  disabled={canView}
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Quốc tịch"
                  onChange={onChangeSelect}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Việt Nam",
                      value: "Việt Nam",
                    },
                    {
                      label: "Nga",
                      value: "Nga",
                    },
                    {
                      label: "Lào",
                      value: "Lào",
                    },
                    {
                      label: "Campuchia",
                      value: "Campuchia",
                    },
                    {
                      label: "Cuba",
                      value: "Cuba",
                    },
                    {
                      label: "Thái Lan",
                      value: "Thái Lan",
                    },
                    {
                      label: "Hàn Quốc",
                      value: "Hàn Quốc",
                    },
                    {
                      label: "Trung Quốc",
                      value: "Trung Quốc",
                    },
                    {
                      label: "Khác",
                      value: "Khác",
                    },
                  ]}
                  autoFocus
                />
              </Item>
              <Item className="w-2/12" name="ethnic" label="Dân tộc">
                <SelectCustom
                  allowClear
                  showArrow
                  showSearch
                  disabled={canView}
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Dân tộc"
                  onChange={onChangeSelect}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Mường",
                      value: "Mường",
                    },
                    {
                      label: "Dao",
                      value: "Dao",
                    },
                    {
                      label: "Tày",
                      value: "Tày",
                    },
                    {
                      label: "H Mông",
                      value: "H Mông",
                    },
                    {
                      label: "Chăm",
                      value: "Chăm",
                    },
                    {
                      label: "Ê ĐÊ",
                      value: "Ê ĐÊ",
                    },
                    {
                      label: "Kinh",
                      value: "Kinh",
                    },
                  ]}
                  autoFocus
                />
              </Item>
            </div>
            <div className="flex items-center gap-4 ">
              {type === "view" ? (
                <>
                  <Item className="w-1/3" name="religion" label="Tôn giáo">
                    <Input
                      defaultValue="Không"
                      disabled={canView}
                      type="text"
                      placeholder="Tôn giáo"
                    />
                  </Item>
                  <Item className="w-2/3" name="address" label="Địa chỉ ">
                    <Input
                      disabled={canView}
                      type="text"
                      placeholder="Địa chỉ"
                    />
                  </Item>
                </>
              ) : (
                <>
                  <Item className="w-2/12" name="religion" label="Tôn giáo">
                    <Input
                      defaultValue="Không"
                      type="text"
                      placeholder="Tôn giáo"
                    />
                  </Item>
                  <Item
                    className="w-2/12 "
                    name="selectProvince"
                    required
                    label="Tỉnh / Thành phố"
                    rules={[validateRequireInput("Vui lòng chọn giá trị ")]}
                  >
                    <Select
                      allowClear
                      showArrow
                      showSearch
                      className="w-full flex-1"
                      placeholder="Chọn tỉnh / Thành phố"
                      onChange={onChangeSelect}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={ListProvince()}
                      autoFocus
                    />
                  </Item>
                  <Item
                    className="w-2/12 "
                    name="selectDistrict"
                    required
                    label="Quận / Huyện"
                    rules={[validateRequireInput("Vui lòng chọn giá trị")]}
                  >
                    <SelectCustom
                      allowClear
                      showArrow
                      showSearch
                      className="w-full flex-1"
                      placeholder="Quận huyện"
                      onChange={(value) => {
                        console.log(value);
                      }}
                      optionFilterProp="children"
                      // onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={ListDistrict()}
                      autoFocus
                    />
                  </Item>
                  <Item
                    className="w-2/12 "
                    name="selectCommune"
                    // required
                    label="Xã / Phường / Thị Trấn"
                    // rules={[validateRequireInput("Vui lòng chọn giá trị")]}
                  >
                    <SelectCustom
                      allowClear
                      showArrow
                      showSearch
                      className="w-full flex-1"
                      placeholder="Xã / Phường / Thị Trấn"
                      onChange={(value) => {
                        console.log(value);
                        // onChangeSelect();
                      }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      // options={ListDistrict()}
                      autoFocus
                    />
                  </Item>
                  <Item
                    className="w-1/3 "
                    name="selectVillage"
                    label="Tổ / Khu / Thôn / Xóm"
                  >
                    <Input type="text" placeholder="Địa chỉ nhà"></Input>
                  </Item>
                </>
              )}
            </div>
            <div className="flex items-center gap-4 ">
              <Item
                className="w-2/12"
                name="maritalStatus"
                label="Tình trạng hôn nhân"
              >
                <SelectCustom
                  allowClear
                  showArrow
                  disabled={canView}
                  showSearch
                  className="w-full flex-1"
                  placeholder="Độc thân"
                  onChange={onChangeSelect}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Độc thân",
                      value: "Độc thân",
                    },
                    {
                      label: "Có gia đình",
                      value: "Có gia đình",
                    },
                    {
                      label: "Ly hôn",
                      value: "Ly hôn",
                    },
                  ]}
                  autoFocus
                />
              </Item>
              <Item className="w-5/12" name="relatives" label="Người thân">
                <Input
                  disabled={canView}
                  type="text"
                  placeholder="Nhập tên người thân"
                />
              </Item>
              <Item
                className="w-5/12"
                name="addressRelative"
                label="Địa chỉ người thân"
              >
                <Input disabled={canView} type="text" placeholder="Địa chỉ" />
              </Item>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <Item
                className="w-1/6"
                name="phoneRelatives"
                label="Số điện thoại người thân"
              >
                <Input
                  disabled={canView}
                  type="number"
                  placeholder="Nhập số điện thoại"
                />
              </Item>
              <Item className="w-1/4" name="subject" label="Loại đối tượng">
                <SelectCustom
                  allowClear
                  showArrow
                  showSearch
                  disabled={canView}
                  className="w-full flex-1"
                  placeholder="Không"
                  onChange={onChangeSelect}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Không",
                      value: "Không",
                    },
                    {
                      label: "Bảo hiểm y tế",
                      value: "Bảo hiểm y tế",
                    },
                  ]}
                  autoFocus
                />
              </Item>
              <Item className="w-1/4" name="bhyt" label="Số thẻ bảo hiểm ý tế">
                <Input
                  disabled={canView}
                  type="number"
                  placeholder="Nhập số thẻ bảo hiểm y tế"
                />
              </Item>
              <Item
                className="w-1/3"
                name="expiryBHYT"
                label="BHYT có giá trị đến ngày"
              >
                <DatePicker
                  className="w-full flex-1"
                  disabled={canView}
                  placeholder="dd/mm/yyyy"
                  size="normal"
                  format={dateFormatList}
                />
              </Item>
            </div>
          </div>

          {/* Save */}
          <div className="text-center my-4">
            {type === "view" ? (
              <Button
                size="large"
                onClick={() => setIsModalVisible(false)}
                style={{
                  width: "170px",
                  marginRight: "10px",
                  textAlign: "center",
                }}
              >
                Đóng
              </Button>
            ) : (
              <>
                <Button
                  size="large"
                  onClick={() => setIsModalVisible(false)}
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
              </>
            )}
          </div>
        </FormCustom>
      ) : (
        <FormCustom
          form={form}
          onFinish={(value) => {
            console.log(value);
          }}
          onValuesChange={() => !isDirty && setIsDirty(true)}
          className="text-base grid gap-4"
          layout="vertical"
        >
          <div className="mx-4">
            <div className="flex items-center gap-4 ">
              <Item className="w-1/12" name="vocative" label="Ông/bà">
                <SelectCustom
                  allowClear
                  showArrow
                  disabled={canView}
                  showSearch
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1 text-black"
                  placeholder="Ông / Bà"
                  onChange={onChangeSelect}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Ông",
                      value: "Ông",
                    },
                    {
                      label: "Bà",
                      value: "Bà",
                    },
                  ]}
                  autoFocus
                />
              </Item>
              <Item
                className="w-1/3"
                name="name"
                required={!canView}
                label="Tên Đầy Đủ"
                rules={[
                  validateRequireInput(
                    "Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên"
                  ),
                  validateMaxLengthStr(
                    50,
                    "Vui lòng nhập thông tin đúng qui tắc: Độ dài không quá 50 ký tự"
                  ),
                ]}
              >
                <Input
                  disabled={canView}
                  type="text"
                  placeholder="Nhập họ và tên"
                />
              </Item>
              <Item
                className="w-1/3"
                name="email"
                required={!canView}
                label="Địa chỉ email"
                rules={[
                  validateRequireInput("Vui lòng nhập email"),
                  validateEmail("Vui lòng nhập đúng định dạng email"),
                ]}
              >
                <Input
                  disabled={canView}
                  type="text"
                  placeholder="Nhập email"
                />
              </Item>
              <Item
                className="w-1/3 "
                name="phone"
                required={!canView}
                label="Số điện thoại"
                rules={[
                  validateRequireInput("Vui lòng nhập số điện thoại"),
                  validatePhoneNumber(
                    "normal",
                    "Vui lòng nhập đúng định dạng SĐT"
                  ),
                ]}
              >
                <Input
                  disabled={canView}
                  type="number"
                  placeholder="Nhập số điện thoại"
                />
              </Item>
            </div>
            <div className="flex items-center gap-4 ">
              <Item
                className="w-1/4"
                name="cccd"
                required={!canView}
                label="Căn cước công dân"
                rules={[
                  validateRequireInput("Vui lòng nhập CCCD "),
                  validateNumberInput(),
                ]}
              >
                <Input
                  disabled={canView}
                  type="number"
                  placeholder="Nhập CCCD"
                />
              </Item>
              <Item className="w-2/12" name="job" label="Nghề nghiệp">
                <SelectCustom
                  allowClear
                  showArrow
                  showSearch
                  disabled={canView}
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Lựa chọn Nghề nghiệp"
                  onChange={onChangeSelect}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Nông dân",
                      value: "Nông dân",
                    },
                    {
                      label: "Bác sỹ",
                      value: "Bác sỹ",
                    },
                    {
                      label: "Giáo viên",
                      value: "Giáo viên",
                    },
                    {
                      label: "Học sinh / Sinh viên",
                      value: "Học Sinh / Sinh viên",
                    },
                    {
                      label: "Công an",
                      value: "Công an",
                    },
                    {
                      label: "Công nhân",
                      value: "Công nhân",
                    },
                  ]}
                  autoFocus
                />
              </Item>
              <Item className="w-2/12" name="sex" label="Giới tính">
                <SelectCustom
                  allowClear
                  showArrow
                  showSearch
                  disabled={canView}
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Giới tính"
                  onChange={onChangeSelect}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Nam",
                      value: "Nam",
                    },
                    {
                      label: "Nữ",
                      value: "Nữ",
                    },
                  ]}
                  autoFocus
                />
              </Item>
              <Item
                className="w-2/12 "
                name="dateBirth"
                required={!canView}
                disabled={canView}
                label="Năm sinh"
                rules={[validateRequireInput("Vui lòng chọn năm sinh")]}
              >
                <DatePicker
                  placeholder="Năm sinh"
                  disabled={canView}
                  size="normal"
                  format={dateFormatList}
                />
              </Item>
              <Item className="w-2/12" name="nationality" label="Quốc tịch">
                <SelectCustom
                  allowClear
                  showArrow
                  showSearch
                  disabled={canView}
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Quốc tịch"
                  onChange={onChangeSelect}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Việt Nam",
                      value: "Việt Nam",
                    },
                    {
                      label: "Nga",
                      value: "Nga",
                    },
                    {
                      label: "Lào",
                      value: "Lào",
                    },
                    {
                      label: "Campuchia",
                      value: "Campuchia",
                    },
                    {
                      label: "Cuba",
                      value: "Cuba",
                    },
                    {
                      label: "Thái Lan",
                      value: "Thái Lan",
                    },
                    {
                      label: "Hàn Quốc",
                      value: "Hàn Quốc",
                    },
                    {
                      label: "Trung Quốc",
                      value: "Trung Quốc",
                    },
                    {
                      label: "Khác",
                      value: "Khác",
                    },
                  ]}
                  autoFocus
                />
              </Item>
              <Item className="w-2/12" name="ethnic" label="Dân tộc">
                <SelectCustom
                  allowClear
                  showArrow
                  showSearch
                  disabled={canView}
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Dân tộc"
                  onChange={onChangeSelect}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Mường",
                      value: "Mường",
                    },
                    {
                      label: "Dao",
                      value: "Dao",
                    },
                    {
                      label: "Tày",
                      value: "Tày",
                    },
                    {
                      label: "H Mông",
                      value: "H Mông",
                    },
                    {
                      label: "Chăm",
                      value: "Chăm",
                    },
                    {
                      label: "Ê ĐÊ",
                      value: "Ê ĐÊ",
                    },
                    {
                      label: "Kinh",
                      value: "Kinh",
                    },
                  ]}
                  autoFocus
                />
              </Item>
            </div>
            <div className="flex items-center gap-4 ">
              {type === "view" ? (
                <>
                  <Item className="w-1/3" name="religion" label="Tôn giáo">
                    <Input
                      defaultValue="Không"
                      disabled={canView}
                      type="text"
                      placeholder="Tôn giáo"
                    />
                  </Item>
                  <Item className="w-2/3" name="address" label="Địa chỉ ">
                    <Input
                      disabled={canView}
                      type="text"
                      placeholder="Địa chỉ"
                    />
                  </Item>
                </>
              ) : (
                <>
                  <Item className="w-2/12" name="religion" label="Tôn giáo">
                    <Input
                      defaultValue="Không"
                      type="text"
                      placeholder="Tôn giáo"
                    />
                  </Item>
                  <Item
                    className="w-2/12 "
                    name="selectProvince"
                    required
                    label="Tỉnh / Thành phố"
                    rules={[validateRequireInput("Vui lòng chọn giá trị ")]}
                  >
                    <Select
                      allowClear
                      showArrow
                      showSearch
                      className="w-full flex-1"
                      placeholder="Chọn tỉnh / Thành phố"
                      onChange={onChangeSelect}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={ListProvince()}
                      autoFocus
                    />
                  </Item>
                  <Item
                    className="w-2/12 "
                    name="selectDistrict"
                    required
                    label="Quận / Huyện"
                    rules={[validateRequireInput("Vui lòng chọn giá trị")]}
                  >
                    <SelectCustom
                      allowClear
                      showArrow
                      showSearch
                      className="w-full flex-1"
                      placeholder="Quận huyện"
                      onChange={(value) => {
                        console.log(value);
                      }}
                      optionFilterProp="children"
                      // onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={ListDistrict()}
                      autoFocus
                    />
                  </Item>
                  <Item
                    className="w-2/12 "
                    name="selectCommune"
                    // required
                    label="Xã / Phường / Thị Trấn"
                    // rules={[validateRequireInput("Vui lòng chọn giá trị")]}
                  >
                    <SelectCustom
                      allowClear
                      showArrow
                      showSearch
                      className="w-full flex-1"
                      placeholder="Xã / Phường / Thị Trấn"
                      onChange={(value) => {
                        console.log(value);
                        // onChangeSelect();
                      }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      // options={ListDistrict()}
                      autoFocus
                    />
                  </Item>
                  <Item
                    className="w-1/3 "
                    name="selectVillage"
                    label="Tổ / Khu / Thôn / Xóm"
                  >
                    <Input type="text" placeholder="Địa chỉ nhà"></Input>
                  </Item>
                </>
              )}
            </div>
            <div className="flex items-center gap-4 ">
              <Item
                className="w-2/12"
                name="maritalStatus"
                label="Tình trạng hôn nhân"
              >
                <SelectCustom
                  allowClear
                  showArrow
                  disabled={canView}
                  showSearch
                  className="w-full flex-1"
                  placeholder="Độc thân"
                  onChange={onChangeSelect}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Độc thân",
                      value: "Độc thân",
                    },
                    {
                      label: "Có gia đình",
                      value: "Có gia đình",
                    },
                    {
                      label: "Ly hôn",
                      value: "Ly hôn",
                    },
                  ]}
                  autoFocus
                />
              </Item>
              <Item className="w-5/12" name="relatives" label="Người thân">
                <Input
                  disabled={canView}
                  type="text"
                  placeholder="Nhập tên người thân"
                />
              </Item>
              <Item
                className="w-5/12"
                name="addressRelative"
                label="Địa chỉ người thân"
              >
                <Input disabled={canView} type="text" placeholder="Địa chỉ" />
              </Item>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <Item
                className="w-1/6"
                name="phoneRelatives"
                label="Số điện thoại người thân"
              >
                <Input
                  disabled={canView}
                  type="number"
                  placeholder="Nhập số điện thoại"
                />
              </Item>
              <Item className="w-1/4" name="subject" label="Loại đối tượng">
                <SelectCustom
                  allowClear
                  showArrow
                  showSearch
                  disabled={canView}
                  className="w-full flex-1"
                  placeholder="Không"
                  onChange={onChangeSelect}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Không",
                      value: "Không",
                    },
                    {
                      label: "Bảo hiểm y tế",
                      value: "Bảo hiểm y tế",
                    },
                  ]}
                  autoFocus
                />
              </Item>
              <Item className="w-1/4" name="bhyt" label="Số thẻ bảo hiểm ý tế">
                <Input
                  disabled={canView}
                  type="number"
                  placeholder="Nhập số thẻ bảo hiểm y tế"
                />
              </Item>
              <Item
                className="w-1/3"
                name="expiryBHYT"
                label="BHYT có giá trị đến ngày"
              >
                <DatePicker
                  className="w-full flex-1"
                  disabled={canView}
                  placeholder="dd/mm/yyyy"
                  size="normal"
                  format={dateFormatList}
                />
              </Item>
            </div>
          </div>

          {/* Save */}
          <div className="text-center my-4">
            {type === "view" ? (
              <Button
                size="large"
                onClick={() => setIsModalVisible(false)}
                style={{
                  width: "170px",
                  marginRight: "10px",
                  textAlign: "center",
                }}
              >
                Đóng
              </Button>
            ) : (
              <>
                <Button
                  size="large"
                  onClick={() => setIsModalVisible(false)}
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
              </>
            )}
          </div>
        </FormCustom>
      )}
      {}
    </Modal>
  );
};

export default ModalPatient;
