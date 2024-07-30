require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const polygonRoutes = require("./routes/polygonRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/polygon", polygonRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
