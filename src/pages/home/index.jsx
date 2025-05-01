import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import Sidebar from "../../component/Sidebar";
import { useNavigate } from "react-router-dom";
import MapView from "../../component/MapView";
import SearchModels from "../../component/SearchModels";
import getInstance from "../../service/getInstance";
import SearchBar from "../../component/SearchBar";


const Home = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [stations, setStations] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

  if (!token) {
    navigate("/");
  }


  useEffect(() => {
    getInstance.get("/stations")
      .then((response) => {
        setStations(response.data?.data || []);
      })
      .catch((error) => {
        console.error("Error fetching stations:", error);
      });
  }, []);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserLocation([coords.latitude, coords.longitude]);
      },
      () => alert("Location permission denied")
    );
  }, []);

  return (
    <Layout>
      <div className="flex">
        <Sidebar stations={stations} />
        <div className="flex-1">
          <SearchBar query={query} setQuery={setQuery} stations={stations} />
          <SearchModels />
          <MapView center={userLocation} markers={stations} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
