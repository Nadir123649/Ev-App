import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import sliderimg from "../assets/images/station.jpg";
import { Link, useNavigate } from "react-router-dom";
import rightarrow from "../assets/images/right.svg";
import phone from "../assets/images/phone.svg";
import direction from "../assets/images/direcction.svg";

const StationSlider = ({stations}) => {

  const navigate = useNavigate();

  return (
    <div className="relative">
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: #AEE2FF;"></span>`;
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-[100%] h-[30vh] rounded-b-2xl"
            src={sliderimg}
            alt="Background"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[30vh] rounded-b-2xl"
            src={sliderimg}
            alt="Background"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[30vh] rounded-b-2xl"
            src={sliderimg}
            alt="Background"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[30vh] rounded-b-2xl"
            src={sliderimg}
            alt="Background"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[30vh] rounded-b-2xl"
            src={sliderimg}
            alt="Background"
          />
        </SwiperSlide>
      </Swiper>
      <div className="lg:w-custom w-[95%] flex justify-between absolute top-5 left-1/2 -translate-x-1/2 z-10">
        <Link to="/">
          <div className="p-3 bg-white rounded-full">
            <img className="w-[21px] h-[21px]" src={rightarrow} alt="" />
          </div>
        </Link>
        <div className="p-3 bg-blue rounded-full">
          <img className="w-[21px] h-[21px]" src={phone} alt="" />
        </div>
      </div>
      <div className="bg-white rounded-full p-2 absolute right-[10%] -bottom-5 z-30">
        <div className="bg-blue p-2 rounded-full cursor-pointer" onClick={() => navigate(`/tracking/${stations.id}`)}>
          <img src={direction} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StationSlider;
