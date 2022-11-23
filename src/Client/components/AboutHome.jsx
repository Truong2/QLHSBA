import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Slider from "react-slick";
import { listQuote } from "../Models/data";

const AboutHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[rgb(247,250,253)]">
      <div className="w-[100%] max-w-[1210px] mx-auto my-0 px-3 pb-15 ">
        <div className="container-wrapper">
          <div className="pt-8 mb-8">
            <h1 className="flex items-center justify-center my-0 mx-auto font-normal text-3xl text-[rgb(0,124,194)]">
              Về chúng tôi
            </h1>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="w-[calc(50%-5px) py-4">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SNMJ49Q-Zm8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "10px" }}
              ></iframe>
            </div>
            <div className="w-[calc(50%-5px)] py-4 ">
              <Slider {...settings}>
                {listQuote?.map((item) => (
                  <div key={item.id} className="shadow-lg">
                    <div
                      className="px-3 mx-2 "
                      style={{
                        borderLeft: "10px solid #00a3ff",
                        borderRadius: "10px",
                        background: "white",
                      }}
                    >
                      <div className="pt-[33px] px-[50px] pb-[40px] ">
                        <h5 className="text-base text-zinc-600 font-normal">
                          {item.text}
                        </h5>
                        <div className="pt-5 flex flex-row items-start ">
                          <div className="m-0 flex items-center justify-center w-[30%]">
                            <img
                              src={item.linkImg}
                              alt=""
                              style={{ width: "50%", borderRadius: "100%" }}
                            />
                          </div>

                          <div className="flex flex-col items-start justify-between py-5">
                            <span className="text-2xl text-[#007cc2]">
                              Misoa
                            </span>
                            <span className="text-lg ">MC/Beauty Blogger</span>
                          </div>
                        </div>
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

export default AboutHome;
