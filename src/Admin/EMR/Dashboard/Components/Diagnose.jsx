import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useState } from "react";
import { validateRequireInput } from "../../../../App/validator";
import "../../.././styles/pages/ClinicalExamination/index.scss";

const { Item } = Form;
const { TextArea } = Input;
const Diagnose = () => {
  const [form] = Form.useForm();
  const [isDirty, setIsDirty] = useState(false);

  return (
    <div className="ClinicalExamination">
      <div className="ClinicalExamination-heading">Nhập chẩn đoán</div>
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
                name="mainDisease"
                label={<div className="font-bold">Bệnh chính</div>}
                required
                rules={[validateRequireInput("Vui lòng lựa chọn bệnh")]}
              >
                <Select
                  allowClear
                  showArrow
                  showSearch
                  className="w-full flex-1"
                  placeholder="Chọn bệnh"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "A00-Bệnh tả",
                      value: "A00",
                    },
                    {
                      label:
                        "A00.1-Bệnh tả do Vibrio cholerae 01, typ sinh học eltor",
                      value: "A00.1",
                    },
                    {
                      label: "A00.9-Bệnh tả, không đặc hiệu",
                      value: "A00.9",
                    },
                  ]}
                />
              </Item>
              <Item
                className="w-full flex-1"
                name="mainDisease"
                label={<div className="font-bold">Bệnh kèm theo</div>}
              >
                <Select
                  allowClear
                  showArrow
                  showSearch
                  className="w-full flex-1"
                  placeholder="Chọn bệnh"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      label: "A04.0-Nhiễm Escherichia coli gây bệnh đường ruột",
                      value: "A04.0",
                    },
                    {
                      label: "A04.1-Nhiễm Escherichia coli gây độc tố ruột",
                      value: "A04.1",
                    },
                    {
                      label: "A04.2-Nhiễm Escherichia coli xâm nhập",
                      value: "A04.2",
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
                  label={<div className="font-bold">Chẩn đoán</div>}
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
                  label={<div className="font-bold">Kế hoạch điều trị</div>}
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
                  label={<div className="font-bold">Tiền lượng</div>}
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
              <div className="">
                <div className="font-bold">Kết quả ảnh chụp</div>
              </div>
              <div className="font-bold">Kết quả xét nghiệm</div>
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

export default Diagnose;
