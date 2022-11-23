import { Button } from "antd";
import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { DonorsSlide } from "../Models/data";

const Donors = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const Dot = styled.ul`
    position: absolute;
    bottom: 10px;
    text-align: center;
  `;

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: "",
    }));
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black",
          background: "rgba(0,0,0,0.5)",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="w-[100%] max-w-[1210px] mx-auto my-0 px-3 pb-15">
        <div className="container-wrapper">
          <div className="pt-8 mb-8">
            <h1 className="flex items-center justify-center my-0 mx-auto font-normal bg-clip-text text-transparent text-4xl bg-gradient-to-r from-blue-700 to-indigo-700">
              Đối tác
            </h1>
          </div>
          <div className="box-body">
            <div className="relative">
              <Slider {...settings}>
                {DonorsSlide?.map((item) => (
                  <div
                    key={item.id}
                    className=" hover:border hover:border-solid hover:border-slate-300"
                  >
                    <div
                      className=" mx-2 "
                      style={{
                        border: "1px solid rgba(0, 0, 0,0.1)",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={item.linkImg}
                        alt={item.title}
                        onError={handleErrorImage}
                      />
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

export default Donors;
