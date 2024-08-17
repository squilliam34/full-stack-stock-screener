require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const polygonRoutes = require("./routes/polygonRoutes");
const dataRoutes = require("./routes/dataRoutes");
const tickerRoutes = require("./routes/tickerRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/polygon", polygonRoutes);
app.use("/api/data", dataRoutes);
app.use("/api", tickerRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
