import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import left from "../../assets/images/right.svg";
import plusicon from "../../assets/images/plusicon.svg";
import amount from "../../assets/images/amount.svg";
import Layout from "../../layout";
import getInstance from "../../service/getInstance";

const ChargingHistory = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getInstance.get("/history")
      .then((response) => {
        const data = response.data?.data || [];
        setHistoryData(data.reverse());
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching stations:", error);
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
        <div className="lg:w-custom w-[95%] mx-auto flex justify-between pt-10">
          <Link to="/profile-setting">
            <div className="flex">
              <div className="sm:p-3 p-2 bg-white rounded-full custom-shadow">
                <img className="w-[21px] h-[21px]" src={left} alt="" />
              </div>
            </div>
          </Link>
          <div>
            <h1 className="text-[#4D4D4D] font-bold text-center sm:text-[28px] text-xl">
              Charging History
            </h1>
          </div>
          <Link to="/edit-history">
            <div className="flex justify-end">
              <div className="sm:p-3 p-2 bg-blue rounded-full">
                <img className="w-[21px]" src={plusicon} alt="" />
              </div>
            </div>
          </Link>
        </div>

        <div className="space-y-3 mt-10 h-[calc(100vh-8rem)] pb-10 overflow-y-scroll overflow-x-hidden custom-scrollbar">
          {historyData.length === 0 ? (
            <p className="text-center text-gray-500">No history found.</p>
          ) : (
            historyData.map((item) => (
              <div
                key={item._id}
                className="mx-auto lg:w-custom w-[95%] border-[1px] border-[#8C8C8C] p-2 rounded-2xl"
              >
                <div className="flex justify-between items-start flex-wrap px-2">
                  <div className="w-[70%]">
                    <h1 className="font-bold sm:text-xl text-lg text-[#4D4D4D]">
                      {item.station_name}
                    </h1>
                    <h1 className="sm:text-base text-sm text-blue">
                      {item.car_name}
                    </h1>
                  </div>
                  <div className="flex flex-col items-end w-[30%]">
                    <h1 className="text-sm text-blue">{item.date}</h1>
                    <div className="hidden sm:flex items-center gap-1">
                      <img className="w-[18px] h-[18px]" src={amount} alt="" />
                      <h1 className="text-[#3A3A3A] font-bold">Cost Per Unit:</h1>
                      <h1 className="font-bold text-[#3A3A3A]">RS/{item.cost}</h1>
                    </div>
                  </div>
                  <div className="sm:hidden flex mt-2 items-center gap-1">
                    <img className="w-[18px] h-[18px]" src={amount} alt="" />
                    <h1 className="text-[#3A3A3A] font-bold">Cost Per Unit:</h1>
                  </div>
                  <div className="w-full sm:hidden block border-[1px] border-[#ACACAC] rounded-lg p-3 mt-2">
                    <h1 className="font-semibold text-sm text-[#383838]">
                      RS/{item.cost}
                    </h1>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Layout>
    )
  );
};

export default ChargingHistory;
