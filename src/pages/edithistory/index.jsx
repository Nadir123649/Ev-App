import React from "react";
import { Link } from "react-router-dom";
import left from "../../assets/images/right.svg";
import Layout from "../../layout";
const EditHistory = () => {
  return (
    <Layout>
      <div className="lg:w-custom w-[95%] mx-auto grid items-center grid-cols-3 pt-10">
        <Link to="/charging-history">
          <div className="flex">
            <div className="p-3 bg-white rounded-full custom-shadow ">
              <img className="w-[21px] h-[21px]" src={left} alt="" />
            </div>
          </div>
        </Link>
        <div>
          <h1 className="text-[#4D4D4D] font-bold text-center sm:text-[28px] text-xl">
            Add History
          </h1>
        </div>
      </div>
      <div className="lg:w-custom w-[95%] mx-auto grid sm:grid-cols-2 grid-cols-1 gap-5 pt-10">
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            Station Area
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC] text-[#4D4D4D]  focus:outline-none"
            placeholder="Johar Town Lhr"
          ></input>
        </div>
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            Station Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC] text-[#4D4D4D]  focus:outline-none"
            placeholder="PSO EV Charging Station"
          ></input>
        </div>
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC] text-[#4D4D4D]  focus:outline-none"
            placeholder="23/01/2025"
          ></input>
        </div>
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm " htmlFor="">
            Total Charging Cost
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC] text-[#4D4D4D]  focus:outline-none"
            placeholder="RS/3500"
          ></input>
        </div>
      </div>
      <hr className="text-[#ECECEC] my-10 lg:w-custom w-[95%] mx-auto sm:block hidden" />
      <div className="text-end lg:w-custom w-[95%] mx-auto sm:mt-0 mt-5">
        <button className="px-10 py-2 font-bold bg-blue text-white rounded-2xl sm:w-auto w-full">
          Add To History
        </button>
      </div>
    </Layout>
  );
};

export default EditHistory;
