import axios from "axios";

const baseUrl = "https://mobile.cova.ai";

let authorization;  // Declare without a type

export const token = () => {
    const accessToken = localStorage.getItem("accessToken");
    authorization = "Bearer " + accessToken;
};

export const login = (data) => {
    const { email, password } = data;
    return axios.post(`${baseUrl}/auth/login`, {
        email,
        password,
    });
};

export const registeration = (data) => {
    const { email, password, userName } = data;
    return axios.post(`${baseUrl}/auth/signup`, {
        email,
        userName,
        password,
    });
};

export const logout = () => {
    return axios.post(`${baseUrl}/Account/Logout`, null, {
        headers: {
            "Content-Type": "application/json",
            Authorization: authorization,
        },
    });
};