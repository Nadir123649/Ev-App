import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import google from "../assets/images/google.svg";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = ({ handleGoogleSuccess, handleFailure }) => {
    const navigate = useNavigate();
    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                // Send token to your SSO login API
                const response = await axios.post("https://mobile.cova.ai/auth/sso-login", {
                    token: tokenResponse.access_token,
                    provider: "google",
                });

                if (response.status === 201) {
                    const { token } = response.data;
                    toast.success("User logged in successfully!");
                    localStorage.setItem("accessToken", token);
                    navigate("/home");
                } else {
                    toast.error("Invalid email or password.");
                }

                console.log(response, "resssssss")

                // Handle success response from your backend
                console.log("Login Success:", response.data);
            } catch (error) {
                console.error("Login failed:", error);
            }
        },
        onError: () => {
            console.error("Google Login failed");
        },
    });

    return (
        <button className="bg-[#EAEAEABF] md:px-6 px-8 py-2 rounded-[8px] flex items-center border-[1px] border-[#CACACA]" onClick={() => googleLogin()}>
            <img src={google} alt="" />
        </button>
    );
}

export default GoogleLoginButton;
