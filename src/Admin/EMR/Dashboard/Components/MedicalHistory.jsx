import { DoubleRightOutlined } from "@ant-design/icons";
import { Button, DatePicker, Table } from "antd";
import React, { useState } from "react";
import {
  heartbeat,
  hypertension,
  sugarBloodLevel,
  temperature,
} from "../../../../App/Images";
import { LineChart } from "../../Chart";
import { Data } from "../../Chart/data";
import VitalSigns from "../Modal/VitalSigns";

const dateFormatList = "DD/MM/YYYY";
const MedicalHistory = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    skip: 0,
    take: 10,
    total: 0,
  });
  const [rowSelection, setRowSelection] = useState({});
  const [isModal, setIsModal] = useState(false);
  const [dataVitalSigns, setDataVitalSigns] = useState({
    SBP: "80",
    bloodPressure: "105",
    bloodSugar: "140",
    heartbeat: "90",
    height: "170",
    temperature: "36",
    time: "",
    weight: "54",
  });
  const [chartData, setChartData] = useState({
    labels: Data?.map((data) => data.month),
    datasets: [
      {
        label: "Foo ",
        data: Data?.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "#50AF95",
        borderWidth: 2,
      },
      {
        label: "Bar",
        data: Data?.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  });

  const handleRecord = (record) => {
    console.log("record", record);
  };
  const columns = [
    { title: "Tên phiếu", dataIndex: "name", key: "name", fixed: true },
    { title: "Đối tượng ", dataIndex: "type", key: "type" },
    { title: "Người tạo ", dataIndex: "owner", key: "owner" },
    { title: "Thời gian ", dataIndex: "created", key: "created" },
    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <div className="flex">
            <Button>Xem</Button>
            <Button>Sửa</Button>
            <Button>Xoá</Button>
            <Button>Yêu cầu ký</Button>
          </div>
        );
      },
    },
  ];
  const dataDescription = [
    {
      key: 1,
      name: "Phiếu chỉ định",
      type: "Điều dưỡng",
      owner: "DD. Nguyễn Thị Lan Anh",
      created: "06:00 03/08/2022",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 2,
      name: "Phiếu chỉ định",
      type: "Điều dưỡng",
      owner: "DD. Nguyễn Thị Lan Anh",
      created: "06:00 03/08/2022",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 3,
      name: "Phiếu chỉ định",
      type: "Điều dưỡng",
      owner: "DD. Nguyễn Thị Lan Anh",
      created: "06:00 03/08/2022",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 4,
      name: "Phiếu chỉ định",
      type: "Điều dưỡng",
      owner: "DD. Nguyễn Thị Lan Anh",
      created: "06:00 03/08/2022",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 5,
      name: "Tờ điều trị",
      type: "Bác sĩ ",
      owner: "DD. Nguyễn Thị Lan Anh",
      created: "06:00 03/08/2022",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 6,
      name: "Tờ điều trị ",
      type: "Bác sĩ ",
      owner: "DD. Nguyễn Thị Lan Anh",
      created: "06:00 03/08/2022",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 7,
      name: "Tờ điều trị ",
      type: "Bác sĩ ",
      owner: "DD. Nguyễn Thị Lan Anh",
      created: "06:00 03/08/2022",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 8,
      name: "Tờ điều trị ",
      type: "Bác sĩ ",
      owner: "DD. Nguyễn Thị Lan Anh",
      created: "06:00 03/08/2022",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
  ];
  const onChangeTable = (newPagination) => {
    setPagination({
      ...pagination,
      current: newPagination.current,
      skip: (newPagination.current - 1) * pagination.take,
      take: newPagination.pageSize,
    });
  };
  const configPagination = {
    position: ["bottomRight"],
    pageSize: pagination?.take,
    current: pagination?.current,
    total: pagination?.total,
  };
  return (
    <div className="">
      <div className="flex justify-between rounded bg-white p-2 shadow-md img">
        <div className="flex gap-2 w-1/2 justify-between">
          <Button
            style={{
              borderColor: "#466c95",
              background: "#466c95",
              color: "white",
            }}
          >
            Sinh hiệu
          </Button>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={() => setIsModal(true)}
            style={{
              borderColor: "#466c95",
              background: "#466c95",
              color: "white",
            }}
          >
            Nhập giá trị{" "}
          </Button>
          <div className="font-semibold my-auto"> Ngày điều trị thứ: 1</div>
          <div className="flex gap-2">
            <DatePicker format={dateFormatList} />
          </div>
          <Button
            style={{
              borderColor: "#466c95",
              background: "#466c95",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DoubleRightOutlined />
            <span className="flex item-center text-center">Ngày tiếp theo</span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:flex gap-3 mt-4">
        <div className="flex-1 rounded-md shadow-md bg-gradient-to-r from-blue-800 w-full">
          <div className="flex h-full">
            <div className="p-5 h-full text-left w-2/3 text-white grid">
              <div className="font-medium text-xs 2xl:text-lg">Nhịp tim</div>
              <div className="flex gap-2">
                <p className="font-bold text-sm 2xl:text-2xl my-auto">
                  {dataVitalSigns?.heartbeat}
                </p>
                <p className="font-semibold text-xs my-auto">bpm</p>
              </div>
            </div>
            <div className="h-full bg-blue-800 w-1/3 rounded-l-full grid justify-items-center">
              <img
                className="max-h-12 2xl:max-h-20 my-auto"
                src={heartbeat}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-md shadow-md bg-gradient-to-r from-blue-800 w-full">
          <div className="flex h-full">
            <div className="p-5 h-full text-left w-2/3 text-white grid">
              <div className="font-medium text-xs 2xl:text-lg">Huyết áp</div>
              <div className="flex gap-2">
                <p className="font-bold text-sm 2xl:text-2xl my-auto">
                  {dataVitalSigns?.bloodPressure}
                </p>
                <p className="font-semibold text-xs my-auto">mmHg</p>
              </div>
            </div>
            <div className="h-full bg-blue-800 w-1/3 rounded-l-full grid justify-items-center">
              <img
                className="max-h-12 2xl:max-h-20 my-auto"
                src={hypertension}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-md shadow-md bg-gradient-to-r from-blue-800 w-full">
          <div className="flex h-full">
            <div className="p-5 h-full text-left w-2/3 text-white grid">
              <div className="font-medium text-xs 2xl:text-lg">Đường huyết</div>
              <div className="flex gap-2">
                <p className="font-bold text-sm 2xl:text-2xl my-auto">
                  {dataVitalSigns?.bloodSugar}
                </p>
                <p className="font-semibold text-xs my-auto">mg/dL</p>
              </div>
            </div>
            <div className="h-full bg-blue-800 w-1/3 rounded-l-full grid justify-items-center">
              <img
                className="max-h-12 2xl:max-h-20 my-auto"
                src={sugarBloodLevel}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-md shadow-md bg-gradient-to-r from-blue-800 w-full">
          <div className="flex h-full">
            <div className="p-5 h-full text-left w-2/3 text-white grid">
              <div className="font-medium text-xs 2xl:text-lg">Nhiệt độ</div>
              <div className="flex gap-2">
                <p className="font-bold text-sm 2xl:text-2xl my-auto">
                  {dataVitalSigns?.temperature}
                </p>
                <p className="font-semibold text-xs my-auto">℃</p>
              </div>
            </div>
            <div className="h-full bg-blue-800 w-1/3 rounded-l-full grid justify-items-center">
              <img
                className="max-h-12 2xl:max-h-20 my-auto"
                src={temperature}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Biểu đồ */}
      <div className="grid grid-cols-1 lg:flex gap-8 w-full mt-11 justify-between">
        <div
          className="bg-white p-4 rounded-md shadow-md w-full relative"
          style={{
            borderBottom: "5px solid rgb(16, 54, 116)",
            borderTopColor: "rgb(16, 54, 116)",
            borderRightColor: "rgb(16, 54, 116)",
            borderLeftColor: "rgb(16, 54, 116)",
          }}
        >
          <h1
            className="font-bold text-base 2xl:text-2xl text-white bg-blue-800 w-1/3 text-center absolute -top-6 rounded-md "
            style={{ padding: "5px" }}
          >
            {" "}
            Huyết áp
          </h1>
          <div className="" style={{ maxWidth: "100%", position: "relative" }}>
            <LineChart data={chartData} />
          </div>
        </div>
        <div
          className="bg-white p-4 rounded-md shadow-md w-full relative"
          style={{
            borderBottom: "5px solid rgb(16, 54, 116)",
            borderTopColor: "rgb(16, 54, 116)",
            borderRightColor: "rgb(16, 54, 116)",
            borderLeftColor: "rgb(16, 54, 116)",
          }}
        >
          <h1
            className="font-bold text-base 2xl:text-2xl text-white bg-blue-800 w-1/3 text-center absolute -top-6 rounded-md "
            style={{ padding: "5px" }}
          >
            {" "}
            Nhiệt độ
          </h1>
          <div className="" style={{ maxWidth: "100%", position: "relative" }}>
            <LineChart data={chartData} />
          </div>
        </div>
        <div
          className="bg-white p-4 rounded-md shadow-md w-full relative"
          style={{
            borderBottom: "5px solid rgb(16, 54, 116)",
            borderTopColor: "rgb(16, 54, 116)",
            borderRightColor: "rgb(16, 54, 116)",
            borderLeftColor: "rgb(16, 54, 116)",
          }}
        >
          <h1
            className="font-bold text-base 2xl:text-2xl text-white bg-blue-800 w-1/3 text-center absolute -top-6 rounded-md "
            style={{ padding: "5px" }}
          >
            {" "}
            Nhịp tim
          </h1>
          <div className="" style={{ maxWidth: "100%", position: "relative" }}>
            <LineChart data={chartData} />
          </div>
        </div>
      </div>
      <div
        className="flex mt-4 gap-4 shadow-md bg-white rounded-md p-2"
        style={{
          borderLeft: "10px solid rgb(16, 54, 116)",
          borderTopColor: "rgb(16, 54, 116)",
          borderRightColor: "rgb(16, 54, 116)",
          borderBottomColor: "rgb(16, 54, 116)",
        }}
      >
        <div className="w-full p-3 max-h-[500px] overflow-auto">
          <h1
            className="text-lg 2xl:text-2xl font-bold bg-gradient-to-r from-blue-800 w-1/3 p-2 text-white rounded-l-md"
            style={{ padding: "5px" }}
          >
            {" "}
            Thông tin theo dõi
          </h1>
          <div className="">
            <div
              className="ant-divider ant-divider-horizontal ant-divider-dashed ant-divider-with-text ant-divider-with-text-left"
              role="separator"
            >
              <span className="ant-divider-inner-text">
                <p className="font-bold text-lg my-auto text-gray-500">
                  7:00 am
                </p>
              </span>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-3 list-disc gap-2">
              <li>Bệnh nhân tỉnh, GCS 15 điểm</li>
              <li>Liệt nửa người phải cơ lực 5-/5</li>
              <li>Bán manh 1/4 dưới phải</li>
              <li>Tê bì giảm cảm giác nửa người phải</li>
              <li>Gáy mềm</li>
              <li>Tim nhịp đều</li>
              <li>Phổi thông khí 2 bên đều</li>
              <li>Bụng mềm</li>
            </ul>
            <div
              className="ant-divider ant-divider-horizontal ant-divider-dashed ant-divider-with-text ant-divider-with-text-left"
              role="separator"
            >
              <span className="ant-divider-inner-text">
                <p className="font-bold text-lg my-auto text-gray-500">
                  10:00 am
                </p>
              </span>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-3 list-disc gap-2">
              <li>Bệnh nhân tỉnh, GCS 15 điểm</li>
              <li>Không nói khó</li>
              <li>Liệt nửa người phải cơ lực 5-/5</li>
              <li>Bán manh 1/4 dưới phải</li>
              <li>Tê bì giảm cảm giác nửa người phải</li>
              <li>Gáy mềm</li>
              <li>Tim nhịp đều</li>
              <li>Phổi thông khí 2 bên đều</li>
              <li>Bụng mềm</li>
            </ul>
            <div
              className="ant-divider ant-divider-horizontal ant-divider-dashed ant-divider-with-text ant-divider-with-text-left"
              role="separator"
            >
              <span className="ant-divider-inner-text">
                <p className="font-bold text-lg my-auto text-gray-500">
                  1:00 pm
                </p>
              </span>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-3 list-disc gap-2">
              <li>Bệnh nhân tỉnh, GCS 15 điểm</li>
              <li>Không nói khó</li>
              <li>Liệt nửa người phải cơ lực 5-/5</li>
              <li>Bán manh 1/4 dưới phải</li>
              <li>Tê bì giảm cảm giác nửa người phải</li>
              <li>Gáy mềm</li>
              <li>Tim nhịp đều</li>
              <li>Phổi thông khí 2 bên đều</li>
              <li>Bụng mềm</li>
            </ul>
            <div
              className="ant-divider ant-divider-horizontal ant-divider-dashed ant-divider-with-text ant-divider-with-text-left"
              role="separator"
            >
              <span className="ant-divider-inner-text">
                <p className="font-bold text-lg my-auto text-gray-500">
                  3:00 pm
                </p>
              </span>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-3 list-disc gap-2">
              <li>Bệnh nhân tỉnh, GCS 15 điểm</li>
              <li>Không nói khó</li>
              <li>Liệt nửa người phải cơ lực 5-/5</li>
              <li>Bán manh 1/4 dưới phải</li>
              <li>Tê bì giảm cảm giác nửa người phải</li>
              <li>Gáy mềm</li>
              <li>Tim nhịp đều</li>
              <li>Phổi thông khí 2 bên đều</li>
              <li>Bụng mềm</li>
            </ul>
            <div
              className="ant-divider ant-divider-horizontal ant-divider-dashed ant-divider-with-text ant-divider-with-text-left"
              role="separator"
            >
              <span className="ant-divider-inner-text">
                <p className="font-bold text-lg my-auto text-gray-500">
                  8:00 pm
                </p>
              </span>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-3 list-disc gap-2">
              <li>Bệnh nhân tỉnh, GCS 15 điểm</li>
              <li>Không nói khó</li>
              <li>Liệt nửa người phải cơ lực 5-/5</li>
              <li>Bán manh 1/4 dưới phải</li>
              <li>Tê bì giảm cảm giác nửa người phải</li>
              <li>Gáy mềm</li>
              <li>Tim nhịp đều</li>
              <li>Phổi thông khí 2 bên đều</li>
              <li>Bụng mềm</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md shadow-md mt-5 ">
        <div className="flex justify-between mt-5 p-3">
          <h1 className="uppercase font-bold text-lg text-blue-700 my-auto">
            CÁC PHIẾU ĐƯỢC TẠO TRONG NGÀY
          </h1>
          <a href="/choose-note-type" className="">
            <button className="ant-btn ant-btn-primary shadow-md" type="button">
              <span
                role="img"
                aria-label="plus-circle"
                className="anticon anticon-plus-circle"
              >
                <svg
                  focusable="false"
                  className=""
                  data-icon="plus-circle"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  viewBox="64 64 896 896"
                >
                  <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
              </span>
              <span>Tạo Phiếu</span>
            </button>
          </a>
        </div>
        <div className=" overflow-hidden">
          <Table
            rowClassName={(record) => {
              if (record.name) {
                return "NotExpandible";
              }
            }}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataDescription}
            pagination={configPagination}
            className=""
            rowKey={(record) => record.key || record.userId}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  handleRecord(record);
                },
              };
            }}
            onChange={onChangeTable}
          />
        </div>
      </div>
      {/* modal */}
      <VitalSigns
        isModalOpen={isModal}
        setIsModal={setIsModal}
        setDataVitalSigns={setDataVitalSigns}
      />
    </div>
  );
};

export default MedicalHistory;
