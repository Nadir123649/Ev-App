import React from "react";
import { Link } from "react-router-dom";
import teslalogo from "../../assets/images/teslalogo.png";
import teslaimg from "../../assets/images/teslacar.jpg";
import left from "../../assets/images/right.svg";
import battery from "../../assets/images/battery.svg";
import range from "../../assets/images/range.svg";
import chargespeed from "../../assets/images/chargespeed.svg";
import speed from "../../assets/images/speed.svg";
import timer from "../../assets/images/timer.svg";
import Layout from "../../layout";

const AddCars = () => {
  return (
    <Layout>
      <div className="lg:w-custom w-[95%] mx-auto grid grid-cols-3 pt-10 items-center">
        <div className="flex">
          <Link to="/car-details">
            <div className="p-3 bg-white rounded-full custom-shadow ">
              <img className="w-[21px] h-[21px]" src={left} alt="" />
            </div>
          </Link>
        </div>
        <div className="md:col-span-1  col-span-2">
          <h1 className="text-[#4D4D4D] font-bold sm:text-[28px] text-xl sm:text-center text-start">
            Add New EV
          </h1>
        </div>
      </div>
      <div className="lg:w-custom w-[95%] mx-auto grid sm:grid-cols-2 grid-cols-1 gap-5 pt-10">
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            EV Brand Name
          </label>
          <div className="px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC]">
            <select
              className="w-full  text-[#4D4D4D]  focus:outline-none"
              name=""
              id=""
            >
              <option value="">Tesla</option>
              <option value="">BYD</option>
              <option value="">BYD</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            EV Model
          </label>
          <div className="px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC]">
            <select
              className="w-full text-[#4D4D4D]  focus:outline-none"
              name=""
              id=""
            >
              <option value="">Model 3</option>
              <option value="">Model 2</option>
              <option value="">Model 1</option>
            </select>
          </div>
        </div>
      </div>
      <hr className="text-[#ECECEC] my-10 lg:w-custom w-[95%] mx-auto" />
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:w-custom w-[95%] mx-auto">
        <div className="flex justify-between items-center pb-5 sm:pb-0">
          <div className="w-1/2 items-center">
            <img className="w-[150px] mx-auto" src={teslalogo} alt="" />
            <h1 className="sm:text-3xl text-lg text-center font-bold  text-[#7F7F7F]">
              Tesla - Model 3
            </h1>
          </div>
          <div className="w-1/2">
            <img className="" src={teslaimg} alt="" />
          </div>
        </div>
        <hr className="text-[#ECECEC] my-2 w-full mx-auto sm:hidden block" />
        <div>
          <div className="flex justify-between py-2 border-b-[1px] border-[#D9D9D9]">
            <div className="flex items-center gap-3">
              <img src={battery} alt="" />
              <h1 className="lg:text-2xl sm:text-lg text-[#474747]">
                Battery Size:
              </h1>
            </div>
            <div>
              <h1 className="font-bold lg:text-2xl sm:text-lg text-[#474747]">
                100 kWh
              </h1>
            </div>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-[#D9D9D9]">
            <div className="flex items-center gap-3">
              <img src={range} alt="" />
              <h1 className="lg:text-2xl sm:text-lg text-[#474747]">
                Range Miles:
              </h1>
            </div>
            <div>
              <h1 className="font-bold lg:text-2xl sm:text-lg text-[#474747]">
                396 miles
              </h1>
            </div>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-[#D9D9D9]">
            <div className="flex items-center gap-3">
              <img src={chargespeed} alt="" />

              <h1 className="lg:text-2xl sm:text-lg text-[#474747]">
                Charging Speed:
              </h1>
            </div>
            <div>
              <h1 className="font-bold lg:text-2xl sm:text-lg text-[#474747]">
                Up to 250 kW
              </h1>
            </div>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-[#D9D9D9]">
            <div className="flex items-center gap-3">
              <img src={speed} alt="" />
              <h1 className="lg:text-2xl sm:text-lg text-[#474747]">
                Top Speed:
              </h1>
            </div>
            <div>
              <h1 className="font-bold lg:text-2xl sm:text-lg text-[#474747]">
                200 mph
              </h1>
            </div>
          </div>
          <div className="flex justify-between py-2  border-[#D9D9D9]">
            <div className="flex items-center gap-3">
              <img src={timer} alt="" />
              <h1 className="lg:text-2xl sm:text-lg text-[#474747]">
                0–60 mph (sec):{" "}
              </h1>
            </div>
            <div>
              <h1 className="font-bold lg:text-2xl sm:text-lg text-[#474747]">
                1.99 sec{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-[#ECECEC] my-10 lg:w-custom w-[95%] mx-auto" />
      <div className="text-center">
        <button className="px-10 py-2 bg-blue text-white rounded-2xl">
          Add To My Cars
        </button>
      </div>
    </Layout>
  );
};

export default AddCars;
