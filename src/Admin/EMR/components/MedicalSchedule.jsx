import { Button, DatePicker, Form, message, Select, Spin } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { validateRequireInput } from "../../../App/validator";
import { DoctorsSlider, Schedule } from "../../../Client/Models/data";

const { Item } = Form;
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
const MedicalSchedule = () => {
  const [timeSchedule, setTimeSchedule] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [idDoctor, setIdDoctor] = useState();
  const [resetHour, setResetHour] = useState(false);
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  };
  const { data, refetch, isFetching } = useQuery(
    ["getDoctor"],
    async () => {
      const res = await axios.get(
        "https://63e65926c8839ccc28567d1b.mockapi.io/api/emr/doctor"
      );
      setDoctor(res?.data);
      return res?.data;
    },
    { initialData: [], onError: (e) => {} }
  );
  const updateSchedule = useMutation(
    async (body) => {
      const response = await axios.put(
        `https://63e65926c8839ccc28567d1b.mockapi.io/api/emr/doctor/${idDoctor}`,
        body
      );
      return response;
    },
    {
      onSuccess: () => {
        message.success("Lưu thành công");
        setResetHour(true);
        refetch();
      },
      onError: (err) => {
        message.error("Lưu thất bại");
      },
    }
  );
  function listDoctor() {
    return [
      ...doctor.map((e) => ({
        label: e.name,
        value: e.id,
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
    <Spin spinning={isFetching}>
      <Form
        onFinish={(value) => {
          const doctorDetail = doctor?.filter((e) => e.id === value.idDoctor);
          const dateSchedule = moment(value.dateSchedule).valueOf();
          updateSchedule.mutate({
            schedule: [
              ...doctorDetail[0]?.schedule.map((e) => e),
              {
                dateSchedule,
                timeSchedule,
              },
            ],
          });
        }}
        // onValuesChange={() => !isDirty && setIsDirty(true)}
        className="text-base grid gap-4"
        layout="vertical"
      >
        <div className="mx-8 flex items-center gap-4 ">
          <div className="w-1/2 mt-4">
            <Item
              className="w-full "
              name="idDoctor"
              required
              style={{ marginBottom: "4px" }}
              rules={[validateRequireInput("Không bỏ trống trường này")]}
            >
              <Select
                allowClear
                showArrow
                showSearch
                // suffixIcon={<SearchIcon />}
                onChange={(value) => setIdDoctor(value)}
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
                onChange={() => setResetHour(false)}
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
    </Spin>
  );
};

export default MedicalSchedule;
