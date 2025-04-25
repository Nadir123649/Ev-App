import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Search from "../component/Search";
import SearchModels from "../component/SearchModels";
import Sidebar from "../component/Sidebar";

const apiKey = "AIzaSyChft9MPqnrDzLrJEuTZlL5pdUCAiWMifg";

const MainContent = () => {
     const [mapLoaded, setMapLoaded] = useState(false);
    
      const center = {
        lat: 31.5204,
        lng: 74.3587,
      };
    
      useEffect(() => {
        setMapLoaded(true);
      }, []);
    
  return (
    <div className="relative" style={{ height: "100vh", width: "100%" }}>
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ height: "100vh", width: "100%" }}
        center={center}
        zoom={15}
      >
        {mapLoaded && <Marker position={center} />}
      </GoogleMap>
      <Search />
      <SearchModels />
      <Sidebar />
    </LoadScript>
  </div>
  )
}

export default MainContent