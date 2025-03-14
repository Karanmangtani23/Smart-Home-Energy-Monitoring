const { storeEnergyData, getEnergyData } = require("../services/energyService");

exports.storeData = async (req, res) => {
  try {
    const { deviceId, energyUsage } = req.body;
    const result = await storeEnergyData(deviceId, energyUsage);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getData = async (req, res) => {
  try {
    const { deviceId } = req.params;
    const result = await getEnergyData(deviceId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
