import { Button, Modal } from "antd";
import moment from "moment";
import React from "react";

const PopUpSchedule = ({
  isSchedule,
  setIsSchedule,
  timeSchedule,
  hoursSchedule,
}) => {
  return (
    <Modal
      visible={isSchedule}
      onCancel={() => setIsSchedule(false)}
      centered
      closable={false}
      maskClosable
      width="50rem"
      bodyStyle={{
        padding: "2rem 1.9rem",
        maxHeight: "calc(100vh - 3rem)",
        overflow: "auto",
      }}
      destroyOnClose
    >
      <div className="mb-6">
        <div className="font-bold text-base justify-center flex mb-4 uppercase">
          Đặt lịch khám
        </div>
        <div className="flex items-center ">
          <div className="mr-6">
            <a href="#">
              <img
                src="https://cdn.bookingcare.vn/fr/w100/2019/12/31/155650-gs-ha-van-quyet.jpg"
                alt="Giáo sư, Tiến sĩ Hà Văn Quyết"
              />
            </a>
          </div>
          <div className="mot-bs-soluoc">
            <h1>Đặt lịch khám</h1>
            <h2 className="mot-bs-ten">
              <a href="#"> Giáo sư, Tiến sĩ Hà Văn Quyết </a>
            </h2>
            <div className="uppercase">
              {" "}
              {hoursSchedule} -{" "}
              {moment(timeSchedule).format("dddd - DD/MM/YYYY")}{" "}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopUpSchedule;
