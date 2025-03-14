const EnergyData = require("../models/EnergyData");

exports.calculateAverageUsage = async (deviceId) => {
  try {
    const data = await EnergyData.find({ deviceId });

    if (data.length === 0) return { averageUsage: 0 };

    const totalUsage = data.reduce((sum, entry) => sum + entry.energyUsage, 0);
    return { averageUsage: totalUsage / data.length };
  } catch (error) {
    throw new Error(error.message);
  }
};
