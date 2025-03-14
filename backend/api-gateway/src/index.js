const express = require("express");
const dotenv = require("dotenv");
const gatewayRoutes = require("./routes/gatewayRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Load Routes
app.use("/", gatewayRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 API Gateway is running on port ${PORT}`);
});
