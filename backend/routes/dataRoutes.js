const express = require("express");
const { getMappedData } = require("../controllers/dataMapperController");

const router = express.Router();

router.get("/:ticker", getMappedData);

module.exports = router;
