const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const notificationRoutes = require("./routes/notificationRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5004;

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("📦 MongoDB Connected for Notification Service"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/notifications", notificationRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Notification Service is running on port ${PORT}`);
});
