import { Button, Form, Input } from "antd";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
  validateRequireInput,
} from "../.././App/validator";
import axios from "../../App/api/axios";
import { LOGIN_URL } from "../../App/api/urlApi";
import useAuth from "../../App/hooks/useAuth";
const { Item } = Form;

const LogInAdmin = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [isDirty, setIsDirty] = useState(false);
  const { setAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const onFinish = async (value) => {
    const res = await axios.get(LOGIN_URL);
    const { data } = res;
    if (data?.length > 0) {
      const account = data?.filter(
        (e) => e.userName === value.userName && e.passWord === value.passWord
      );
      if (account?.length > 0) {
        setLoading(true);
        setAuth({
          user: value.userName,
          pwd: value.passWord,
          roles: account[0]?.role,
          accessToken: "test",
        });
        localStorage.setItem(
          "AccountLogin",
          JSON.stringify({
            user: value.userName,
            pwd: value.passWord,
            roles: account[0]?.role,
            accessToken: "test",
          })
        );
        setTimeout(() => {
          setLoading(false);
          navigate("/emr");
        }, 2000);
      } else {
        setErrMsg("Sai tài khoản hoặc mật khẩu. Vui lòng thử lại");
      }
    }
  };

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
                      Quản lý Bệnh án điện tử
                      {errMsg && (
                        <p className="text-red-600 text-base normal-case	 ">
                          {errMsg}
                        </p>
                      )}
                    </div>
                    <Form
                      onFinish={(value) => {
                        onFinish(value);
                      }}
                      onValuesChange={() => !isDirty && setIsDirty(true)}
                      layout="vertical"
                    >
                      <Item
                        name="userName"
                        label={
                          <>
                            <span className="text-xl text-[#1875BC]">
                              Tài khoản
                            </span>
                          </>
                        }
                        required
                        rules={[
                          validateRequireInput("Không bỏ trống trường này"),
                          validateEmail("Vui lòng nhập đúng định dạng email"),
                        ]}
                      >
                        <Input placeholder="Nhập email" />
                      </Item>
                      <Item
                        name="passWord"
                        label={
                          <>
                            <span className="text-xl text-[#1875BC]">
                              Mật khẩu
                            </span>
                          </>
                        }
                        required
                        rules={[
                          validateRequireInput("Không bỏ trống trường này"),
                          validatePassword(
                            "Vui lòng nhập đúng định dạng: bao gồm chữ, số và các ký tự đặc biệt"
                          ),
                        ]}
                      >
                        <Input.Password placeholder="Nhập mật khẩu" />
                      </Item>

                      <div className="text-center my-8">
                        <Button
                          size="large"
                          type="primary"
                          htmlType="submit"
                          loading={loading}
                          style={{
                            width: "170px",
                            marginLeft: "10px",
                            textAlign: "center",
                          }}
                        >
                          Đăng nhập
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInAdmin;
