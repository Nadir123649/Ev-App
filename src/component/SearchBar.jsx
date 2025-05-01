import React from "react";
import search from "../assets/images/search.svg";
import location from "../assets/images/location.svg";

const SearchBar = ({ query, setQuery, stations, setStations }) => {

  const handleSearch = () => {
    const result = stations.filter((station) =>
      station.name.toLowerCase().includes(query.toLowerCase())
    );
    setStations(result);
  };

  return (
    <div className="lg:w-[30%] md:w-[40%] sm:w-[50%] w-full mx-auto px-2 flex md:gap-5 gap-2 absolute top-4  sm:translate-x-0 left-1/2 -translate-x-1/2 md:left-[40%] lg:left-1/2 lg:-translate-x-1/2 z-10">
      <div className="flex items-center bg-white rounded-full custom-shadow px-6 py-2 w-full">
        <input
          type="text"
          placeholder="Enter your location"
          className="flex-grow outline-none bg-transparent text-black"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <img src={search} alt="" />
      </div>
      <button className=" bg-white rounded-full p-3 custom-shadow" onClick={handleSearch}>
        <img src={location} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
