import { Button } from "antd";
import React from "react";
import { Services } from "../Models/data";

const News = () => {
  return (
    <div>
      <div className="pt-10">
        <div className="w-[100%] max-w-[1210px] mx-auto my-0 px-3 pb-15">
          <div className="container-wrapper">
            <div className="pt-8 mb-8">
              <h1 className="p-0 text-3xl uppercase text-left flex flex-col items-center text-[#007cc2] ">
                Tin tức
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
              {Services?.map((item) => (
                <>
                  <div
                    key={item.id}
                    className="pb-5 border border-solid border-zinc-300 hover:shadow-2xl transition-all"
                  >
                    <div className="item-wrap group">
                      <div className="image-wrap">
                        <div className="w-[100%] max-w-[100%]">
                          <img
                            className="transition-all translate-y-0 group-hover:-translate-y-5"
                            src="https://nhakhoanucuoiviet.vn/uploads/static/image007.jpg"
                          />
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="title">
                          <a
                            href="https://nhakhoanucuoiviet.vn/chuong-trinh-su-kien/nang-cao-suc-khoe-rang-mieng-va-tham-my-nu-cuoi-la-tieu-chi-uu-tien-cua-xa-hoi-van-minh"
                            title="NÂNG CAO SỨC KHỎE RĂNG MIỆNG VÀ THẨM MỸ NỤ CƯỜI LÀ TIÊU CHÍ ƯU TIÊN CỦA XÃ HỘI VĂN MINH"
                          >
                            NÂNG CAO SỨC KHỎE RĂNG MIỆNG VÀ THẨM MỸ NỤ CƯỜI LÀ
                            TIÊU CHÍ ƯU TIÊN CỦA XÃ HỘI VĂN MINH
                          </a>
                        </h4>
                        <div className="flex justify-end text-slate-400">
                          15-11-2022
                        </div>
                        <div className="line-clamp-3 align-baseline ">
                          Sức khoẻ răng miệng &amp; Thẩm mỹ nụ cười đang ngày
                          càng trở thành tiêu chí, thước đo hạnh phúc trong cuộc
                          sống. Một nụ cười rạng ngời không chỉ mang chức năng
                          giao tiếp, mà còn là ngôn ngữ thể hiện sự hạnh phúc,
                          kết nối thế giới. Một hàm răng khỏe đẹp không chỉ đảm
                          bảo cho bạn một cơ thể dồi dào sinh khí, mà còn liên
                          quan mật thiết đến tinh thần, mang lại cho bạn sự tự
                          tin, thành công.
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
