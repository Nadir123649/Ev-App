// api.js or axiosInstance.js
import axios from "axios";

const baseUrl = "http://ec2-98-81-110-168.compute-1.amazonaws.com:5000";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
