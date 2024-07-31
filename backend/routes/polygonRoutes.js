const express = require("express");
const { fetchFinancials } = require("../controllers/financialsController");
const {
  fetchMovingAverages,
} = require("../controllers/movingAveragesController");
const {
  fetchCompanyDetails,
} = require("../controllers/companyDetailController");

const router = express.Router();

router.get("/financials/:ticker", fetchFinancials);
router.get("/movingAverage/:ticker/:window", fetchMovingAverages);
router.get("/details/:ticker", fetchCompanyDetails);

module.exports = router;
