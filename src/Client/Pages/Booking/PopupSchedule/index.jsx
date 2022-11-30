import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  message,
  Modal,
  Radio,
  Select,
} from "antd";
import moment from "moment";

import React, { useState } from "react";
import {
  validateMaxLengthStr,
  validatePhoneNumber,
  validateRequireInput,
} from "../../../../App/validator";

const { Item } = Form;
const { TextArea } = Input;
const PopUpSchedule = ({
  isSchedule,
  setIsSchedule,
  timeSchedule,
  hoursSchedule,
}) => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const [valueRadio, setValueRadio] = useState(1);
  const [valueSelect, setValueSelect] = useState();
  const [isDirty, setIsDirty] = useState(false);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValueRadio(e.target.value);
  };
  const onChangeSelect = (value) => {
    setValueSelect(value);
  };
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
  function onFinish(values) {
    console.log(values);
    setIsDirty(false);
    setIsSchedule(false);
  }
  return (
    <Modal
      visible={isSchedule}
      okButtonProps={{ disabled: !isDirty }}
      onCancel={() => setIsSchedule(false)}
      centered
      closable={false}
      footer={null}
      okText="Xác nhận"
      cancelText="Huỷ"
      maskClosable
      width="50rem"
      bodyStyle={{
        padding: "2rem 1.9rem",
        maxHeight: "calc(100vh - 3rem)",
        overflow: "auto",
      }}
      destroyOnClose
    >
      <div className="mb-6">
        <div className="font-bold text-base justify-center flex mb-4 uppercase">
          Đặt lịch khám
        </div>
        <div className="flex items-center ">
          <div className="mr-6">
            <a href="#">
              <img
                src="https://cdn.bookingcare.vn/fr/w100/2019/12/31/155650-gs-ha-van-quyet.jpg"
                alt="Giáo sư, Tiến sĩ Hà Văn Quyết"
              />
            </a>
          </div>
          <div className="mot-bs-soluoc">
            <h1>Đặt lịch khám</h1>
            <h2 className="mot-bs-ten">
              <a href="#"> Giáo sư, Tiến sĩ Hà Văn Quyết </a>
            </h2>
            <div className="uppercase">
              {" "}
              {hoursSchedule} -{" "}
              {moment(timeSchedule).format("dddd - DD/MM/YYYY")}{" "}
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-5 w-[200px] text-center"
        style={{ background: "rgba(0,0,0,0.1)", borderRadius: "10px" }}
      >
        <label className="">
          <input type="radio" checked="checked" name="price" value="134" />
          <span>Khám, tư vấn &amp; phương án điều trị</span>
          <div>Giá khám: 400.000đ</div>
        </label>
      </div>
      <Form
        onFinish={(value) => {
          onFinish(value);
        }}
        onValuesChange={() => !isDirty && setIsDirty(true)}
        className="text-base grid gap-4"
        layout="vertical"
      >
        <div className="mt-4">
          <Radio.Group onChange={onChange} value={valueRadio}>
            <Radio value={1}>Đặt cho mình</Radio>
            <Radio value={2}>Đặt cho người thân</Radio>
          </Radio.Group>
        </div>
        {valueRadio === 1 && (
          <div className="mx-4">
            <div className="flex gap-4 ">
              <Item
                className="w-full"
                name="name"
                required
                style={{ marginBottom: "8px" }}
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
                <Input type="text" placeholder="Họ tên bệnh nhân (bắt buộc)" />
              </Item>
            </div>
            <div className="flex gap-4 ">
              <Item
                className="w-full"
                name="sex"
                required
                style={{ marginBottom: "8px" }}
              >
                <Radio.Group>
                  <Radio value={"male"}>Nam</Radio>
                  <Radio value={"female"}>Nữ</Radio>
                </Radio.Group>
              </Item>
            </div>
            <div className="flex gap-4 mt-4">
              <Item
                className="w-full "
                name="phone"
                required
                style={{ marginBottom: "4px" }}
                rules={[
                  validateRequireInput("Vui lòng nhập số điện thoại"),
                  validatePhoneNumber(
                    "normal",
                    "Vui lòng nhập đúng định dạng SĐT"
                  ),
                ]}
              >
                <Input
                  type="number"
                  placeholder="Nhập số điện thoại ( bắt buộc )"
                />
              </Item>
            </div>
            <div className="flex gap-4 mt-4">
              <Item
                className="w-full "
                name="dateBirth"
                required
                style={{ marginBottom: "4px" }}
              >
                <DatePicker
                  placeholder="Năm sinh"
                  size="large"
                  format={dateFormatList}
                />
              </Item>
            </div>
            <div className="flex gap-4 mt-4">
              <Item
                className="w-full "
                name="selectProvince"
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
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Chọn tỉnh / Thành phố"
                  onChange={onChangeSelect}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={ListProvince()}
                  autoFocus
                />
              </Item>
            </div>
            <div className="flex gap-4 mt-4">
              <Item
                className="w-full "
                name="selectDistrict"
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
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Quận huyện"
                  onChange={(value) => {
                    console.log(value);
                    // onChangeSelect();
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
            </div>
            <div className="flex gap-4 mt-4">
              <Item
                className="w-full "
                name="selectCommune"
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
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Xã / Phường / Thị Trấn"
                  onChange={(value) => {
                    console.log(value);
                    // onChangeSelect();
                  }}
                  optionFilterProp="children"
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  // options={ListDistrict()}
                  autoFocus
                />
              </Item>
            </div>
            <div className="flex gap-4 mt-4">
              <Item
                className="w-full "
                name="selectVillage"
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
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Tổ / Khu / Thôn / Xóm"
                  onChange={(value) => {
                    console.log(value);
                    // onChangeSelect();
                  }}
                  optionFilterProp="children"
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  // options={ListDistrict()}
                  autoFocus
                />
              </Item>
            </div>
            <div className="flex gap-4 mt-4">
              <Item
                className="w-full "
                name="reasonExamination"
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
                <TextArea rows={4} placeholder="Lý do khám" />
              </Item>
            </div>
            <div className="pt-5 text-start">
              <label className="">
                <input type="radio" checked="checked" name="price" value="" />
                <span>Thanh toán sau tại cơ sở khám bệnh</span>
              </label>
            </div>
            <div
              className="flex flex-col p-5 mt-4 "
              style={{ borderRadius: "10px", background: "#F6F6F6" }}
            >
              <div className="flex flex-row items-center justify-between text-base mb-2">
                <div>Giá khám</div>
                <div id="thanhtoan-giakham">400.000đ</div>
              </div>
              <div className="flex flex-row items-center justify-between text-base">
                <div>Phí đặt lịch</div>
                <div id="thanhtoan-phidatlich">Miễn phí</div>
              </div>
              <Divider style={{ margin: "12px 0px" }} />
              <div className="flex flex-row items-center justify-between text-base">
                <div>Tổng cộng</div>
                <div className="text-red-600">400.000đ</div>
              </div>
            </div>
            <p className="mt-2 text-center text-sm text-gray-60">
              Quý khách vui lòng điền đầy đủ thông tin để tiết kiệm thời gian
              làm thủ tục khám
            </p>
            <div className="p-5 bg-[#D4EFFC]">
              <p>
                <b>LƯU Ý</b>
              </p>
              <p>
                1. Thông tin anh/chị cung cấp sẽ được sử dụng làm hồ sơ khám
                bệnh, khi điền thông tin anh/chị vui lòng:
              </p>
              <ul>
                <li>
                  - Ghi rõ họ và tên, viết hoa những chữ cái đầu tiên, ví dụ:
                  <b> Nguyễn Văn Trường&nbsp;</b>
                </li>
                <li>
                  - Điền đầy đủ, đúng và vui lòng kiểm tra lại thông tin trước
                  khi ấn "Xác nhận"
                </li>
              </ul>
              <p>
                2. Anh/chị vui lòng tuân thủ quy định phòng chống dịch (đeo khẩu
                trang, khử khuẩn, khai báo dịch tễ) khi đến khám.
              </p>
            </div>
          </div>
        )}
        {valueRadio === 2 && (
          <div className="mx-4">
            <div className="flex gap-4 ">
              <Item
                className="w-full"
                name="name"
                required
                style={{ marginBottom: "8px" }}
                label={"Thông tin người đặt lịch"}
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
                <Input type="text" placeholder="Họ tên người đặt lịch" />
              </Item>
            </div>
            <div className="flex gap-4 ">
              <Item
                className="w-full"
                name="phone"
                required
                style={{ marginBottom: "8px" }}
                rules={[
                  validateRequireInput("Vui lòng nhập số điện thoại"),
                  validatePhoneNumber(
                    "normal",
                    "Vui lòng nhập đúng định dạng SĐT"
                  ),
                ]}
              >
                <Input type="number" placeholder="Số điện thoại liên hệ" />
              </Item>
            </div>
            <div className="flex gap-4 ">
              <Item
                className="w-full"
                name="name"
                required
                style={{ marginBottom: "8px" }}
                label={"Thông tin bệnh nhân"}
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
                <Input type="text" placeholder="Họ tên bệnh nhân" />
              </Item>
            </div>
            <div className="flex gap-4 ">
              <Radio.Group>
                <Radio value={3}>Nam</Radio>
                <Radio value={4}>Nữ</Radio>
              </Radio.Group>
            </div>
            <div className="flex gap-4 mt-4">
              <Item
                className="w-full "
                name="description"
                required
                style={{ marginBottom: "4px" }}
                rules={[
                  validateRequireInput("Vui lòng nhập số điện thoại"),
                  validatePhoneNumber(
                    "normal",
                    "Vui lòng nhập đúng định dạng SĐT"
                  ),
                ]}
              >
                <Input
                  type="number"
                  placeholder="Nhập số điện thoại bệnh nhân"
                />
              </Item>
            </div>
            <div className="flex gap-4 mt-4">
              <Item
                className="w-full "
                name="dateBirth1"
                required
                style={{ marginBottom: "4px" }}
              >
                <DatePicker
                  placeholder="Năm sinh"
                  size="large"
                  format={dateFormatList}
                />
              </Item>
            </div>
            <div className="flex gap-4 mt-4">
              <Select
                allowClear
                showArrow
                showSearch
                // suffixIcon={<SearchIcon />}
                className="w-full flex-1"
                placeholder="Chọn tỉnh / Thành phố"
                onChange={onChangeSelect}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={ListProvince()}
                autoFocus
              />
            </div>
            <div className="flex gap-4 mt-4">
              <Select
                allowClear
                showArrow
                showSearch
                // suffixIcon={<SearchIcon />}
                className="w-full flex-1"
                placeholder="Quận huyện"
                onChange={(value) => {
                  console.log(value);
                  // onChangeSelect();
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
            </div>
            <div className="flex gap-4 mt-4">
              <Select
                allowClear
                showArrow
                showSearch
                // suffixIcon={<SearchIcon />}
                className="w-full flex-1"
                placeholder="Xã / Phường / Thị Trấn"
                onChange={(value) => {
                  console.log(value);
                  // onChangeSelect();
                }}
                optionFilterProp="children"
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                // options={ListDistrict()}
                autoFocus
              />
            </div>
            <div className="flex gap-4 mt-4">
              <Select
                allowClear
                showArrow
                showSearch
                // suffixIcon={<SearchIcon />}
                className="w-full flex-1"
                placeholder="Tổ / Khu / Thôn / Xóm"
                onChange={(value) => {
                  console.log(value);
                  // onChangeSelect();
                }}
                optionFilterProp="children"
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                // options={ListDistrict()}
                autoFocus
              />
            </div>
            <div className="flex gap-4 mt-4">
              <TextArea rows={4} placeholder="Lý do khám" />
            </div>
            <div className="pt-5 text-start">
              <label className="">
                <input type="radio" checked="checked" name="price" value="" />
                <span>Thanh toán sau tại cơ sở khám bệnh</span>
              </label>
            </div>
            <div
              className="flex flex-col p-5 mt-4 "
              style={{ borderRadius: "10px", background: "#F6F6F6" }}
            >
              <div className="flex flex-row items-center justify-between text-base mb-2">
                <div>Giá khám</div>
                <div id="thanhtoan-giakham">400.000đ</div>
              </div>
              <div className="flex flex-row items-center justify-between text-base">
                <div>Phí đặt lịch</div>
                <div id="thanhtoan-phidatlich">Miễn phí</div>
              </div>
              <Divider style={{ margin: "12px 0px" }} />
              <div className="flex flex-row items-center justify-between text-base">
                <div>Tổng cộng</div>
                <div className="text-red-600">400.000đ</div>
              </div>
            </div>
            <p className="mt-2 text-center text-sm text-gray-60">
              Quý khách vui lòng điền đầy đủ thông tin để tiết kiệm thời gian
              làm thủ tục khám
            </p>
            <div className="p-5 bg-[#D4EFFC]">
              <p>
                <b>LƯU Ý</b>
              </p>
              <p>
                1. Thông tin anh/chị cung cấp sẽ được sử dụng làm hồ sơ khám
                bệnh, khi điền thông tin anh/chị vui lòng:
              </p>
              <ul>
                <li>
                  - Ghi rõ họ và tên, viết hoa những chữ cái đầu tiên, ví dụ:
                  <b> Nguyễn Văn Trường&nbsp;</b>
                </li>
                <li>
                  - Điền đầy đủ, đúng và vui lòng kiểm tra lại thông tin trước
                  khi ấn "Xác nhận"
                </li>
              </ul>
              <p>
                2. Anh/chị vui lòng tuân thủ quy định phòng chống dịch (đeo khẩu
                trang, khử khuẩn, khai báo dịch tễ) khi đến khám.
              </p>
            </div>
          </div>
        )}
        {/* Save */}
        <div className="text-center my-4">
          <Button
            size="large"
            onClick={() => setIsSchedule(false)}
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

export default PopUpSchedule;
