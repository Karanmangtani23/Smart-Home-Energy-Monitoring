import React, { useState, useEffect } from "react";
import EnergyChart from "./EnergyChart";
import EnergyTable from "./EnergyTable";
import NotificationList from "../Notifications/NotificationList";
import authService from "../services/authService";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const loggedInUser = await authService.getUser();
        setUser(loggedInUser);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Smart Home Energy Dashboard</h1>
      {user ? <p>Welcome, {user.name}</p> : <p>Please log in</p>}
      <EnergyChart />
      <EnergyTable />
      <NotificationList />
    </div>
  );
};

export default Dashboard;
