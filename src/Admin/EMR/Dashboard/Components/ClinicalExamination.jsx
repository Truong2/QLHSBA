import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useState } from "react";
import "../../.././styles/pages/ClinicalExamination/index.scss";

const { Item } = Form;
const { TextArea } = Input;
const ClinicalExamination = () => {
  const [form] = Form.useForm();
  const [isDirty, setIsDirty] = useState(false);

  return (
    <div className="ClinicalExamination">
      <div className="ClinicalExamination-heading">
        Nhập thông tin khám lâm sàng
      </div>
      <div className="ClinicalExamination-body">
        <div className="ClinicalExamination-form">
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
            className="text-base "
            layout="vertical "
          >
            <div className="mx-4 grid gap-4 grid-cols-2">
              <Item
                className="w-full flex-1"
                name="typeService"
                label="Chỉ định dịch vụ cận lâm sàng"
                required
                // rules={[validateRequireInput("Vui lòng nhập lý do")]}
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
            </div>
            <div className="mx-4 grid gap-4 grid-cols-2">
              <div className=" flex flex-col items-start  ">
                <Item
                  className="w-full flex-1"
                  name="circulatory"
                  label="Chẩn đoán hệ tuần hoàn"
                  required
                  // rules={[validateRequireInput("Vui lòng lựa chọn phòng ")]}
                >
                  <TextArea
                    style={{
                      resize: "none",
                    }}
                    placeholder="Nội dung"
                    rows={4}
                  />
                </Item>
                <Item
                  className="w-full flex-1"
                  name="digestive"
                  label="Chẩn đoán hệ tiêu hoá"
                  required
                  // rules={[validateRequireInput("Vui lòng lựa chọn phòng ")]}
                >
                  <TextArea
                    placeholder="Nội dung"
                    rows={4}
                    style={{
                      resize: "none",
                    }}
                  />
                </Item>
                <Item
                  className="w-full flex-1"
                  name="nervous"
                  label="Chẩn đoán hệ thần kinh"
                  required
                  // rules={[validateRequireInput("Vui lòng lựa chọn phòng ")]}
                >
                  <TextArea
                    placeholder="Nội dung"
                    rows={4}
                    style={{
                      resize: "none",
                    }}
                  />
                </Item>
                <Item
                  className="w-full flex-1"
                  name="otolaryngology"
                  label="Chẩn đoán tai mũi họng"
                  required
                  // rules={[validateRequireInput("Vui lòng lựa chọn phòng ")]}
                >
                  <TextArea
                    placeholder="Nội dung"
                    rows={4}
                    style={{
                      resize: "none",
                    }}
                  />
                </Item>
                <Item
                  className="w-full flex-1"
                  name="eyeDiagnosis"
                  label="Chẩn đoán mắt"
                  required
                  // rules={[validateRequireInput("Vui lòng lựa chọn phòng ")]}
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
              <div className="flex flex-col items-end  ">
                <Item
                  className="w-full flex-1"
                  name="respiratory"
                  label="Chẩn đoán hệ hô hấp"
                  required
                  // rules={[validateRequireInput("Vui lòng lựa chọn phòng ")]}
                >
                  <TextArea
                    placeholder="Nội dung"
                    rows={4}
                    style={{
                      resize: "none",
                    }}
                  />
                </Item>
                <Item
                  className="w-full flex-1"
                  name="reproductive"
                  label="Chẩn đoán hệ tiết niệu sinh dục"
                  required
                  // rules={[validateRequireInput("Vui lòng lựa chọn phòng ")]}
                >
                  <TextArea
                    placeholder="Nội dung"
                    rows={4}
                    style={{
                      resize: "none",
                    }}
                  />
                </Item>
                <Item
                  className="w-full flex-1"
                  name="muscular"
                  label="Chẩn đoán hệ cơ xương khớp"
                  required
                  // rules={[validateRequireInput("Vui lòng lựa chọn phòng ")]}
                >
                  <TextArea
                    placeholder="Nội dung"
                    rows={4}
                    style={{
                      resize: "none",
                    }}
                  />
                </Item>
                <Item
                  className="w-full flex-1"
                  name="dentomaxillofacial"
                  label="Chẩn đoán răng hàm mặt"
                  required
                  // rules={[validateRequireInput("Vui lòng lựa chọn phòng ")]}
                >
                  <TextArea
                    placeholder="Nội dung"
                    rows={4}
                    style={{
                      resize: "none",
                    }}
                  />
                </Item>
                <Item
                  className="w-full flex-1"
                  name="otherDiagnoses"
                  label="Chẩn đoán khác"
                  required
                  // rules={[validateRequireInput("Vui lòng lựa chọn phòng ")]}
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
            </div>
            <div className="mx-4 grid gap-4 grid-cols-2">
              <Item
                className="w-full flex-1"
                name="syndrome"
                label="Hội chứng"
                required
                // rules={[validateRequireInput("Vui lòng nhập lý do")]}
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
                <TextArea
                  placeholder="Nội dung"
                  rows={4}
                  style={{
                    resize: "none",
                  }}
                />
              </Item>
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

export default ClinicalExamination;
