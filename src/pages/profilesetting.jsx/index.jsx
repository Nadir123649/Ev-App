import React from "react";
import { Link } from "react-router-dom";
import left from "../../assets/images/right.svg";
import user from "../../assets/images/user.svg";
import charging from "../../assets/images/charging.svg";
import logout from "../../assets/images/logout.svg";
import Layout from "../../layout";

const ProfileSetting = () => {
  return (
    <Layout>
      <main>
        <div className="flex flex-col justify-between h-[100vh]">
          <div>
            <div className="lg:w-custom w-[95%] mx-auto grid grid-cols-3 items-center pt-10">
              <Link to="/home" >
                <div className="flex">
                  <div className="p-3 bg-white rounded-full custom-shadow ">
                    <img className="w-[21px] h-[21px]" src={left} alt="" />
                  </div>
                </div>
              </Link>
              <div className="md:col-span-1  col-span-2">
                <h1 className="text-[#4D4D4D] font-bold sm:text-[28px] text-xl sm:text-center text-start">
                  Profile Settings
                </h1>
              </div>
            </div>
            <hr className="text-[#ECECEC] mt-10 mb-5 lg:w-custom w-[95%] mx-auto" />
            <Link to="/account-setting">
              <div className="flex gap-3 items-center lg:w-custom w-[95%] mx-auto">
                <img className="w-[22px]" src={user} alt="" />
                <h1 className="text-[#4D4D4D] font-semibold sm:text-xl text-lg">
                  Account Settings
                </h1>
              </div>
            </Link>
            <hr className="text-[#ECECEC] my-5 lg:w-custom w-[95%] mx-auto" />
            <Link to="/charging-history">
              <div className="flex gap-3 items-center lg:w-custom w-[95%] mx-auto">
                <img src={charging} alt="" />
                <h1 className="text-[#4D4D4D] font-semibold sm:text-xl text-lg">
                  Charging History
                </h1>
              </div>
            </Link>
            <hr className="text-[#ECECEC] my-5 lg:w-custom w-[95%] mx-auto" />
          </div>
          <div className="sm:mb-20 mb-3">
            <hr className="text-[#ECECEC] mt-10 mb-5 lg:w-custom w-[95%] mx-auto" />
            <div className="flex gap-3 items-center lg:w-custom w-[95%] mx-auto">
              <img src={logout} alt="" />
              <h1 className="text-[#4D4D4D] font-semibold sm:text-xl text-lg">
                Logout
              </h1>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProfileSetting;
