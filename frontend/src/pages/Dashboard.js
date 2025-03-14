import React, { useEffect, useState } from "react";
import energyService from "../services/energyService";
import analyticsService from "../services/analyticsService";

const Dashboard = () => {
  const [energyData, setEnergyData] = useState([]);
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const energy = await energyService.getEnergyConsumption();
        const analyticsData = await analyticsService.getUsageAnalytics();
        setEnergyData(energy);
        setAnalytics(analyticsData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Energy Usage</h2>
      <ul>
        {energyData.map((item, index) => (
          <li key={index}>{item.device}: {item.usage} kWh</li>
        ))}
      </ul>

      <h2>Analytics</h2>
      <ul>
        {analytics.map((item, index) => (
          <li key={index}>{item.metric}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
