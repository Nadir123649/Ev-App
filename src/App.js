import React from "react";
import { Toaster } from "react-hot-toast";
import MainRoute from "./routes";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />
      <MainRoute />
    </div>
  );
}

export default App;
