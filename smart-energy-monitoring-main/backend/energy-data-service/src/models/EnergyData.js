const mongoose = require("mongoose");

const EnergySchema = new mongoose.Schema({
  timestamp: Date,
  energyConsumption: Number,
});

module.exports = mongoose.model("EnergyData", EnergySchema);
