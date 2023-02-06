import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgGirl from "../../App/Images/slider_1.jpg";
import { dataSlider } from "../Models/data";
import styled from "styled-components";

const SliderHomepage = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const Dot = styled.ul`
    position: absolute;
    bottom: 10px;
    text-align: center;
  `;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    appendDots: (dots) => <Dot>z{dots}</Dot>,
  };
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };
  return (
    <div className="w-[100%]  z-10">
      <Slider {...settings}>
        {dataSlider?.map((item) => (
          <div key={item.id} className="">
            <div className="">
              <img
                src={item.linkImg}
                alt={item.title}
                onError={handleErrorImage}
                style={{ height: "580px", width: "100%" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderHomepage;
