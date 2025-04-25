import React from "react";
import { Toaster } from "react-hot-toast";
import MainRoute from "./routes";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />
      <MainRoute />
    </div>
  );
}

export default App;
