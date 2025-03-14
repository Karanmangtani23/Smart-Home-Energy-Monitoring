const EnergyData = require("../models/EnergyData");

exports.storeEnergyData = async (deviceId, energyUsage) => {
  try {
    const newData = new EnergyData({ deviceId, energyUsage });
    await newData.save();
    return { message: "Energy data stored successfully" };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getEnergyData = async (deviceId) => {
  try {
    return await EnergyData.find({ deviceId }).sort({ timestamp: -1 }).limit(10);
  } catch (error) {
    throw new Error(error.message);
  }
};
