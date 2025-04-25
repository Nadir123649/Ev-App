import React from "react";
import { Link } from "react-router-dom";
import ChargingSlider from "../../component/ChargingSlider";
import plusicon from "../../assets/images/plusicon.svg";
import battery from "../../assets/images/battery.svg";
import range from "../../assets/images/range.svg";
import chargespeed from "../../assets/images/chargespeed.svg";
import speed from "../../assets/images/speed.svg";
import timer from "../../assets/images/timer.svg";
import Layout from "../../layout";

const CarDetails = () => {
  return (
    <Layout>
      <main className="h-screen overflow-x-hidden overflow-y-scroll">
        <div className="lg:w-custom w-[95%] mx-auto grid grid-cols-3 pt-10 items-center">
          <div className="md:block hidden"></div>
          <div className=" md:col-span-1 col-span-2">
            <h1 className="text-[#4D4D4D] font-bold md:text-center text-end sm:text-[28px] text-xl lg:pr-0 pr-10">
              My EV’s
            </h1>
          </div>
          <div className="flex justify-end">
            <Link to="/add-new">
              <div className="sm:p-3 p-2 bg-blue rounded-full">
                <img className="w-[21px]" src={plusicon} alt="" />
              </div>
            </Link>
          </div>
        </div>
        <ChargingSlider />
        <div className="lg:w-[30%] w-[95%] mx-auto pt-5 pb-28">
          <div className="flex justify-between py-2 border-b-[1px] border-[#D9D9D9]">
            <div className="flex items-center gap-3">
              <img src={battery} alt="" />
              <h1 className="sm:text-2xl text-[#474747]">Battery Size:</h1>
            </div>
            <div>
              <h1 className="font-bold sm:text-2xl text-[#474747]">100 kWh</h1>
            </div>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-[#D9D9D9]">
            <div className="flex items-center gap-3">
              <img src={range} alt="" />
              <h1 className="sm:text-2xl text-[#474747]">Range Miles:</h1>
            </div>
            <div>
              <h1 className="font-bold sm:text-2xl text-[#474747]">
                396 miles
              </h1>
            </div>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-[#D9D9D9]">
            <div className="flex items-center gap-3">
              <img src={chargespeed} alt="" />
              <h1 className="sm:text-2xl text-[#474747]">Charging Speed:</h1>
            </div>
            <div>
              <h1 className="font-bold sm:text-2xl text-[#474747]">
                Up to 250 kW
              </h1>
            </div>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-[#D9D9D9]">
            <div className="flex items-center gap-3">
              <img src={speed} alt="" />
              <h1 className="sm:text-2xl text-[#474747]">Top Speed:</h1>
            </div>
            <div>
              <h1 className="font-bold sm:text-2xl text-[#474747]">200 mph</h1>
            </div>
          </div>
          <div className="flex justify-between py-2  border-[#D9D9D9]">
            <div className="flex items-center gap-3">
              <img src={timer} alt="" />
              <h1 className="sm:text-2xl text-[#474747]">0–60 mph (sec): </h1>
            </div>
            <div>
              <h1 className="font-bold sm:text-2xl text-[#474747]">
                1.99 sec{" "}
              </h1>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default CarDetails;
