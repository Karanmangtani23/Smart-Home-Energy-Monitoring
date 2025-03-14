const express = require("express");
const router = express.Router();
const { getAverageUsage } = require("../controllers/analyticsController");

router.get("/average/:deviceId", getAverageUsage);

module.exports = router;
