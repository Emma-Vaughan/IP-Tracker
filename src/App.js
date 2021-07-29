import React from "react";
import { useState } from "react";
import MainHeader from ".//Header/MainHeader";
import Map from "./Map/Map";

function App() {
  const [data, setData] = useState("");

  return (
    <div className="App">
      <MainHeader data={data} setData={setData} />
      <Map data={data} />
    </div>
  );
}

export default App;
