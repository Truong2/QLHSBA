import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutHome from "../../components/AboutHome";
import Appointment from "../../components/Appointment";
import Doctors from "../../components/Doctor";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import News from "../../components/News";
import Service from "../../components/Service";
import SliderHomepage from "../../components/Slider";
import Wrapper from "../../components/Wrapper";
import Donors from "../../components/Donors";
import { Button, Calendar, Card, Modal, Select } from "antd";
import { Link } from "react-router-dom";
import { DoctorsSlider, Schedule } from "../../Models/data";
import moment from "moment";
import localization from "moment/locale/vi";
import PopUpSchedule from "./PopupSchedule";

const { Meta } = Card;
const { Option } = Select;
const BookingCare = () => {
  const [allDays, setAllDays] = useState([]);
  const [isSchedule, setIsSchedule] = useState(false);
  const [hoursSchedule, setHoursSchedule] = useState();
  const [timeSchedule, setTimeSchedule] = useState();
  const [timeHours, setTimeHours] = useState(Schedule);
  // Hàm viết hoa chữ cái đầu
  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const onChange = (value) => {
    setTimeSchedule(value);
    const timeDate = JSON.parse(localStorage.getItem("timeSchedule"));
    if (
      moment(value).format("dddd - DD/MM") ===
      timeDate.timeScheduleDoctor[0]?.dateSchedule
    ) {
      setTimeHours(timeDate.timeScheduleDoctor[0]?.timeSchedule);
    }
    console.log(timeDate);
    // if (
    //   moment(value).format("dddd - DD/MM") ===
    //   moment(timeScheduleDoctor?.dateBirth).format("dddd - DD/MM")
    // ) {
    //   const timeHour = JSON.parse(localStorage.getItem("timeSchedule"));
    //   console.log(timeHour, Schedule);
    // }
  };
  // Hàm sét allDays
  useEffect(() => {
    let arrDate = [];
    for (let i = 0; i < 7; i++) {
      let object = {};
      const days = moment(new Date()).add(i, "days").format("dddd - DD/MM");
      object.label = jsUcfirst(days);
      object.value = moment(new Date()).add(i, "days").startOf("day").valueOf();
      arrDate.push(object);
    }
    setAllDays(arrDate);
  }, []);

  return (
    <div className="overflow-hidden ">
      <div className=" bg-[rgb(238,238,238)] pt-10">
        {DoctorsSlider?.map((item) => (
          <div
            key={item.id}
            className="p-4 max-w-[1210px] w-[100%] mx-auto my-0"
          >
            <div className="bg-white p-10 flex items-start flex-row">
              <div className="w-[50%] flex items-center flex-col justify-between">
                <div className="flex items-start flex-row justify-between">
                  <Card
                    hoverable
                    style={{
                      width: 150,
                    }}
                    cover={<img alt="example" src={item.avatar} />}
                  >
                    <Meta title="" description="www.instagram.com" />
                  </Card>
                  <div className="ml-6">
                    <h2 class="mot-bs-ten">
                      <Link to="">{item.name}</Link>
                    </h2>
                    <p class="mot-bs-tomtat" />
                    Thế mạnh về Chỉnh hình Răng Hàm Mặt
                    <br />
                    Tốt nghiệp Chuyên ngành Răng Hàm Mặt, Đại học&nbsp;First
                    Moscow State Medical, Nga
                    <div class="mot-bs-diadiem">
                      <span class="bt-g bt-g-diadiem glyphicon glyphicon-map-marker">
                        Hà Nội
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[50%]">
                <h1 className="mb-6 text-lg">Lịch khám</h1>
                <Select
                  showSelect
                  placeholder="Chọn ngày đặt lịch"
                  optionFilterProp="children"
                  onChange={onChange}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  size="large"
                  defaultValue={jsUcfirst(moment().format("dddd - DD/MM"))}
                  stateTasksOptions
                >
                  {allDays?.map((item) => (
                    <Option key={item.value} value={item.value}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
                <div className="mt-4">
                  <div className="pb-4 w-[100%] overflow-x-visible group">
                    {timeHours?.map((e) => (
                      <Button
                        key={e.id}
                        style={{
                          margin: "5px",
                          background: "#00000",
                          color: "#000000",
                          fontWeight: "480",
                        }}
                        onClick={() => {
                          setHoursSchedule(e.time);
                          setIsSchedule(true);
                        }}
                      >
                        {e.time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup đăng ký thông tin lịch khám */}
      {isSchedule && (
        <PopUpSchedule
          isSchedule={isSchedule}
          setIsSchedule={setIsSchedule}
          hoursSchedule={hoursSchedule}
          timeSchedule={timeSchedule}
        />
      )}
    </div>
  );
};

export default BookingCare;
