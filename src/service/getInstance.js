// api.js or axiosInstance.js
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getInstance = axios.create({
  baseURL: baseUrl,
});

getInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default getInstance;
