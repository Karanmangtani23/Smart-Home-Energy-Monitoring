import React, { useEffect, useState } from "react";
import { api } from "../services/api";

const EnergyChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/energy").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Energy Consumption Chart</h2>
      {data.map((item) => (
        <p key={item._id}>{item.energyConsumption} kWh at {item.timestamp}</p>
      ))}
    </div>
  );
};

export default EnergyChart;
