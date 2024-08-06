const express = require("express");
const { fetchFinancials } = require("../controllers/financialsControllers");
const {
  fetchMovingAverages,
} = require("../controllers/movingAverageController");
const {
  fetchCompanyDetails,
} = require("../controllers/companyDetailController");
const {
  fetchPreviousClose,
} = require("../controllers/previousCloseController");

const router = express.Router();

router.get("/financials/:ticker", fetchFinancials);
router.get("/movingAverage/:ticker/:window", fetchMovingAverages);
router.get("/details/:ticker", fetchCompanyDetails);
router.get("/previousClose/:ticker", fetchPreviousClose);

module.exports = router;
