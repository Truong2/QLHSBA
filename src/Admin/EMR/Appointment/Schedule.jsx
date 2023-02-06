import React from "react";
import UrlBreadcrumb from "../../common/utils/UrlBreadcrumb";
import MedicalSchedule from "../components/MedicalSchedule";

const Schedule = () => {
  return (
    <>
      <UrlBreadcrumb type={"appointment"} style={{ margin: "20px" }} />
      <div className="bg-white">
        <div className="py-[15px] px-2">
          <div className="container-fluid">
            <div className="flex items-center justify-start mx-4">
              <div className="mr-4 pt-2">
                <h1 className="uppercase text-xl">
                  Quản lý kế hoạch khám bệnh của bác sỹ
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xl">Lịch khám bệnh của bác sỹ</div>
        <MedicalSchedule />
      </div>
    </>
  );
};

export default Schedule;
