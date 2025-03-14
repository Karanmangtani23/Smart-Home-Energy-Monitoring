require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const energyRoutes = require("./routes/energyRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/energy", energyRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Energy Data Service Connected to DB"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Energy Service Running on Port ${PORT}`));
