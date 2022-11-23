import { Button } from "antd";
import React, { useEffect, useState } from "react";

const Wrapper = () => {
  const [scrollCard, setScrollCard] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY >= 500) {
        setScrollCard(true);
      } else {
        setScrollCard(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative max-w-[1210px] w-[100%] h-[100%] pt-10 mx-auto my-0">
      <div className="w-[100%] mb-8 p-0 text-center">
        <h1 className="p-0 text-3xl uppercase text-left flex flex-col items-center text-[#007cc2] ">
          <span className="">Chào mừng đến với</span>
          Nụ Cười Việt{" "}
        </h1>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="w-[50%] flex flex-row items-center justify-center">
          <img
            className="w-[100%]"
            src="https://nhakhoanucuoiviet.vn/uploads/static/Nha-Khoa-1.jpg"
          />
        </div>
        <div
          className={`w-[46%] mb-[4%] py-10 flex flex-row items-center justify-center ${
            scrollCard ? "animate-card " : ""
          }transition-all`}
        >
          <div className="bg-white shadow-2xl p-10  items-center rounded-xl">
            <p></p>
            <p>
              Nha Khoa Nụ Cười Việt là Trung tâm nha khoa thẩm mỹ hàng đầu, được
              bình chọn là Trung tâm nha khoa uy tín tại Thành phố Huế và khu
              vực Miền Trung. Chúng tôi sử dụng những thiết bị hiện đại nhất,
              những vật liệu tốt nhất, những quy trình điều trị tiên tiến nhất,
              những con người giỏi nhất để phục vụ Quý khách hàng.
            </p>
            <p></p>
            <div className="flex item-center justify-center">
              <Button type="primary" shape="round" size="large">
                Đọc thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
