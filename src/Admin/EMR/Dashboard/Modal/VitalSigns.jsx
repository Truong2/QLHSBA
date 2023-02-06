import { Button, Form, Input, Modal } from "antd";
import React from "react";
import { validateRequireInput } from "../../../../App/validator";

const { Item } = Form;

const VitalSigns = ({ isModalOpen, setIsModal, setDataVitalSigns }) => {
  return (
    <div>
      <Modal
        title="Nhập giá trị"
        open={isModalOpen}
        onOk={() => setIsModal(false)}
        onCancel={() => setIsModal(false)}
        centered
        okText="Xác nhận"
        footer={null}
        cancelText="Huỷ"
        width="30rem"
        bodyStyle={{
          padding: "1.5rem 0.5rem",
          maxHeight: "calc(100vh - 3rem)",
          overflow: "auto",
        }}
        destroyOnClose
      >
        <div className="mb-6">
          <Form
            onFinish={(value) => {
              console.log(value);
              setDataVitalSigns(value);
              setIsModal(false);
            }}
            //   onValuesChange={() => !isDirty && setIsDirty(true)}
            className="text-base grid gap-4"
            layout="vertical"
          >
            <div className="mx-4">
              <div className="flex items-center gap-4 ">
                <Item
                  className="w-1/2"
                  name="time"
                  label="Thời gian"
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
                  <Input
                    //   disabled={canView}
                    type="text"
                    placeholder="Nhập"
                  />
                </Item>
                <Item
                  className="w-1/2"
                  name="weight"
                  // required={!canView}
                  label="Cân nặng(Kg)"
                  // rules={[
                  //   validateRequireInput("Vui lòng nhập email"),
                  //   validateEmail("Vui lòng nhập đúng định dạng email"),
                  // ]}
                >
                  <Input
                    //   disabled={canView}
                    type="text"
                    placeholder="Nhập cân nặng"
                  />
                </Item>
              </div>
              <div className="flex items-center gap-4 ">
                <Item
                  className="w-1/2"
                  name="SBP"
                  label="Huyết áp tâm thu"
                  required
                  rules={[validateRequireInput("Vui lòng nhập giá trị")]}
                >
                  <Input type="text" placeholder="Nhập huyết áp tâm thu" />
                </Item>
                <Item
                  className="w-1/2"
                  name="bloodPressure"
                  required
                  label="Huyết áp tâm trương"
                  rules={[validateRequireInput("Vui lòng nhập giá trị")]}
                >
                  <Input type="text" placeholder="Nhập huyết áp tâm trương" />
                </Item>
              </div>
              <div className="flex items-center gap-4 ">
                <Item
                  className="w-1/2"
                  name="temperature"
                  label="Nhiệt độ(C)"
                  required
                  rules={[validateRequireInput("Vui lòng nhập giá trị")]}
                >
                  <Input type="text" placeholder="Nhập nhiệt độ" />
                </Item>
                <Item
                  className="w-1/2"
                  name="heartbeat"
                  required
                  label="Nhịp tim(bpm)"
                  rules={[validateRequireInput("Vui lòng nhập giá trị")]}
                >
                  <Input type="text" placeholder="Nhập nhịp tim" />
                </Item>
              </div>
              <div className="flex items-center gap-4 ">
                <Item
                  className="w-1/2"
                  name="bloodSugar"
                  label="Đường huyết(mg/Dl)"
                  required
                  rules={[validateRequireInput("Vui lòng nhập giá trị")]}
                >
                  <Input type="text" placeholder="Nhập đường huyết" />
                </Item>
                <Item
                  className="w-1/2"
                  name="height"
                  label="Chiều cao(cm)"
                  // rules={[
                  //   validateRequireInput("Vui lòng nhập email"),
                  //   validateEmail("Vui lòng nhập đúng định dạng email"),
                  // ]}
                >
                  <Input type="text" placeholder="Nhập chiều cao" />
                </Item>
              </div>
            </div>
            <div className="text-right mx-4">
              <Button
                onClick={() => setIsModal(false)}
                style={{
                  marginRight: "10px",
                  textAlign: "center",
                }}
              >
                Huỷ
              </Button>
              <Button
                type="primary"
                //   disabled={!isDirty}
                htmlType="submit"
                style={{
                  marginLeft: "10px",
                  textAlign: "center",
                }}
              >
                Xác nhận
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default VitalSigns;
