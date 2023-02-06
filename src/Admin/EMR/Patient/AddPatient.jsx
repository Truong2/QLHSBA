import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Spin,
  Upload,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  validateEmail,
  validateMaxLengthStr,
  validatePhoneNumber,
  validateRequireInput,
} from "../../../App/validator";
import { ConsoleSqlOutlined, UploadOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import UrlBreadcrumb from "../../common/utils/UrlBreadcrumb";
const { Item } = Form;

const AddPatient = ({ edit = false }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();
  const dateFormatList = ["DD/MM/YYYY"];
  const [valueSelect, setValueSelect] = useState();
  const [valueForm, setValueForm] = useState();
  const [isModalConfirm, setIsModalConfirm] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const onChangeSelect = (value) => {
    setValueSelect(value);
  };

  async function fetchingPosts(dataForm) {
    await axios.post(
      "https://639fed457aaf11ceb8a35215.mockapi.io/api/emr/patient",
      dataForm
    );
  }
  async function fetchingPut(dataForm) {
    await axios.put(
      `https://639fed457aaf11ceb8a35215.mockapi.io/api/emr/patient/${id}`,
      dataForm
    );
  }
  const { isFetching } = useQuery(
    ["getPatientDetails"],
    async () => {
      const response = await axios.get(
        `https://639fed457aaf11ceb8a35215.mockapi.io/api/emr/patient/${id}`
      );
      if (edit) {
        form.setFieldsValue({
          ...response?.data,
          birth: moment(response?.data?.birth),
          dayIn: moment(response?.data?.dayIn),
          timeHospitalize: moment(response?.data?.timeHospitalize),
        });
      }
    },
    {
      initialData: [],
      onError: (e) => {},
    }
  );

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
  return (
    <>
      <UrlBreadcrumb
        type={edit ? "patientEdit" : "patientCreate"}
        style={{ margin: "20px" }}
      />
      <Spin spinning={edit && isFetching}>
        <div className="p-3">
          <div className="rounded h-full w-full mt-4 p-3 bg-white">
            <div className="fz-16 ml-40">Thông tin bệnh nhân</div>
            <div className="rounded h-full w-full mt-4">
              <Form
                form={form}
                onFinish={(value) => {
                  setValueForm(value);
                  console.log(value);
                }}
                onValuesChange={() => !isDirty && setIsDirty(true)}
                className="text-base "
                layout="horizontal"
              >
                <div className="mx-2">
                  <Item
                    className="w-full flex-1"
                    name="avatar"
                    label=<span className="ml-2 text-start w-32 ">Ảnh</span>
                  >
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture"
                    >
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Item>
                </div>
                <div className="mx-4 grid gap-4 grid-cols-3">
                  <div className="flex flex-col items-start  ">
                    <Item
                      className="w-full flex-1"
                      name="name"
                      label=<span className="text-start w-32 ">
                        Tên bệnh nhân
                      </span>
                      required
                      rules={[
                        validateRequireInput("Hãy ghi rõ Họ Và Tên"),
                        validateMaxLengthStr(
                          50,
                          "Vui lòng nhập thông tin đúng qui tắc: Độ dài không quá 50 ký tự"
                        ),
                      ]}
                    >
                      <Input type="text" placeholder="Nhập họ và tên" />
                    </Item>
                    <Item
                      className="w-full flex-1"
                      name="healthInsurance"
                      label=<span className="text-start w-32 ">
                        Số thẻ bảo hiểm ý tế
                      </span>
                      required
                      rules={[
                        validateRequireInput(
                          "Vui lòng nhập số thẻ bảo hiểm y tế"
                        ),
                      ]}
                    >
                      <Input
                        type="text"
                        placeholder="Nhập số thẻ bảo hiểm y tế"
                      />
                    </Item>
                    <Item
                      className="w-full flex-1"
                      name="citizenId"
                      label=<span className="text-start w-32 ">
                        Căn cước công dân
                      </span>
                      required
                      rules={[validateRequireInput("Vui lòng nhập CCCD ")]}
                    >
                      <Input type="number" placeholder="Nhập CCCD" />
                    </Item>
                    <Item
                      className="w-full flex-1"
                      name="patientCode"
                      label=<span className="text-start w-32 ">
                        Mã số sức khoẻ
                      </span>
                      required
                      rules={[
                        validateRequireInput("Vui lòng nhập mã số sức khoẻ "),
                      ]}
                    >
                      <Input
                        type="number"
                        placeholder="Nhập mã số sức khoẻ (mã bệnh nhân)"
                      />
                    </Item>
                    <Item
                      className="w-full flex-1 "
                      name="phone"
                      required
                      label=<span className="text-start w-32 ">
                        Số điện thoại
                      </span>
                      rules={[
                        validateRequireInput("Vui lòng nhập số điện thoại"),
                        validatePhoneNumber(
                          "normal",
                          "Vui lòng nhập đúng định dạng SĐT"
                        ),
                      ]}
                    >
                      <Input type="number" placeholder="Nhập số điện thoại" />
                    </Item>
                  </div>
                  <div className="flex flex-col items-start  ">
                    <Item
                      className="w-full flex-1"
                      name="email"
                      required
                      label=<span className="text-start w-32 ">
                        Địa chỉ email
                      </span>
                      rules={[
                        validateRequireInput("Vui lòng nhập email"),
                        validateEmail("Vui lòng nhập đúng định dạng email"),
                      ]}
                    >
                      <Input type="text" placeholder="Nhập email" />
                    </Item>
                    <Item
                      className="w-full flex-1"
                      name="province"
                      label=<span className="text-start w-32 ">
                        Tỉnh/ Thành Phố
                      </span>
                      required
                      rules={[validateRequireInput("Vui lòng chọn giá trị ")]}
                    >
                      <Select
                        allowClear
                        showArrow
                        showSearch
                        placeholder="Chọn tỉnh / Thành phố"
                        onChange={onChangeSelect}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={ListProvince()}
                        required
                        rules={[validateRequireInput("Vui lòng chọn giá trị ")]}
                        autoFocus
                      />
                    </Item>

                    <Item
                      className="w-full flex-1"
                      name="district"
                      label=<span className="text-start w-32 ">
                        Quận / Huyện
                      </span>
                      required
                      rules={[validateRequireInput("Vui lòng chọn giá trị ")]}
                    >
                      <Select
                        allowClear
                        showArrow
                        showSearch
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
                        required
                        rules={[validateRequireInput("Vui lòng chọn giá trị")]}
                        autoFocus
                      />
                    </Item>
                    <Item
                      className="w-full "
                      name="commune"
                      label=<span className="text-start w-32 ">
                        Phường / Xã
                      </span>
                      required
                      rules={[validateRequireInput("Vui lòng chọn giá trị")]}
                    >
                      <Select
                        allowClear
                        showArrow
                        showSearch
                        className="w-full flex-1"
                        placeholder="Phường / Xã"
                        onChange={(value) => {
                          // console.log(value);
                          // onChangeSelect();
                        }}
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={[
                          {
                            label: "Bách Khoa",
                            value: "Bách Khoa",
                          },
                          {
                            label: "Đồng Tâm",
                            value: "Đồng Tâm",
                          },
                          {
                            label: "Thanh Nhàn",
                            value: "Thanh Nhàn",
                          },
                        ]}
                        autoFocus
                      />
                    </Item>
                    <Item
                      className="w-full flex-1   "
                      name="village"
                      required
                      rules={[validateRequireInput("Vui lòng nhập địa chỉ")]}
                      label=<span className="text-start w-32 ">Thôn / Phố</span>
                    >
                      <Input type="text" placeholder="Địa chỉ nhà"></Input>
                    </Item>
                  </div>
                  <div className="flex flex-col items-start  ">
                    <Item
                      className="w-full"
                      name="sex"
                      label=<span className="text-start w-32">Giới tính</span>
                      required
                      rules={[validateRequireInput("Vui lòng chọn giá trị")]}
                    >
                      <Select
                        allowClear
                        showArrow
                        showSearch
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
                      className="w-full flex-1 "
                      name="birth"
                      label=<span className="text-start w-32">Năm sinh</span>
                      required
                      rules={[validateRequireInput("Vui lòng chọn giá trị")]}
                    >
                      <DatePicker
                        className="w-full flex-1"
                        placeholder="Năm sinh"
                        size="normal"
                        format={dateFormatList}
                      />
                    </Item>
                    <Item
                      className="w-full "
                      name="nationality"
                      label=<span className="text-start w-32">Quốc tịch</span>
                      required
                      rules={[validateRequireInput("Vui lòng chọn giá trị")]}
                    >
                      <Select
                        allowClear
                        showArrow
                        showSearch
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
                    <Item
                      className="w-full"
                      name="ethnic"
                      label=<span className="text-start w-32">Dân tộc</span>
                      required
                      rules={[validateRequireInput("Vui lòng chọn giá trị")]}
                    >
                      <Select
                        allowClear
                        showArrow
                        showSearch
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
                    <Item className="w-full flex-1"></Item>
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className="rounded h-full w-full mt-4 p-3 bg-white">
            <div className="fz-16 ml-40">Thông tin vào viện</div>
            <div className="rounded h-full w-full mt-4">
              <Form
                form={form}
                onFinish={(value) => {
                  if (edit) {
                    fetchingPut({ ...valueForm, ...value });
                  } else {
                    fetchingPosts({ ...valueForm, ...value });
                  }
                  setIsModalConfirm(true);
                  console.log(value);
                }}
                onValuesChange={() => !dirty && setDirty(true)}
                className="text-base "
                layout="horizontal"
              >
                <div className="mx-4 grid gap-4 grid-cols-3">
                  <div className="flex flex-col items-start  ">
                    <Item
                      className="w-full flex-1"
                      name="description"
                      label=<span className="text-start w-32 ">
                        Lý do vào viện
                      </span>
                      required
                      rules={[validateRequireInput("Vui lòng nhập lý do")]}
                      // rules={[
                      //   validateRequireInput(
                      //     "Hãy ghi rõ Họ Và Tên, viết hoa những chữ cái đầu tiên"
                      //   ),
                      //   validateMaxLengthStr(
                      //     50,
                      //     "Vui lòng nhập thông tin đúng qui tắc: Độ dài không quá 50 ký tự"
                      //   ),
                      // ]}
                    >
                      <Input type="text" placeholder="Lý do vào viện" />
                    </Item>
                    <Item
                      className="w-full flex-1"
                      name="dayIn"
                      label=<span className="text-start w-32 ">
                        Ngày nhập khoa
                      </span>
                      required
                      rules={[
                        validateRequireInput("Vui lòng nhập ngày nhập khoa"),
                      ]}
                    >
                      <DatePicker
                        className="w-full flex-1"
                        size="normal"
                        format={dateFormatList}
                      />
                    </Item>
                    <Item
                      className="w-full flex-1"
                      name="timeHospitalize"
                      label=<span className="text-start w-32 ">
                        Nhập viện lúc
                      </span>
                      required
                      rules={[
                        validateRequireInput("Vui lòng nhập ngày vào viện"),
                      ]}
                    >
                      <DatePicker
                        showTime
                        className="w-full flex-1"
                        size="normal"
                        format={"h:mm DD/MM/YYYY"}
                      />
                    </Item>

                    <Item
                      className="w-full flex-1"
                      name="room"
                      label=<span className="text-start w-32 ">Phòng</span>
                      required
                      rules={[validateRequireInput("Vui lòng lựa chọn phòng ")]}
                    >
                      <Select
                        allowClear
                        showArrow
                        showSearch
                        // suffixIcon={<SearchIcon />}
                        className="w-full flex-1"
                        placeholder=""
                        onChange={onChangeSelect}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={[
                          {
                            label: "Phòng cấp cứu hồi sức 1",
                            value: "Phòng cấp cứu hồi sức 1",
                          },
                          {
                            label: "Phòng cấp cứu hồi sức 2",
                            value: "Phòng cấp cứu hồi sức 2",
                          },
                          {
                            label: "Phòng 401",
                            value: "Phòng 401",
                          },
                          {
                            label: "Phòng 402",
                            value: "Phòng 401",
                          },
                        ]}
                      />
                    </Item>
                    <Item
                      className="w-full flex-1"
                      name="bed"
                      label=<span className="text-start w-32 ">Giường</span>
                      required
                      rules={[validateRequireInput("Vui lòng chọn giường")]}
                    >
                      <Select
                        allowClear
                        showArrow
                        showSearch
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
                        options={[
                          {
                            label: "H001",
                            value: "H001",
                          },
                          {
                            label: "H002",
                            value: "H002",
                          },
                          {
                            label: "H003",
                            value: "H003",
                          },
                        ]}
                        autoFocus
                      />
                    </Item>
                  </div>
                  <div className="flex flex-col items-start  ">
                    <Item
                      className="w-full flex-1"
                      name="deliverPlace"
                      label=<span className="text-start w-32 ">
                        Nơi chuyển đến
                      </span>

                      // rules={[
                      //   validateRequireInput("Vui lòng nhập CCCD "),
                      //   validateNumberInput(),
                      // ]}
                    >
                      <Input placeholder="" />
                    </Item>
                    <Item
                      className="w-full flex-1"
                      name="typeTherapy"
                      label=<span className="text-start w-32 ">
                        Phân loại điều trị
                      </span>
                    >
                      <Select
                        allowClear
                        showArrow
                        showSearch
                        // suffixIcon={<SearchIcon />}
                        className="w-full flex-1"
                        placeholder=""
                        onChange={onChangeSelect}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                      />
                    </Item>
                    <Item
                      className="w-full flex-1"
                      name="directOn"
                      label=<span className="text-start w-32 ">
                        Trực tiếp vào
                      </span>

                      // rules={[
                      //   validateRequireInput("Vui lòng nhập CCCD "),
                      //   validateNumberInput(),
                      // ]}
                    >
                      <Input placeholder="" />
                    </Item>
                    <Item
                      className="w-full flex-1"
                      name="timeHospital"
                      label=<span className="text-start w-32 ">
                        Vào viện lần này thứ
                      </span>

                      // rules={[
                      //   validateRequireInput("Vui lòng nhập CCCD "),
                      //   validateNumberInput(),
                      // ]}
                    >
                      <Input placeholder="" />
                    </Item>

                    <Item
                      className="w-full "
                      name="emergency"
                      // required
                      label=<span className="text-start w-32 ">
                        KKB, Cấp cứu
                      </span>

                      // rules={[validateRequireInput("Vui lòng chọn giá trị")]}
                    >
                      <Input placeholder="" />
                    </Item>
                  </div>
                  <div className="flex flex-col items-start  ">
                    <Item
                      className="w-full"
                      name="department"
                      label=<span className="text-start w-32">Khoa</span>
                      required
                      rules={[
                        validateRequireInput("Vui lòng chọn khoa điều trị"),
                      ]}
                    >
                      <Select
                        allowClear
                        showArrow
                        showSearch
                        // suffixIcon={<SearchIcon />}
                        className="w-full flex-1"
                        placeholder=""
                        onChange={onChangeSelect}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        autoFocus
                        options={[
                          {
                            label: "Khoa nội tổng hợp",
                            value: "Khoa nội tổng hợp",
                          },
                        ]}
                      />
                    </Item>
                    <Item
                      className="w-full "
                      name="doctor"
                      label=<span className="text-start w-32">Bác sĩ</span>
                      required
                      rules={[validateRequireInput("Vui lòng chọn bác sỹ")]}
                    >
                      <Select
                        allowClear
                        showArrow
                        showSearch
                        // suffixIcon={<SearchIcon />}
                        className="w-full flex-1"
                        placeholder=""
                        onChange={onChangeSelect}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        options={[
                          {
                            label: "Nguyễn Văn A",
                            value: "Nguyễn Văn A",
                          },
                          {
                            label: "Nguyễn Văn B",
                            value: "Nguyễn Văn B",
                          },
                          {
                            label: "Nguyễn Văn C",
                            value: "Nguyễn Văn C",
                          },
                          {
                            label: "Nguyễn Văn D",
                            value: "Nguyễn Văn D",
                          },
                        ]}
                        autoFocus
                      />
                    </Item>

                    <Item
                      className="w-full"
                      name="symptom"
                      label=<span className="text-start w-32">Triệu chứng</span>
                    >
                      <Input type="text"></Input>
                    </Item>
                    <Item
                      className="w-full"
                      name="diagnose"
                      label=<span className="text-start w-32">
                        Chẩn đoán Ban đầu
                      </span>
                    >
                      <Input type="text"></Input>
                    </Item>
                    <Item
                      className="w-full flex-1 "
                      name="placeIntroduction"
                      label=<span className="text-start w-32">
                        Nơi giới thiệu
                      </span>

                      // rules={[validateRequireInput("Vui lòng chọn năm sinh")]}
                    >
                      <Input type="text"></Input>
                    </Item>
                  </div>
                </div>

                {/* Save */}
                <div className="text-end my-4">
                  <Button
                    size="normal"
                    type="primary"
                    disabled={!dirty}
                    htmlType="submit"
                  >
                    {edit ? "Lưu thông tin" : "Tạo"}
                  </Button>
                </div>
              </Form>
            </div>
          </div>

          <Modal
            title={`Xác nhận ${edit ? "lưu thông tin" : "tạo bệnh nhân"}`}
            open={isModalConfirm}
            onOk={() => {
              navigate("/EMR/patient");
            }}
            onCancel={() => setIsModalConfirm(false)}
          ></Modal>
        </div>
      </Spin>
    </>
  );
};

export default AddPatient;
