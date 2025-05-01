import React, { useState, useEffect } from "react";
import Search from "../component/Search";
import SearchModels from "../component/SearchModels";
import Sidebar from "../component/Sidebar";

const MainContent = () => {

  return (
    <div className="relative" style={{ height: "100vh", width: "100%" }}>
      <Search />
      <SearchModels />
      <Sidebar />
    </div>
  )
}

export default MainContent