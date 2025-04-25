import React from "react";
import tesla from "../assets/images/searchimage.png";
const SearchModels = () => {
  return (
    <div className="lg:w-[30%] md:w-[40%] sm:w-[45%] w-[95%]  px-4 border-l-[4px] rounded-2xl items-center border-l-blue absolute top-[12%] sm:translate-x-0 left-1/2 -translate-x-1/2 md:left-[40%]  lg:left-1/2 lg:-translate-x-1/2 searchmodelbg">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="font-bold sm:text-xl text-lg">Tesla - Model 3</h1>
          <h1 className="font-bold text-[#474747]">396 miles - 100 kWh</h1>
        </div>
        <div>
          <img className="md:w-full w-[130px]" src={tesla} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SearchModels;
