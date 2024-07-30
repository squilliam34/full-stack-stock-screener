const express = require("express");
const { fetchFinancials } = require("../controllers/financialsController");
const {
  fetchMovingAverages,
} = require("../controllers/movingAveragesController");

const router = express.Router();

router.get("/financials/:ticker", fetchFinancials);
router.get("/movingAverage/:ticker/:window", fetchMovingAverages);

module.exports = router;
