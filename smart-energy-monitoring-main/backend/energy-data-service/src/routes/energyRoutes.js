const express = require("express");
const { getEnergyData } = require("../controllers/energyController");
const router = express.Router();

router.get("/", getEnergyData);

module.exports = router;
