import React from "react";
import { Link } from "react-router-dom";
import ImageUpload from "../../component/ImageUpload";
import left from "../../assets/images/right.svg";
import Layout from "../../layout";
const AccountSetting = () => {
  return (
    <Layout>
      <div className="lg:w-custom w-[95%] mx-auto grid grid-cols-3 pt-10 items-center">
        <Link to="/profile-setting">
          <div className="flex">
            <div className="p-3 bg-white rounded-full custom-shadow ">
              <img className="w-[21px] h-[21px]" src={left} alt="" />
            </div>
          </div>
        </Link>
        <div className="md:col-span-1 col-span-2">
          <h1 className="text-[#4D4D4D] font-bold md:text-center text-start sm:text-[28px] text-xl">
            Account Settings
          </h1>
        </div>
      </div>
      <ImageUpload />
      <div className="lg:w-custom w-[95%] mx-auto grid sm:grid-cols-2 grid-cols-1 gap-5 sm:pt-10 pt-5">
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            Account Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC] text-[#4D4D4D]  focus:outline-none"
            placeholder="Alexa David"
          ></input>
        </div>
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC] text-[#4D4D4D]  focus:outline-none"
            placeholder="Alexadavid@email.com"
          ></input>
        </div>
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            Phone Number
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC] text-[#4D4D4D]  focus:outline-none"
            placeholder="+92 300 000 0000"
          ></input>
        </div>
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC] text-[#4D4D4D]  focus:outline-none"
            placeholder="**************"
          ></input>
        </div>
      </div>
      <hr className="text-[#ECECEC] my-5 hidden sm:block lg:w-custom  w-[95%] mx-auto" />
      <div className="text-end lg:w-custom w-[95%] mx-auto">
        <button className="px-10 py-2 bg-blue text-white rounded-2xl font-bold sm:mt-0 mt-5 w-full sm:w-auto">
          Update Profile
        </button>
      </div>
    </Layout>
  );
};

export default AccountSetting;
