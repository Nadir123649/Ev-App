import React from "react";
import star from "../assets/images/Star.svg";
import amount from "../assets/images/amount.svg";
import tyre from "../assets/images/tyre.svg";
import wifistation from "../assets/images/wifistation.svg";
import ladiesstation from "../assets/images/ladiesstation.svg";
import prayerstation from "../assets/images/prayerstation.svg";
import luchstation from "../assets/images/lunchstation.svg";
import waitingarea from "../assets/images/waitingarea.svg";
import cartstation from "../assets/images/cartstation.svg";
const ChargingStations = () => {
  return (
    <div>
      <div className="lg:w-custom w-[95%] mx-auto pt-10">
        <div className="flex justify-between items-start">
          <div className="flex gap-5">
            <div>
              <h1 className="font-bold md:text-[28px] text-xl">
                PSO EV Charging Station
              </h1>
              <h1 className="font-bold text-xl text-blue">Johar Town Lahore</h1>
            </div>
            <div className="hidden md:flex gap-3 items-start pt-2">
              <img src={star} alt="" />
              <h1 className="text-[#4D4D4D]">4.85</h1>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-[#01A757] font-bold">Open Now</h1>
            <div className="md:flex hidden items-center gap-2">
              <img className="w-[24px]" src={amount} alt="" />

              <h1 className="text-xl text-[#3A3A3A] ">Cost Per Unit:</h1>
              <h1 className="text-xl font-bold text-[#3A3A3A]">RS/110</h1>
            </div>
            <div className="flex md:hidden gap-3 items-center">
              <img src={star} alt="" />
              <h1 className="text-[#4D4D4D]">4.85</h1>
            </div>
          </div>
        </div>
        <hr className="text-[#ECECEC] my-5 md:hidden block" />
        <div className="md:hidden flex justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <img className="w-[24px]" src={amount} alt="" />
            <h1 className="md:text-xl text-base text-[#3A3A3A] ">
              Cost Per Unit:
            </h1>
          </div>
          <div>
            <h1 className="md:text-xl text-base font-bold text-[#3A3A3A]">
              RS/110
            </h1>
          </div>
        </div>
        <hr className="text-[#ECECEC] my-5" />
      </div>
      <div className="lg:w-custom w-[95%] mx-auto md:grid-cols-4 grid-cols-2 grid gap-5">
        <div className="bg-[#fafafa] p-3 border-[#D0D0D0] rounded-lg border-[1px] flex items-center gap-3">
          <img src={tyre} alt="" />
          <h1>CCS2</h1>
        </div>
        <div className="bg-[#fafafa] p-3 border-[#D0D0D0] rounded-lg border-[1px] flex items-center gap-3">
          <img src={tyre} alt="" />
          <h1>CCS2</h1>
        </div>
        <div className="bg-[#fafafa] p-3 border-[#D0D0D0] rounded-lg border-[1px] flex items-center gap-3">
          <img src={tyre} alt="" />
          <h1>CCS2</h1>
        </div>
        <div className="bg-[#fafafa] p-3 border-[#D0D0D0] rounded-lg border-[1px] flex items-center gap-3">
          <img src={tyre} alt="" />
          <h1>CCS2</h1>
        </div>
      </div>
      <hr className="text-[#ECECEC] my-5 lg:w-custom w-[95%] mx-auto" />
      <div className="flex lg:w-custom w-[95%] mx-auto gap-5 flex-wrap">
        <div className="w-[75px] flex justify-center flex-col items-center py-4 border-[1px] border-[#CFCFCF] rounded-2xl space-y-2">
          <img src={wifistation} alt="" />
          <h1 className="text-center text-[#4F4F4F] text-[10px] font-bold">
            Wifi
          </h1>
        </div>
        <div className="w-[75px] flex justify-center flex-col items-center py-4 border-[1px] border-[#CFCFCF] rounded-2xl space-y-2">
          <img src={ladiesstation} alt="" />
          <h1 className="text-center text-[#4F4F4F] text-[10px] font-bold">
            Washroom
          </h1>
        </div>
        <div className="w-[75px] flex justify-center flex-col items-center py-4 border-[1px] border-[#CFCFCF] rounded-2xl space-y-2">
          <img src={prayerstation} alt="" />
          <h1 className="text-center text-[#4F4F4F] text-[10px] font-bold">
            Namaz
          </h1>
        </div>
        <div className="w-[75px] flex justify-center flex-col items-center py-4 border-[1px] border-[#CFCFCF] rounded-2xl space-y-2">
          <img src={luchstation} alt="" />
          <h1 className="text-center text-[#4F4F4F] text-[10px] font-bold">
            Dine
          </h1>
        </div>
        <div className="w-[75px] flex justify-center flex-col items-center py-4 border-[1px] border-[#CFCFCF] rounded-2xl space-y-2">
          <img src={waitingarea} alt="" />
          <h1 className="text-center text-[#4F4F4F] text-[10px] font-bold">
            Waiting
          </h1>
        </div>
        <div className="w-[75px] flex justify-center flex-col items-center py-4 border-[1px] border-[#CFCFCF] rounded-2xl space-y-2">
          <img src={cartstation} alt="" />
          <h1 className="text-center text-[#4F4F4F] text-[10px] font-bold">
            Shop
          </h1>
        </div>
      </div>
      <hr className="text-[#ECECEC] my-5 lg:w-custom w-[95%] mx-auto" />
    </div>
  );
};

export default ChargingStations;
