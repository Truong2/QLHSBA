import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import Map from "./Map";

const Footer = () => {
  // const key = "AIzaSyA4MQqBXpijdl5psxij5RLKJxD9hVknacM";
  return (
    <div className="bg-[#00a3ff] ">
      <div className=" pt-8 text-[#fff] overflow-hidden w-[100%] max-w-[1210px] mx-auto my-0 px-3 pb-2">
        <div className="flex flex-row justify-between">
          <div className="company" data-aos="fade-right">
            <div className="pb-4 text-xl uppercase shadow-sm">
              <label>Hệ thống Nha khoa Thẩm mỹ Nụ Cười Việt</label>
            </div>
            <div className="text-white">
              <p>
                <i
                  className="fa fa-mobile"
                  aria-hidden="true"
                  style={{ fontSize: "18px", width: "35px" }}
                ></i>
                <a className="text-white " href="tel:0899196854">
                  0899 196 854
                </a>
              </p>
              <p>
                <i
                  className="fa-regular fa-envelope"
                  style={{ fontSize: "18px", width: "35px" }}
                ></i>
                <a
                  className="text-white "
                  href="mailto:info@nhakhoanucuoiviet.vn"
                >
                  info@nhakhoanucuoiviet.vn
                </a>
              </p>
              <p>
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ fontSize: "18px", width: "35px" }}
                ></i>
                Trung tâm 1: 117 Nguyễn Huệ, TP Huế
              </p>
              <p>
                <i
                  className="fa fa-phone"
                  aria-hidden="true"
                  style={{ fontSize: "18px", width: "35px" }}
                ></i>
                <a className="text-white " href="tel:02342228841">
                  0234 2228 841
                </a>
              </p>
              <p>
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ fontSize: "18px", width: "35px" }}
                ></i>
                Trung tâm 2: 111A Mai Thúc Loan, TP Huế
              </p>
              <p>
                <i
                  className="fa fa-phone"
                  aria-hidden="true"
                  style={{ fontSize: "18px", width: "35px" }}
                ></i>
                <a className="text-white " href="tel:02343599166">
                  0234 3599 166
                </a>
              </p>
              <p>
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ fontSize: "18px", width: "35px" }}
                ></i>
                Trung tâm 3: 1215 Nguyễn Tất Thành, Hương Thủy
              </p>
              <p>
                <i
                  className="fa fa-phone"
                  aria-hidden="true"
                  style={{ fontSize: "18px", width: "35px" }}
                ></i>
                <a className="text-white " href="tel:0886881215">
                  088 688 1215
                </a>
              </p>
            </div>
          </div>
          {/* <div className="map">
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div
                  style={{
                    height: `90vh`,
                    margin: `auto`,
                    border: "2px solid black",
                  }}
                />
              }
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div> */}
          <div className="fb"></div>
        </div>
        <div className="flex items-center justify-center">
          <p className=" m-0 pb-2">
            © Copyright Hệ thống Nha khoa Thẩm mỹ Nụ Cười Việt
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
