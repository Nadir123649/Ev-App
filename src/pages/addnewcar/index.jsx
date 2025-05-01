import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import left from "../../assets/images/right.svg";
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
import { DotLoader } from "react-spinners";
import toast from "react-hot-toast";


const AddCars = () => {
  const [carsData, setCarsData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const modelImages = {
    "mg": {
      name: "MG",
      logo: mglogo,
      image: mgimg,
    },
    "tesla": {
      name: "Tesla",
      logo: teslalogo,
      image: teslaimg,
    },
    "kia": {
      name: "KIA",
      logo: logokia,
      image: kiaslidercar,
    },
  };


  useEffect(() => {
    getInstance
      .get("/cars?models=true")
      .then((res) => {
        setCarsData(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching car data:", err);
      });
  }, []);

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    const brandData = carsData.find((c) => c.manufacturer === brand);
    if (brandData) setModels(brandData.models);
    if (selectedModel) {
      setSelectedModel(null);
    }
  };

  const handleModelChange = (e) => {
    const modelName = e.target.value;
    const modelDetails = models.find((m) => m.name === modelName);
    setSelectedModel(modelDetails);
  };

  const specs = selectedModel
    ? [
      { icon: battery, label: "Battery Size", value: `${selectedModel.battery_size_kWh} kWh` },
      { icon: range, label: "Range Miles", value: `${selectedModel.range_miles} miles` },
      { icon: chargespeed, label: "Charging Speed", value: `Up to ${selectedModel.charging_speed_kW} kW` },
      { icon: speed, label: "Top Speed", value: `${selectedModel.top_speed_mph} mph` },
      { icon: timer, label: "0–60 mph (sec)", value: `${selectedModel.acceleration_0_to_60_mph_sec} sec` },
    ]
    : [];
  console.log("Selected branc:", modelImages['mg'].logo);

  const addCar = async () => {
    setLoading(true);
    const data = {
      manufacturer: selectedBrand,
      name: selectedModel.name,
    }
    try {
      const response = await getInstance.post('/cars', data)
      console.log(response.data)
      if (response.data) {
        toast.success("Car added successfully!"); 
        setTimeout(() => navigate("/car-details"), 1500);
      }
      else{
        toast.error("Failed to add car. Please try again.");
      }
    } catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false);
    }
  }

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
        <div className="md:col-span-1 col-span-2">
          <h1 className="text-[#4D4D4D] font-bold sm:text-[28px] text-xl sm:text-center text-start">
            Add New EV
          </h1>
        </div>
      </div>

      <div className="lg:w-custom w-[95%] mx-auto grid sm:grid-cols-2 grid-cols-1 gap-5 pt-10">
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm ">
            EV Brand Name
          </label>
          <div className="px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC]">
            <select
              className="w-full text-[#4D4D4D] focus:outline-none"
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              <option value="">Select Brand</option>
              {carsData.map((car, idx) => (
                <option key={idx} value={car.manufacturer}>
                  {car.manufacturer}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm ">
            EV Model
          </label>
          <div className="px-3 py-2 mt-1 rounded-xl border-[1px] border-[#ACACAC]">
            <select
              className="w-full text-[#4D4D4D] focus:outline-none"
              value={selectedModel ? selectedModel?.name : ""}
              onChange={handleModelChange}
            >
              <option value="">Select Model</option>
              {models.map((model, idx) => (
                <option key={idx} value={model.name}>
                  {model.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <hr className="text-[#ECECEC] my-10 lg:w-custom w-[95%] mx-auto" />

      <div className="grid sm:grid-cols-2 grid-cols-1 lg:w-custom w-[95%] mx-auto">
        <div className="flex justify-between items-center pb-5 sm:pb-0">
          <div className="w-1/2 items-center">
            {selectedBrand &&
              <img
                className="w-[150px] mx-auto"
                src={modelImages[selectedBrand?.toLowerCase()]?.logo}
                alt="cars-logo"
              />
            }
            {/* <img className="w-[150px] mx-auto" src={teslalogo} alt="" /> */}
            <h1 className="sm:text-3xl text-lg text-center font-bold text-[#7F7F7F]">
              {modelImages[selectedBrand?.toLowerCase()]?.name || ""}
            </h1>
          </div>
          <div className="w-1/2">
            {selectedBrand &&
              <img
                src={modelImages[selectedBrand?.toLowerCase()]?.image}
                alt="cars-images"
              />
            }
          </div>
        </div>

        <hr className="text-[#ECECEC] my-2 w-full mx-auto sm:hidden block" />

        <div>
          {specs.map((item, idx) => (
            <div
              key={idx}
              className={`flex justify-between py-2 ${idx < 4 ? "border-b-[1px] border-[#D9D9D9]" : ""
                }`}
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt="" />
                <h1 className="lg:text-2xl sm:text-lg text-[#474747]">{item.label}:</h1>
              </div>
              <h1 className="font-bold lg:text-2xl sm:text-lg text-[#474747]">{item.value}</h1>
            </div>
          ))}
        </div>
      </div>

      <hr className="text-[#ECECEC] my-10 lg:w-custom w-[95%] mx-auto" />
      <div className="text-center">
        <button
          className="px-10 py-2 bg-blue text-white rounded-2xl"
          onClick={addCar}
          disabled={loading}>
          {!loading ? "Add To My Cars" : <DotLoader color="#fff" size={21} />}
        </button>
      </div>
    </Layout>
  );
};

export default AddCars;
