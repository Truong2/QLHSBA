import { Button, Form, Image, Input, Select } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { validateRequireInput } from "../../../.././App/validator";
import "../../.././styles/pages/TestResults/index.scss";

const { Item } = Form;
const { TextArea } = Input;
const CDHA = () => {
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
      <div className="TestResults-heading">Nhập kết quả CDHA</div>
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
              <Item className="" name="comment" label="Nhận xét">
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
      </div>
    </div>
  );
};

export default CDHA;
