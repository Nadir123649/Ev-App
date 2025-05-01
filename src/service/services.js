import axios from "axios";
import axiosInstance from "./axiosInstance";

const baseUrl = process.env.REACT_APP_BASE_URL;

let authorization; // Declare without a type

export const token = () => {
  const accessToken = localStorage.getItem("accessToken");
  authorization = "Bearer " + accessToken;
};

export const login = (data) => {
  const { email, password } = data;
  return axiosInstance.post(`/api/auth/signin`, { email, password });
};

export const registeration = (data) => {
  const { email, password, name } = data;
  return axios.post(`${baseUrl}/api/auth/signup`, {
    email,
    name,
    password,
  });
};


