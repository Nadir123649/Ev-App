import React from "react";
import { Link, useNavigate } from "react-router-dom";
import chargeicon from "../assets/images/chargeicon.svg";
import amountsvg from "../assets/images/amount.svg";
import cartsvg from "../assets/images/cart.svg";
import wifisvg from "../assets/images/wifi.svg";
import female from "../assets/images/female.svg";
import Prayer from "../assets/images/Prayer.svg";
import lunch from "../assets/images/lunch.svg";
import timepas from "../assets/images/timepas.svg";
import maplocation from "../assets/images/maplocation.svg";

const Sidebar = ({ stations }) => {
  
  const navigate = useNavigate();
  console.log(stations, "stations");

  return (
    <div className=" bg-white md:w-[370px] z-10  absolute sm:top-0 bottom-0 sm:p-3 p-5 sm:h-[100vh] h-[40vh] overflow-y-scroll overflow-x-hidden custom-scrollbar sm:left-0 sm:-translate-x-0  left-1/2 -translate-x-1/2 sm:rounded-t-none rounded-t-3xl sm:w-[350px]  w-[90%]">
      <div>
        <h1 className="text-black font-bold text-xl mb-3">Nearest locations</h1>
      </div>
      <div>
        {stations.length ? stations?.map((station) => (
          <div key={station._id} onClick={() => navigate(`/station-view/${station._id}`)} className="cursor-pointer">
            <Link>
              <div className="px-3 relative">
                <div className="p-1 bg-white rounded-full absolute -left-3 top-7">
                  <img src={chargeicon} alt="" />
                </div>
                <div className="bg-lightgray px-5 py-5 rounded-3xl">
                  <div className="flex justify-between items-end">
                    <div>
                      <h1 className="text-black font-bold text-sm">
                        {station.name.length > 30
                          ? `${station.name.substring(0, 30)}...`
                          : station.name}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-blue font-bold text-[10px]">
                        Distance: {station.distance} KM
                      </h1>
                    </div>
                  </div>
                  <hr className="text-[#D8D8D8] my-2" />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={amountsvg} alt="" />
                      </div>
                      <div>
                        <h1 className="text-sm text-balance">Per Unit Price:</h1>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-[#3A3A3A] font-bold text-sm">RS/{station.cost}</h1>
                    </div>
                  </div>
                  <hr className="text-[#D8D8D8] my-2" />
                  <div className="flex gap-2">
                    <div className={`p-2 rounded-full ${station.shop ? 'bg-[#4BB7F32B]' : 'bg-gray-200'}`}>
                      <img className="w-[18px]" src={cartsvg} alt="Shop" />
                    </div>
                    <div className={`p-2 rounded-full ${station.Wifi ? 'bg-[#4BB7F32B]' : 'bg-gray-200'}`}>
                      <img className="w-[18px]" src={wifisvg} alt="WiFi" />
                    </div>
                    <div className={`p-2 rounded-full ${station.washroom ? 'bg-[#4BB7F32B]' : 'bg-gray-200'}`}>
                      <img className="w-[18px]" src={female} alt="Washroom" />
                    </div>
                    <div className={`p-2 rounded-full ${station.namaz ? 'bg-[#4BB7F32B]' : 'bg-gray-200'}`}>
                      <img className="w-[18px]" src={Prayer} alt="Prayer" />
                    </div>
                    <div className={`p-2 rounded-full ${station.dine ? 'bg-[#4BB7F32B]' : 'bg-gray-200'}`}>
                      <img className="w-[18px]" src={lunch} alt="Dine" />
                    </div>
                    <div className={`p-2 rounded-full ${station.waiting ? 'bg-[#4BB7F32B]' : 'bg-gray-200'}`}>
                      <img className="w-[18px]" src={timepas} alt="Waiting" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-1 absolute rounded-full -bottom-3 right-8">
                  <div className="p-2 bg-blue rounded-full cursor-pointer" onClick={() => navigate(`/station-view/${station._id}`)} >
                    <img src={maplocation} alt="" />
                  </div>
                </div>
              </div>
            </Link>
            <hr className="mx-3 mt-5 mb-3 text-[#D8D8D8]" />
          </div>
        )) : <></>}
      </div>
    </div>
  );
};

export default Sidebar;
