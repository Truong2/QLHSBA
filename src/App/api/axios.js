import axios from "axios";

export default axios.create({
  baseURL: "https://639fed457aaf11ceb8a35215.mockapi.io",
});
// import axios from 'axios';

// const createAxiosInstance = (baseURL) => {
//   return axios.create({
//     baseURL: baseURL
//   });
// };

// const apiInstance = createAxiosInstance('https://dynamic-base-url.com/');

// apiInstance.get('/endpoint')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
