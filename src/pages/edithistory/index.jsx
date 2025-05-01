import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import left from "../../assets/images/right.svg";
import Layout from "../../layout";
import getInstance from "../../service/getInstance";
import toast from "react-hot-toast";
import { DotLoader } from "react-spinners";

const EditHistory = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    station_name: "",
    car_name: "",
    date: "",
    cost: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.station_name.trim()) newErrors.station_name = "Station name is required.";
    if (!formData.car_name.trim()) newErrors.car_name = "Car name is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.cost || Number(formData.cost) <= 0) newErrors.cost = "Valid cost is required.";

    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please correct the errors.");
      return;
    }

    setLoading(true);
    try {
      const response = await getInstance.post("/addHistory", formData);

      if (response.data) {
        toast.success("History added successfully!");
        setFormData({
          station_name: "",
          car_name: "",
          date: "",
          cost: ""
        });
        setTimeout(() => navigate("/charging-history"), 1500);
      } else {
        toast.error("Failed to add history.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="lg:w-custom w-[95%] mx-auto grid items-center grid-cols-3 pt-10">
        <Link to="/charging-history">
          <div className="flex">
            <div className="p-3 bg-white rounded-full custom-shadow">
              <img className="w-[21px] h-[21px]" src={left} alt="Back" />
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
        {/* Station Name */}
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm">
            Station Name
          </label>
          <input
            type="text"
            name="station_name"
            value={formData.station_name}
            onChange={handleChange}
            className={`w-full px-3 py-2 mt-1 rounded-xl border ${
              errors.station_name ? "border-red-500" : "border-[#ACACAC]"
            } text-[#4D4D4D] focus:outline-none`}
            placeholder="PSO EV Charging Station"
          />
          {errors.station_name && <p className="text-red-500 text-sm mt-1">{errors.station_name}</p>}
        </div>

        {/* Car Name */}
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm">
            Car Name
          </label>
          <input
            type="text"
            name="car_name"
            value={formData.car_name}
            onChange={handleChange}
            className={`w-full px-3 py-2 mt-1 rounded-xl border ${
              errors.car_name ? "border-red-500" : "border-[#ACACAC]"
            } text-[#4D4D4D] focus:outline-none`}
            placeholder="Car Name"
          />
          {errors.car_name && <p className="text-red-500 text-sm mt-1">{errors.car_name}</p>}
        </div>

        {/* Date */}
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-3 py-2 mt-1 rounded-xl border ${
              errors.date ? "border-red-500" : "border-[#ACACAC]"
            } text-[#4D4D4D] focus:outline-none`}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>

        {/* Cost */}
        <div>
          <label className="text-[#A6A6A6] font-semibold text-sm">
            Total Charging Cost
          </label>
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            className={`w-full px-3 py-2 mt-1 rounded-xl border ${
              errors.cost ? "border-red-500" : "border-[#ACACAC]"
            } text-[#4D4D4D] focus:outline-none`}
            placeholder="Rs/3500"
          />
          {errors.cost && <p className="text-red-500 text-sm mt-1">{errors.cost}</p>}
        </div>
      </div>

      <hr className="text-[#ECECEC] my-10 lg:w-custom w-[95%] mx-auto sm:block hidden" />
      <div className="text-end lg:w-custom w-[95%] mx-auto sm:mt-0 mt-5">
        <button
          onClick={handleSubmit}
          className="px-10 py-2 font-bold bg-blue text-white rounded-2xl sm:w-auto w-full"
        >
          {!loading ? "Add To History" : <DotLoader color="#fff" size={21} />}
        </button>
      </div>
    </Layout>
  );
};

export default EditHistory;
