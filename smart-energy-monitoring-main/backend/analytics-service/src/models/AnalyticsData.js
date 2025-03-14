const mongoose = require("mongoose");

const AnalyticsDataSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  averageUsage: { type: Number, required: true },
  peakUsage: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("AnalyticsData", AnalyticsDataSchema);
