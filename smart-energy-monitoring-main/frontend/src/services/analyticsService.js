import api from "./api";

const energyService = {
  getEnergyConsumption: () => api.get("/energy/consumption"),
  
  getEnergyUsageTrends: () => api.get("/energy/trends"),

  optimizeEnergy: (settings) => api.post("/energy/optimize", settings),
};

export default energyService;
