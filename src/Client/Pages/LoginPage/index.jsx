import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogInClient = () => {
  const [form] = Form.useForm();

  return (
    <>
      <div className="overflow-y-hidden bg-[url('https://nhakhoanucuoiviet.vn/frontend/online/images/online_cover.jpg')] ">
        <div className="h-[100vh]">
          <div className="">
            <div className="max-w-[1170px] my-0 mx-auto">
              <div className="pt-10">
                <div className="flex justify-center">
                  <Link to="/">
                    <img
                      src="https://nhakhoanucuoiviet.vn/logo.png"
                      style={{ width: "60%" }}
                    />
                  </Link>
                </div>
                <div className="pt-12">
                  <h1 className="text-5xl flex text-blue-400 text-center justify-center  ">
                    Giải pháp theo dõi sức khỏe toàn diện
                  </h1>
                </div>
                <div className="flex justify-center items-center flex-wrap z-10 relative pt-9 pb-3 ">
                  <div
                    className=" w-full max-w-[600px] p-6"
                    style={{
                      borderRadius: "1px solid #d8d8d8",
                      background: "rgba(255,255,255,0.8)",
                      boxShadow: "0 0 15px 0px rgb(27 117 188 / 50%)",
                    }}
                  >
                    <div className="text-[#585858] uppercase text-2xl font-normal text-center mb-5">
                      Bệnh án điện tử
                    </div>
                    <Form form={form} layout="vertical">
                      <Form.Item
                        label={
                          <>
                            <span className="text-xl text-[#1875BC]">
                              Tài khoản
                            </span>
                          </>
                        }
                      >
                        <Input placeholder="" />
                      </Form.Item>
                      <Form.Item
                        label={
                          <>
                            <span className="text-xl text-[#1875BC]">
                              Mật khẩu
                            </span>
                          </>
                        }
                      >
                        <Input placeholder="" />
                      </Form.Item>
                      <Form.Item
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          type="primary"
                          style={{
                            fontSize: "14px",
                            textAlign: "center",
                          }}
                        >
                          Đăng nhập
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <footer id="footer" className="home">
        <div className="container">
          <div className="container_inner">
            <div className="company" data-aos="fade-right">
              <div className="footer_logo">
                <label>Hệ thống Nha khoa Thẩm mỹ Nụ Cười Việt</label>
              </div>
              <div className="info">
                <p>
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                  <a href="tel:0899196854">0899 196 854</a>
                </p>
                <p>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  <a href="mailto:info@nhakhoanucuoiviet.vn">
                    info@nhakhoanucuoiviet.vn
                  </a>
                </p>
                <p>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>Trung tâm
                  1: 117 Nguyễn Huệ, TP Huế
                </p>
                <p>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <a href="tel:02342228841">0234 2228 841</a>
                </p>
                <p>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>Trung tâm
                  2: 111A Mai Thúc Loan, TP Huế
                </p>
                <p>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <a href="tel:02343599166">0234 3599 166</a>
                </p>
                <p>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>Trung tâm
                  3: 1215 Nguyễn Tất Thành, Hương Thủy
                </p>
                <p>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <a href="tel:0886881215">088 688 1215</a>
                </p>
              </div>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.8063342605329!2d107.59774350589494!3d16.458743254124524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a1486e8b64a9%3A0x2afa6bf1c5d6bb18!2zTmhhIEtob2EgTuG7pSBDxrDhu51pIFZp4buHdA!5e0!3m2!1svi!2s!4v1535379888106"
                frameborder="0"
                style="border:0"
                allowfullscreen=""
              ></iframe>
            </div>
            <div className="fan_page">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/nucuoivietmientrung/"
                data-tabs="timeline"
                data-height="264px"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/nucuoivietmientrung/"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/nucuoivietmientrung/"></a>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>© Copyright Hệ thống Nha khoa Thẩm mỹ Nụ Cười Việt</p>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default LogInClient;
