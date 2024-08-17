const express = require("express");
const { fetchTickers } = require("../controllers/tickerController");

const router = express.Router();

router.get("/tickers", fetchTickers);

module.exports = router;
