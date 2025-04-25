import React from "react";
import StationSlider from "../../component/StationSlider";
import ChargingStations from "../../component/ChargingStations";
import Layout from "../../layout";

const StationView = () => {
  return (
    <Layout>
      <StationSlider />
      <ChargingStations />
    </Layout>
  );
};

export default StationView;
