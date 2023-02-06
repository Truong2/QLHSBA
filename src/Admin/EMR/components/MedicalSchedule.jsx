import { Button, DatePicker, Form, message, Select } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { validateRequireInput } from "../../../App/validator";
import { DoctorsSlider, Schedule } from "../../../Client/Models/data";

const { Item } = Form;
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
const MedicalSchedule = () => {
  const [timeSchedule, setTimeSchedule] = useState([]);
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  };
  function listDoctor() {
    return [
      ...DoctorsSlider.map((e) => ({
        label: e.name,
        value: e.name,
      })),
    ];
  }
  const handleSetTimeSchedule = (value) => {
    const check = timeSchedule?.includes(value);
    if (check) {
      setTimeSchedule(timeSchedule.filter((e) => e.id !== value?.id));
    } else {
      setTimeSchedule([...timeSchedule, value]);
    }
  };
  return (
    <Form
      onFinish={(value) => {
        let timeScheduleDoctor = [];
        timeScheduleDoctor.push({
          dateSchedule: moment(value.dateSchedule).format("dddd - DD/MM"),
          timeSchedule: timeSchedule,
        });
        const valueDateSchedule = {
          nameDoctor: value?.nameDoctor,
          timeScheduleDoctor,
        };
        localStorage.setItem("timeSchedule", JSON.stringify(valueDateSchedule));
        if (
          timeScheduleDoctor.dateSchedule !==
          moment(value.dateSchedule).format("dddd - DD/MM")
        ) {
          message.success("Lưu thành công");
        } else {
          message.success("Lưu không thành công");
        }
      }}
      // onValuesChange={() => !isDirty && setIsDirty(true)}
      className="text-base grid gap-4"
      layout="vertical"
    >
      <div className="mx-8 flex items-center gap-4 ">
        <div className="w-1/2 mt-4">
          <Item
            className="w-full "
            name="nameDoctor"
            required
            style={{ marginBottom: "4px" }}
            rules={[validateRequireInput("Không bỏ trống trường này")]}
          >
            <Select
              allowClear
              showArrow
              showSearch
              // suffixIcon={<SearchIcon />}
              className="w-full flex-1"
              placeholder="Chọn bác sỹ"
              //   onChange={onChangeSelect}
              // onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={listDoctor()}
              autoFocus
            />
          </Item>
        </div>
        <div className="w-1/2  mt-4">
          <Item
            className="w-full "
            name="dateSchedule"
            required
            style={{ marginBottom: "4px" }}
            rules={[validateRequireInput("Không bỏ trống trường này")]}
          >
            <DatePicker
              style={{
                width: "100%",
              }}
              placeholder="Chọn ngày"
              disabledDate={disabledDate}
              format={dateFormatList}
            />
          </Item>
        </div>
      </div>
      <div className="mx-8">
        {Schedule?.map((e) => (
          <Button
            key={e.id}
            style={{
              margin: "5px",
              background: timeSchedule?.includes(e) ? "#FFFAE0" : "#ffff",
              color: "#000000",
              fontWeight: "480",
            }}
            onClick={() => handleSetTimeSchedule(e)}
          >
            {e.time}
          </Button>
        ))}
      </div>
      {/* Save */}
      <div className="text-center my-4">
        <Button
          size="large"
          type="primary"
          // disabled={!isDirty}
          htmlType="submit"
          style={{
            width: "170px",
            marginLeft: "10px",
            textAlign: "center",
          }}
        >
          Lưu
        </Button>
      </div>
    </Form>
  );
};

export default MedicalSchedule;
