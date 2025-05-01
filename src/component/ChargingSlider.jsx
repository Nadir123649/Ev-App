import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import right from "../assets/images/rightarrow.svg";
import left from "../assets/images/right.svg";

const ChargingSlider = ({allcars,selectedCar,onCarChange}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  console.log("selectedCar ",selectedCar)

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);


  useEffect(() => {
    if (selectedCar && swiperRef.current) {
      const index = allcars.findIndex(
        (car) => car.name?.toLowerCase() === selectedCar.name?.toLowerCase()
      );
      if (index !== -1 && swiperRef.current.realIndex !== index) {
        swiperRef.current.slideToLoop(index);
      }
    }
  }, [selectedCar, allcars]);
  
  

  return (
    <>
      <main>
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              console.log("swiper", swiper);
              swiperRef.current = swiper;
            }}
            key={allcars.length}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            onSlideChange={(swiper) => {
              const newCar = allcars[swiper.realIndex];
              setActiveIndex(swiper.realIndex);
              if (onCarChange) {
                onCarChange(newCar);
              }
            }
          }
        
            modules={[Navigation, Pagination]}
            className="mySwiper items-center flex"
            breakpoints={{
              0: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              769: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {allcars.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`h-[50vh] flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
                    activeIndex === index ? "opacity-100" : "opacity-80"
                  }`}
                >
                  <div
                    className={`transition-all duration-700 transform ${
                      activeIndex === index
                        ? "translate-x-0 opacity-100"
                        : "-translate-y-5 opacity-80"
                    }`}
                  >
                    <img
                      className="mx-auto sm:w-[100px] w-[40px]"
                      src={slide.logo}
                      alt=""
                    />
                  </div>
                  <div
                    className={`transition-all duration-700 delay-100 transform ${
                      activeIndex === index
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-5 opacity-80"
                    }`}
                  >
                    <h1 className="text-[#3C3C3C] sm:text-[28px] text-base font-bold text-center mt-3">
                      {slide.title}
                    </h1>
                  </div>
                  <div
                    className={`transition-all duration-700 delay-200 transform ${
                      activeIndex === index
                        ? "translate-0-0 opacity-100"
                        : "translate-y-100 opacity-80"
                    }`}
                  >
                    <img
                      className="mx-auto w-[250px] h-[150px] mt-3"
                      src={slide.image}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center lg:w-custom w-[95%] mx-auto justify-center gap-10 pt-5">
          <div ref={prevRef} className="md:flex hidden cursor-pointer">
            <div className="p-3 bg-white rounded-full custom-shadow">
              <img className="w-[21px] h-[21px]" src={left} alt="" />
            </div>
          </div>
          <div>
            <button className="px-16 py-2 bg-blue text-white rounded-2xl">
             My Cars
            </button>
          </div>
          <div ref={nextRef} className="md:flex hidden cursor-pointer">
            <div className="p-3 bg-white rounded-full custom-shadow">
              <img className="w-[21px] h-[21px]" src={right} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChargingSlider;
