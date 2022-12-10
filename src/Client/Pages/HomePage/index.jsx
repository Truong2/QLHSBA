import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutHome from "../../components/AboutHome";
import Appointment from "../../components/Appointment";
import Doctors from "../../components/Doctor";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import News from "../../components/News";
import Service from "../../components/Service";
import SliderHomepage from "../../components/Slider";
import Wrapper from "../../components/Wrapper";
import Donors from "../../components/Donors";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Slider */}
      <SliderHomepage />
      {/* Wrapper */}
      <Wrapper />
      {/* Service */}
      <Service />
      {/* Doctors */}
      <Doctors />
      {/*  */}
      <AboutHome />
      {/* Đặt lịch */}
      <Appointment />
      {/* Tin tức */}
      <News />
      {/* Đối tác */}
      <Donors />
    </div>
  );
};

export default HomePage;
