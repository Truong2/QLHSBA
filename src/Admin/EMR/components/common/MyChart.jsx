import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Chart } from 'react-chartjs-2';

function MyChart({ type, data, otherData, label, otherLabel, title }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: true,
        text: title,
        position: 'top',
        color: '#000000',
        padding: 8,
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#000000',
          size: 18,
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 100,
        },
        grid: {
          color: 'transparent',
        },
      },
      x: {
        ticks: {
          color: '#000000',
          size: 18,
          beginAtZero: true,
        },
        grid: {
          color: 'transparent',
        },
      },
    },
  };

  const [userData, setUserData] = useState({
    labels: data.map((item) => item.label),
    datasets: [
      {
        label,
        data: data.map((item) => item.userGain),
        backgroundColor: '#007bff',
        borderWidth: 2,
      },
      {
        label: otherLabel,
        data: otherData.map((item) => item.userGain),
        backgroundColor: '#ced4da',
        borderWidth: 2,
      },
    ],
  });

  return <Chart type={type} data={userData} options={options} />;
}

MyChart.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  otherLabel: PropTypes.string,
  data: PropTypes.array,
  otherData: PropTypes.array,
};

export default MyChart;
