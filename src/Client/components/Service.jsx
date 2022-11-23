import React, { useEffect, useState } from "react";
import { Services } from "../Models/data";

const Service = () => {
  const [scrollService, setScrollService] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY >= 1200) {
        setScrollService(true);
      } else {
        setScrollService(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`pb-3 ${scrollService ? "animate-gradient" : ""}`}
        style={{
          background:
            "linear-gradient(-30deg, #ee7752, #23a6a5, #23a6d5, #23d5ab)",
          backgroundSize: "400% 100%",
        }}
      >
        <div className="w-[100%] max-w-[1210px] my-0 mx-auto  relative px-15">
          <div className="container-wrapper">
            <div className="pt-8 mb-8">
              <h1 className="flex items-center justify-center my-0 mx-auto font-normal  bg-clip-text text-transparent text-3xl text-white">
                Dịch vụ
              </h1>
            </div>
            <div className="flex items-center justify-between  flex-wrap">
              {Services?.map((item) => (
                <>
                  <div
                    key={item.id}
                    className="mt-2 mb-7 max-w-[240px] w-[25%] flex flex-col items-center justify-center group"
                  >
                    <div className="w-[150px] h-[150px] rounded-[100%] hover:shadow-2xl hover: shadow-indigo-500/40 transition-all">
                      <img
                        className="w-[100%] h-[100%] rounded-[100%] object-cover"
                        src={item.linkImg}
                      />
                    </div>
                    <div className="pt-3 px-1 text-white text-xl group-hover:text-[#004fa2] hover:cursor-pointer transition-all">
                      {item.nameService}
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

export default Service;
