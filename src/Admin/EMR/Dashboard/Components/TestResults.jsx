import { Button, Form, Image, Input, Select } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { validateRequireInput } from "../../../.././App/validator";
import "../../.././styles/pages/TestResults/index.scss";

const { Item } = Form;
const { TextArea } = Input;
const TestResults = () => {
  const [form] = Form.useForm();
  const [isDirty, setIsDirty] = useState(false);
  const [dataUpload, setDataUpload] = useState({});

  const handleChangeLinkImg = (e) => {
    setDataUpload(e.target.value);
  };
  useEffect(() => {
    setDataUpload();
  }, []);
  return (
    <div className="TestResults">
      <div className="TestResults-heading">Nhập kết quả xét nghiệm</div>
      <div className="TestResults-body flex">
        <div className="w-1/2 TestResults-form">
          <Form
            form={form}
            onFinish={(value) => {
              // console.log(value);
              // // if (edit) {
              // //   fetchingPut({ ...valueForm, ...value });
              // // } else {
              // //   fetchingPosts({ ...valueForm, ...value });
              // // }
              // // setIsModalConfirm(true);
              // // console.log(value);
            }}
            onValuesChange={() => !isDirty && setIsDirty(true)}
            className="text-base "
            layout="vertical "
          >
            <div className="mx-4 grid gap-4 ">
              <Item
                className="w-full flex-1"
                name="typeService"
                label="Dịch vụ cận lâm sàng"
                required
                rules={[validateRequireInput("Vui lòng lựa chọn dịch vụ ")]}
              >
                <Select
                  allowClear
                  showArrow
                  showSearch
                  // suffixIcon={<SearchIcon />}
                  className="w-full flex-1"
                  placeholder="Chọn dịch vụ"
                  // onChange={onChangeSelect}
                  // onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "Siêu âm",
                      value: "Siêu âm",
                    },
                    {
                      label: "Xét nghiệm máu",
                      value: "Xét nghiệm máu",
                    },
                    {
                      label: "X quang",
                      value: "X quang",
                    },
                    {
                      label: "Cộng hưởng từ",
                      value: "Cộng hưởng từ",
                    },
                    {
                      label: "Nội soi",
                      value: "Nội soi",
                    },
                  ]}
                />
              </Item>
              <Item
                className="w-full flex-1"
                name="linkImage"
                label="Đường dẫn kết quả ảnh"
                required
                rules={[validateRequireInput("Vui lòng nhập đường dẫn ảnh ")]}
              >
                <Input type="link" onChange={handleChangeLinkImg} />
                {dataUpload && (
                  <div className="mt-4">
                    <Image width={200} src={dataUpload} alt="Ảnh" />
                  </div>
                )}
              </Item>
              <Item
                className=""
                name="comment"
                label="Nhận xét"
                required
                rules={[validateRequireInput("Vui lòng nhập nhận xét ")]}
              >
                <TextArea
                  placeholder="Nội dung"
                  rows={4}
                  style={{
                    resize: "none",
                  }}
                />
              </Item>
            </div>
          </Form>
        </div>
        <div className="w-1/2 TestResults-form mt-2">
          <Form
            form={form}
            onFinish={(value) => {
              console.log(value);
              // if (edit) {
              //   fetchingPut({ ...valueForm, ...value });
              // } else {
              //   fetchingPosts({ ...valueForm, ...value });
              // }
              // setIsModalConfirm(true);
              // console.log(value);
            }}
            onValuesChange={() => !isDirty && setIsDirty(true)}
            className="text-base  "
            layout="vertical "
          >
            <div
              className="relative"
              style={{
                border: "1px solid #4238CA",
                background: "#F6F8FF",
                padding: "20px 0px",
                borderTopColor: "transparent",
              }}
            >
              <div className="absolute -top-4 text-xl right-1/4 left-1/4 ">
                Nhập kết quả xét nghiệm máu
              </div>
              <div className="mx-4 grid gap-4 ">
                <div className="flex flex-col items-start  ">
                  <Item
                    className="w-full flex-1"
                    name="Glu"
                    label="Đường trong máu (Glu)"
                    required
                    rules={[validateRequireInput("Vui lòng nhập kết quả ")]}
                  >
                    <div className="flex w-full flex-1">
                      <Input placeholder="Nhập kết quả" />
                      <div class="bg-[#49505720] flex items-center justify-center">
                        <span class="px-3">(mmol/l)</span>
                      </div>
                    </div>
                  </Item>
                  <Item
                    className="w-full flex-1"
                    name="Ure"
                    label="Ure máu (Ure)"
                    required
                    rules={[validateRequireInput("Vui lòng nhập kết quả ")]}
                  >
                    <div className="flex w-full flex-1">
                      <Input placeholder="Nhập kết quả" />
                      <div class="bg-[#49505720] flex items-center justify-center">
                        <span class="px-3">(mmol/l)</span>
                      </div>
                    </div>
                  </Item>
                  <Item
                    className="w-full flex-1"
                    name="RBC"
                    label="Số lượng hồng cầu (RBC)"
                    required
                    rules={[validateRequireInput("Vui lòng nhập kết quả ")]}
                  >
                    <div className="flex w-full flex-1">
                      <Input placeholder="Nhập kết quả" />
                      <div class="bg-[#49505720] flex items-center justify-center">
                        <span class="px-3">(Tera/L)</span>
                      </div>
                    </div>
                  </Item>
                  <Item
                    className="w-full flex-1"
                    name="Hb"
                    label="Lượng huyết sắc tố (Hb)"
                    required
                    rules={[validateRequireInput("Vui lòng nhập kết quả ")]}
                  >
                    <div className="flex w-full flex-1">
                      <Input placeholder="Nhập kết quả" />
                      <div class="bg-[#49505720] flex items-center justify-center">
                        <span class="px-3">(g/L)</span>
                      </div>
                    </div>
                  </Item>
                  <Item
                    className="w-full flex-1"
                    name="HCT"
                    label="Khối hồng cầu (HCT)"
                    required
                    rules={[validateRequireInput("Vui lòng nhập kết quả ")]}
                  >
                    <div className="flex w-full flex-1">
                      <Input placeholder="Nhập kết quả" />
                      <div class="bg-[#49505720] flex items-center justify-center">
                        <span class="px-3">(%)</span>
                      </div>
                    </div>
                  </Item>
                  <Item
                    className="w-full flex-1"
                    name="MCV"
                    label="Thể tích trung bình của hồng cầu (MCV)"
                    required
                    rules={[validateRequireInput("Vui lòng nhập kết quả ")]}
                  >
                    <div className="flex w-full flex-1">
                      <Input placeholder="Nhập kết quả" />
                      <div class="bg-[#49505720] flex items-center justify-center">
                        <span class="px-3">(fL)</span>
                      </div>
                    </div>
                  </Item>
                  <Item
                    className="w-full flex-1"
                    name="MCH"
                    label="Lượng Hb trung bình hồng cầu (MCH)"
                    required
                    rules={[validateRequireInput("Vui lòng nhập kết quả ")]}
                  >
                    <div className="flex w-full flex-1">
                      <Input placeholder="Nhập kết quả" />
                      <div class="bg-[#49505720] flex items-center justify-center">
                        <span class="px-3">(pg)</span>
                      </div>
                    </div>
                  </Item>
                  <Item
                    className="w-full flex-1"
                    name="WBC"
                    label="Số lượng bạch cầu trong một thể tích máu (WBC)"
                    required
                    rules={[validateRequireInput("Vui lòng nhập kết quả ")]}
                  >
                    <div className="flex w-full flex-1">
                      <Input placeholder="Nhập kết quả" />
                      <div class="bg-[#49505720] flex items-center justify-center">
                        <span class="px-3">(g/L)</span>
                      </div>
                    </div>
                  </Item>
                  <Item
                    className="w-full flex-1"
                    name="NEUT"
                    label="Bạch cầu trung tính (NEUT)"
                    required
                    rules={[validateRequireInput("Vui lòng nhập kết quả ")]}
                  >
                    <div className="flex w-full flex-1">
                      <Input placeholder="Nhập kết quả" />
                      <div class="bg-[#49505720] flex items-center justify-center">
                        <span class="px-3">(g/L)</span>
                      </div>
                    </div>
                  </Item>
                  <Item
                    className="w-full flex-1"
                    name="LYM"
                    label="Bạch cầu Lympho (LYM)"
                    required
                    rules={[validateRequireInput("Vui lòng nhập kết quả ")]}
                  >
                    <div className="flex w-full flex-1">
                      <Input placeholder="Nhập kết quả" />
                      <div class="bg-[#49505720] flex items-center justify-center">
                        <span class="px-3">(g/L)</span>
                      </div>
                    </div>
                  </Item>
                  <Item
                    className="w-full flex-1"
                    name="MO"
                    label="Bạch cầu Mono"
                    required
                    rules={[validateRequireInput("Vui lòng nhập kết quả ")]}
                  >
                    <div className="flex w-full flex-1">
                      <Input placeholder="Nhập kết quả" />
                      <div class="bg-[#49505720] flex items-center justify-center">
                        <span class="px-3">(g/L)</span>
                      </div>
                    </div>
                  </Item>
                  <Item
                    className="w-full flex-1"
                    name="PLT"
                    label="Số lượng tiểu cầu trong một thể tích máu (PLT)"
                    required
                    rules={[validateRequireInput("Vui lòng nhập kết quả ")]}
                  >
                    <div className="flex w-full flex-1">
                      <Input placeholder="Nhập kết quả" />
                      <div class="bg-[#49505720] flex items-center justify-center">
                        <span class="px-3">(g/L)</span>
                      </div>
                    </div>
                  </Item>
                </div>
                <div className="flex gap-4">
                  <Item
                    className="w-1/2 flex-1"
                    name="bloodGroup"
                    label="Nhóm máu"
                    required
                    rules={[validateRequireInput("Vui lòng chọn nhóm máu")]}
                  >
                    <Select
                      allowClear
                      showArrow
                      showSearch
                      // suffixIcon={<SearchIcon />}
                      className="w-1/2 flex-1"
                      placeholder="Chọn nhóm máu"
                      // onChange={onChangeSelect}
                      // onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={[
                        {
                          label: "A",
                          value: "A",
                        },
                        {
                          label: "O",
                          value: "O",
                        },
                        {
                          label: "B",
                          value: "B",
                        },
                        {
                          label: "AB",
                          value: "AB",
                        },
                      ]}
                    />
                  </Item>
                  <Item
                    className="w-1/2 flex-1"
                    name="bloodType"
                    label="Loại máu"
                    required
                    rules={[validateRequireInput("Vui lòng chọn loại máu")]}
                  >
                    <Select
                      allowClear
                      showArrow
                      showSearch
                      // suffixIcon={<SearchIcon />}
                      className="w-1/2 flex-1"
                      placeholder="Chọn loại máu"
                      // onChange={onChangeSelect}
                      // onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={[
                        {
                          label: "Rh+",
                          value: "Rh+",
                        },
                        {
                          label: "Rh-",
                          value: "Rh-",
                        },
                      ]}
                    />
                  </Item>
                </div>
              </div>
            </div>
            {/* Save */}
            <div className="text-end p-5">
              <Button
                size="normal"
                type="primary"
                disabled={!isDirty}
                htmlType="submit"
              >
                Cập nhật
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default TestResults;
