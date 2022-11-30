import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { DoctorsSlider } from "../Models/data";

const Doctors = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const Dot = styled.ul`
    position: absolute;
    bottom: 10px;
    text-align: center;
  `;
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: "",
    }));
  };
  return (
    <div>
      <div className="w-[100%] max-w-[1210px] mx-auto my-0 px-3 pb-15">
        <div className="container-wrapper">
          <div className="pt-8 mb-8">
            <h1 className="flex items-center justify-center my-0 mx-auto font-normal bg-clip-text text-transparent text-3xl bg-gradient-to-r from-blue-700 to-indigo-700 ">
              Đội ngũ bác sỹ
            </h1>
          </div>
          <div className="box-body">
            <div className="team-listing responsive slick-initialized slick-slider">
              <Slider {...settings}>
                {DoctorsSlider?.map((item) => (
                  <div key={item.id} className="hover:-translate-y-5">
                    <div
                      className="px-3 mx-2 bg-[#fbfbfbfb] "
                      style={{
                        border: "1px solid #cccc",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={item.avatar}
                        alt={item.title}
                        onError={handleErrorImage}
                      />
                      <div className="pt-[33px] px-[30px] pb-[40px] h-[calc(100%-300px)] hover:bg-[#00a3ff]  group">
                        <p className=" group-hover:text-white">Bác sĩ</p>
                        <h5 className="text-[#5982C2] group-hover:text-white">
                          {" "}
                          {item.name}
                        </h5>
                        <p className=" group-hover:text-white">
                          {item.describe}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
