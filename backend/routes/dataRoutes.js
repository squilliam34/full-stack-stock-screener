const express = require("express");
const { mapData } = require("../utils/dataMapper");

const router = express.Router();

router.get("/stock/data/:ticker", async (req, res) => {
  try {
    const ticker = req.params.ticker;
    const data = await mapData(ticker);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
