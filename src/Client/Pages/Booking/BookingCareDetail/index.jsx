import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { Breadcrumb, Button, Calendar, Card, Modal, Select } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import localization from "moment/locale/vi";
import PopUpSchedule from "../PopupSchedule";
import { Schedule } from "../../../Models/data";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Option } = Select;
const BookingCareDetail = () => {
  const [allDays, setAllDays] = useState([]);
  const [isSchedule, setIsSchedule] = useState(false);
  const [hoursSchedule, setHoursSchedule] = useState();
  const [timeSchedule, setTimeSchedule] = useState();
  const onChange = (value) => {
    console.log(`${value}`);
    setTimeSchedule(value);
  };

  useEffect(() => {
    let arrDate = [];
    for (let i = 0; i < 7; i++) {
      let object = {};
      object.label = moment(new Date()).add(i, "days").format("dddd - DD/MM");
      object.value = moment(new Date()).add(i, "days").startOf("day").valueOf();
      arrDate.push(object);
    }
    setAllDays(arrDate);
  }, []);
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <div className="w-[100%] py-5 bg-[#45C3D2] px-10 pt-10">
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <HomeOutlined style={{ fontSize: "20px" }} />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" style={{ display: "contents" }}>
            <UserOutlined style={{ fontSize: "20px" }} />
            <span style={{ marginLeft: "20px", fontSize: "14px" }}>
              John Brown
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className=" bg-[rgb(238,238,238)]">
        <div className="p-4 max-w-[1210px] w-[100%] mx-auto my-0">
          <div className="bg-white p-10 items-start flex-row">
            <div className=" flex items-start flex-col justify-between">
              <div className="flex items-start flex-row justify-between">
                <Card
                  hoverable
                  style={{
                    width: 150,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="" description="www.instagram.com" />
                </Card>
                <div className="ml-6">
                  <h2 class="mot-bs-ten">
                    <Link to="">Bác sĩ Nguyễn Thy Nga</Link>
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
                  <div class="bs-fb">
                    {/* <div
                      class="fb-like fb_iframe_widget"
                      data-width=""
                      data-layout="button_count"
                      data-action="like"
                      data-size="small"
                      data-share="true"
                      fb-xfbml-state="rendered"
                      fb-iframe-plugin-query="action=like&amp;app_id=1029975067121593&amp;container_width=535&amp;href=https%3A%2F%2Fbookingcare.vn%2Fpho-giao-su-tien-si-vu-thi-thanh-thuy-d118.html%3Fck%3D1%26dv%3D1&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=true&amp;size=small&amp;width="
                    >
                      <span style="vertical-align: bottom; width: 150px; height: 28px;">
                        <iframe
                          name="f5a262e638142"
                          width="1000px"
                          height="1000px"
                          data-testid="fb:like Facebook Social Plugin"
                          title="fb:like Facebook Social Plugin"
                          frameborder="0"
                          allowtransparency="true"
                          allowfullscreen="true"
                          scrolling="no"
                          allow="encrypted-media"
                          src="https://www.facebook.com/v14.0/plugins/like.php?action=like&amp;app_id=1029975067121593&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df33e263a630d03c%26domain%3Dbookingcare.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fbookingcare.vn%252Ff27c69574581a64%26relation%3Dparent.parent&amp;container_width=535&amp;href=https%3A%2F%2Fbookingcare.vn%2Fpho-giao-su-tien-si-vu-thi-thanh-thuy-d118.html%3Fck%3D1%26dv%3D1&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=true&amp;size=small&amp;width="
                          style="border: none; visibility: visible; width: 150px; height: 28px;"
                          class=""
                        ></iframe>
                      </span>
                    </div> */}
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
                defaultValue={moment(Schedule[0]?.value).format("dddd - DD/MM")}
                stateTasksOptions
              >
                {allDays?.map((item) => (
                  <Option
                    key={item.value}
                    value={item.value}
                    style={{ textTransform: "uppercase" }}
                  >
                    {item.label}
                  </Option>
                ))}
              </Select>
              <div className="mt-4">
                <div className="pb-4 w-[100%] overflow-x-visible group">
                  {Schedule?.map((e) => (
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

export default BookingCareDetail;
