import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChargingSlider from "../../component/ChargingSlider";
import plusicon from "../../assets/images/plusicon.svg";
import battery from "../../assets/images/battery.svg";
import range from "../../assets/images/range.svg";
import chargespeed from "../../assets/images/chargespeed.svg";
import speed from "../../assets/images/speed.svg";
import timer from "../../assets/images/timer.svg";
import Layout from "../../layout";
import logokia from "../../assets/images/kiasliderlogo.jpg";
import kiaslidercar from "../../assets/images/kisslidercar.jpg";
import teslalogo from "../../assets/images/sliderteslaicon.jpg";
import teslaimg from "../../assets/images/slidertesla.jpg";
import mglogo from "../../assets/images/mglogoslider.webp";
import mgimg from "../../assets/images/mgslidercar.jpg";
import getInstance from "../../service/getInstance";


const CarDetails = () => {
  const [allcars, setAllCars] = useState([])
  const [selectedCar, setSelectedcar] = useState(null);
  const [loading, setLoading] = useState(true);

  const slides = [
    {
      logo: logokia,
      title: "KIA",
      image: kiaslidercar,
    },
    {
      logo: teslalogo,
      title: "Tesla mode 3",
      image: teslaimg,
    },
    {
      logo: mglogo,
      title: "MG",
      image: mgimg,
    },
  ]
  useEffect(() => {
    setLoading(true);

    getInstance.get("/cars")
      .then((response) => {
        const carList = [];

        response.data?.data?.forEach((manufacturer) => {
          manufacturer.models.forEach((model, index) => {
            const match = slides.find((slide) =>
              slide.title.toLowerCase().includes(model.name.toLowerCase().split(" ")[0])
            );

            carList.push({
              ...model,
              manufacturer: manufacturer.manufacturer,
              carIndex: carList.length,
              logo: match?.logo,
              image: match?.image,
            });
          });
        });

        setAllCars(carList);
        setSelectedcar(carList[0]); // default to first car
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
        setLoading(false);
      });
  }, []);


  return (
    loading ? (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
          <div class="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      </div>
    ) : (
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
          <ChargingSlider
            allcars={allcars}
            selectedCar={selectedCar}
            onCarChange={(car) => setSelectedcar(car)}
          />
          <div className="lg:w-[30%] w-[95%] mx-auto pt-5 pb-28">
            <div className="flex justify-between py-2 border-b-[1px] border-[#D9D9D9]">
              <div className="flex items-center gap-3">
                <img src={battery} alt="" />
                <h1 className="sm:text-2xl text-[#474747]">Battery Size:</h1>
              </div>
              <div>
                <h1 className="font-bold sm:text-2xl text-[#474747]">{selectedCar?.battery_size_kWh} kWh</h1>
              </div>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-[#D9D9D9]">
              <div className="flex items-center gap-3">
                <img src={range} alt="" />
                <h1 className="sm:text-2xl text-[#474747]">Range Miles:</h1>
              </div>
              <div>
                <h1 className="font-bold sm:text-2xl text-[#474747]">
                  {selectedCar?.range_miles} miles
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
                  {selectedCar?.charging_speed_kW} kW
                </h1>
              </div>
            </div>
            <div className="flex justify-between py-2 border-b-[1px] border-[#D9D9D9]">
              <div className="flex items-center gap-3">
                <img src={speed} alt="" />
                <h1 className="sm:text-2xl text-[#474747]">Top Speed:</h1>
              </div>
              <div>
                <h1 className="font-bold sm:text-2xl text-[#474747]">{selectedCar?.top_speed_mph} mph</h1>
              </div>
            </div>
            <div className="flex justify-between py-2  border-[#D9D9D9]">
              <div className="flex items-center gap-3">
                <img src={timer} alt="" />
                <h1 className="sm:text-2xl text-[#474747]">{selectedCar?.acceleration_0_to_60_mph_sec} mph (sec): </h1>
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
    )
  );
};

export default CarDetails;
