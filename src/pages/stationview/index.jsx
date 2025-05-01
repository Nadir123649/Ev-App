import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import sliderimg from "../../assets/images/station.jpg";
import { Link, useNavigate } from "react-router-dom";
import leftarrow from "../../assets/images/left-arrow.svg";
import star from "../../assets/images/Star.svg";
import amount from "../../assets/images/amount.svg";
import tyre from "../../assets/images/tyre.svg";
import wifistation from "../../assets/images/wifistation.svg";
import ladiesstation from "../../assets/images/ladiesstation.svg";
import prayerstation from "../../assets/images/prayerstation.svg";
import luchstation from "../../assets/images/lunchstation.svg";
import waitingarea from "../../assets/images/waitingarea.svg";
import cartstation from "../../assets/images/cartstation.svg";
import direction from "../../assets/images/direcction.svg";
import getInstance from "../../service/getInstance";

const StationView = () => {
  const [station, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getInstance.get(`/stations/${id}`)
      .then((response) => {
        setStations(response.data?.data || {});
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  console.log("sta",station);

  return (
    loading ? (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
          <div class="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      </div>
    ) : (
      <Layout>
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
            <Link to="/home">
              <div className="p-3 bg-white rounded-full">
                <img className="w-[21px] h-[21px]" src={leftarrow} alt="" />
              </div>
            </Link>
          </div>
          <div className="bg-white rounded-full p-2 absolute right-[10%] -bottom-5 z-30">
            <div className="bg-blue p-2 rounded-full cursor-pointer" onClick={() => navigate(`/tracking/${station._id}`)}>
              <img src={direction} alt="" />
            </div>
          </div>
        </div>

        <div>
          <div className="lg:w-custom w-[95%] mx-auto pt-10">
            <div className="flex justify-between items-start">
              <div className="flex gap-5">
                <div>
                  <h1 className="font-bold md:text-[28px] text-xl">
                    {station?.name?.length > 40
                      ? `${station.name.substring(0, 40)}...`
                      : station.name}
                  </h1>
                  <h1 className="font-bold text-xl text-blue">
                    {station?.address?.length > 52
                      ? `${station.address.substring(0, 52)}...`
                      : station.address}
                  </h1>
                </div>
                <div className="hidden md:flex gap-3 items-start pt-2">
                  <img src={star} alt="" />
                  <h1 className="text-[#4D4D4D]">{station?.rating || "..."}</h1>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <h1 className="text-[#01A757] font-bold">Open Now</h1>
                <div className="md:flex hidden items-center gap-2">
                  <img className="w-[24px]" src={amount} alt="" />

                  <h1 className="text-xl text-[#3A3A3A] ">Cost Per Unit:</h1>
                  <h1 className="text-xl font-bold text-[#3A3A3A]">RS/{station?.cost || "..."}</h1>
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
            <div className="w-[90px] h-[90px] flex justify-center flex-col items-center py-4 border-[1px] border-[#CFCFCF] rounded-2xl space-y-2">
              <img src={wifistation} className={`${station?.Wifi ? '' : 'grayscale opacity-30'}`} alt="Wifi" />
              <h1 className={`text-center text-[10px] font-bold ${station?.Wifi ? 'text-blue-500' : 'text-gray-300'}`}>
                Wifi
              </h1>
            </div>

            <div className="w-[90px] h-[90px] flex justify-center flex-col items-center py-4 border-[1px] border-[#CFCFCF] rounded-2xl space-y-2">
              <img src={ladiesstation} className={`${station?.washroom ? '' : 'grayscale opacity-30'}`} alt="Washroom" />
              <h1 className={`text-center text-[10px] font-bold ${station?.washroom ? 'text-blue-500' : 'text-gray-300'}`}>
                Washroom
              </h1>
            </div>

            <div className="w-[90px] h-[90px] flex justify-center flex-col items-center py-4 border-[1px] border-[#CFCFCF] rounded-2xl space-y-2">
              <img src={prayerstation} className={`${station?.namaz ? '' : 'grayscale opacity-30'}`} alt="Namaz" />
              <h1 className={`text-center text-[10px] font-bold ${station?.namaz ? 'text-blue-500' : 'text-gray-300'}`}>
                Namaz
              </h1>
            </div>

            <div className="w-[90px] h-[90px] flex justify-center flex-col items-center py-4 border-[1px] border-[#CFCFCF] rounded-2xl space-y-2">
              <img src={luchstation} className={`${station?.dine ? '' : 'grayscale opacity-30'}`} alt="Dine" />
              <h1 className={`text-center text-[10px] font-bold ${station?.dine ? 'text-blue-500' : 'text-gray-300'}`}>
                Dine
              </h1>
            </div>

            <div className="w-[90px] h-[90px] flex justify-center flex-col items-center py-4 border-[1px] border-[#CFCFCF] rounded-2xl space-y-2">
              <img src={waitingarea} className={`${station?.waiting ? '' : 'grayscale opacity-30'}`} alt="Waiting" />
              <h1 className={`text-center text-[10px] font-bold ${station?.waiting ? 'text-blue-500' : 'text-gray-300'}`}>
                Waiting
              </h1>
            </div>

            <div className="w-[90px] h-[90px] flex justify-center flex-col items-center py-4 border-[1px] border-[#CFCFCF] rounded-2xl space-y-2">
              <img src={cartstation} className={`${station?.shop ? '' : 'grayscale opacity-30'}`} alt="Shop" />
              <h1 className={`text-center text-[10px] font-bold ${station?.shop ? 'text-blue-500' : 'text-gray-300'}`}>
                Shop
              </h1>
            </div>
          </div>
          <hr className="text-[#ECECEC] my-5 lg:w-custom w-[95%] mx-auto" />
        </div>
      </Layout>
    )
  );
};

export default StationView;
