import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FiCheck } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { DotLoader } from "react-spinners";
import { login } from "../../service/services";
import toast from "react-hot-toast";
import loginbgsvg from "../../assets/images/charge.svg";
import GoogleLoginButton from "../../component/GoogleLogin";
// import { GoogleLogin } from "react-google-login";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await login(data);

      if (response.status === 201) {
        const { token } = response.data;
        toast.success("User logged in successfully!");
        localStorage.setItem("accessToken", token);
        navigate("/home");
      } else {
        toast.error("Invalid email or password.");
      }
    } catch (error) {
      toast.error("Email or password is incorrect");
    } finally {
      setLoading(false);
    }
  };


  const responseGoogleSuccess = (response) => {
    const tokenId = response.tokenId; // You'll need this tokenId for your backend
    // You can send tokenId to your server for further validation or user creation
    toast.success("Google login successful!");
    localStorage.setItem("accessToken", tokenId);
    navigate("/home");
  };

  const responseGoogleFailure = (error) => {
    console.error("Google login failed", error);
    toast.error("Google login failed. Please try again.");
  };


  return (
    <div className=" flex items-center justify-center bg-contain bg-no-repeat bg-bottom relative sm:bg-[url('../../assets/images/bglogin.jpg')] bg-[url('../../assets/images/loginbgmobile.jpg')] overflow-x-hidden z-50">
      <div className="absolute md:top-5 -top-5 md:right-0 -right-5">
        <img src={loginbgsvg} alt="" />
      </div>
      <div className="absolute inset-1/2 bg-white"></div>
      <div className="relative z-10 md:w-[25%] sm:w-[60%] w-full md:mx-0 mx-5 flex flex-col justify-between min-h-screen">
        <div className="space-y-6 lg:mt-[40%] sm:mt-[30%] mt-[40%]">
          <h2 className="text-4xl font-bold text-lightblack">
            Welcome <span className="text-blue">Mate</span>!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Please enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none text-[#515151]"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Please enter yout password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none text-[#515151]"
                  {...register("password", {
                    required: "Please enter your password",
                  })}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-3.5 cursor-pointer text-gray-500"
                >
                  <FontAwesomeIcon
                    icon={isPasswordVisible ? faEyeSlash : faEye}
                  />
                </span>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="relative flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="peer sr-only" />

                  <div className="w-4 h-4 rounded-full border border-black peer-checked:bg-blue-500 transition-colors" />
                  <FiCheck className="absolute bg-blue w-4 h-4 text-white hidden peer-checked:block rounded-full" />

                  <span className="text-black text-sm select-none">
                    Remember My Login
                  </span>
                </label>

                <Link className="text-blue text-sm font-bold cursor-pointer">
                  Forgot Password?
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue text-white py-3 rounded-xl font-semibold flex items-center justify-center"
                  disabled={loading}
                >
                  {!loading ? "Log in" : <DotLoader color="#fff" size={21} />}
                </button>
              </div>

              <div className="flex justify-center space-x-4 pt-2">
                <GoogleLoginButton />
                {/* <GoogleLogin
                  clientId="452291029946-4c6efvvso8sinalku8hs8fvl9ocj8uss.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={responseGoogleSuccess}
                  onFailure={responseGoogleFailure}
                  cookiePolicy="single_host_origin"
                /> */}
              </div>
            </div>
          </form>
        </div>

        <div>
          <p className="text-center text-white md:pb-10 pb-5">
            Don’t Have An Account?&nbsp;
            <Link to="/singup" className="text-blue font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
