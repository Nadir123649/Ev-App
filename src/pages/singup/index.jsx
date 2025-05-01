import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { DotLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { registeration } from "../../service/services";
import singupsvg from "../../assets/images/charge.svg";
import GoogleLoginButton from "../../component/GoogleLoginButton";

const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await registeration(data);

      if (response.status === 200) {
        toast.success("User Registration successful!");
        setTimeout(() => navigate("/"), 1500);
      } else {
        toast.error("User Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "User Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-contain bg-no-repeat bg-bottom relative sm:bg-[url('../../assets/images/bglogin.jpg')] bg-[url('../../assets/images/loginbgmobile.jpg')] overflow-x-hidden z-50">
      <div className="absolute md:top-5 -top-5 md:right-0 -right-5">
        <img src={singupsvg} alt="" />
      </div>
      <div className="absolute inset-1/2 bg-white"></div>
      <div className="relative z-10 md:w-[25%] sm:w-[60%] w-full md:mx-0 mx-5 flex flex-col justify-between min-h-screen">
        <div className="space-y-6 lg:mt-[40%] sm:mt-[30%] mt-[40%]">
          <h2 className="text-4xl font-bold text-lightblack">
            Welcome <span className="text-blue">Mate</span>!
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username */}
            <div className="mb-3">
              <input
                type="text"
                placeholder="Please enter username"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none text-[#515151]"
                {...register("name", {
                  required: "Please enter your user name",
                  minLength: {
                    value: 3,
                    message: "User name must be at least 3 characters long",
                  },
                })}
              />
              {errors.userName && <span className="text-red-500 text-sm">{errors.userName.message}</span>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <input
                type="email"
                placeholder="Please enter your email address"
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
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>
            {/* Password */}
            <div>
              <div className="mb-1 relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Please enter your password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none text-[#515151]"
                  {...register("password", {
                    required: "Please enter your password",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{12,}$/,
                      message: "Password must be 12+ characters, include uppercase, lowercase, digit, and symbol",
                    },
                  })}
                />
                <span
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
                </span>
              </div>
              {errors.password && <span className="text-red-500 text-sm block mt-0">{errors.password.message}</span>}
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="relative flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="peer sr-only" />

                <div className="w-4 h-4 rounded-full border border-black peer-checked:bg-blue-500 transition-colors" />
                <FiCheck className="absolute bg-blue w-4 h-4 text-white hidden peer-checked:block rounded-full" />

                <span className="text-black text-sm select-none">
                  Remember me
                </span>
              </label>

              {/* <Link className="text-blue text-sm font-bold cursor-pointer">
                Forgot Password?
              </Link> */}
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-blue text-white py-3 rounded-xl font-semibold h-[48px] flex items-center justify-center"
              >
                {!loading ? (
                  "Create account"
                ) : (
                  <DotLoader
                    color="#fff"
                    size={21} />
                )}
              </button>
            </div>
          </form>

          <div className="flex justify-center space-x-4 pt-2">
            <GoogleLoginButton />
          </div>
        </div>

        <div>
          <p className="text-center text-white md:pb-10 pb-5">
            Don’t Have An Account?&nbsp;
            <Link to="/" className="text-blue font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
