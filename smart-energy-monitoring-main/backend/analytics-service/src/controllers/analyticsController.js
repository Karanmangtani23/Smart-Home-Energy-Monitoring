const { calculateAverageUsage } = require("../services/analyticsService");

exports.getAverageUsage = async (req, res) => {
  try {
    const { deviceId } = req.params;
    const result = await calculateAverageUsage(deviceId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
