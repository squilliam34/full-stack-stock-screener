const { getRangeOfPrices } = require("../services/rangeOfPricesService");

const fetchRangeOfPrices = async (req, res) => {
  const { ticker, start, end } = req.params;
  try {
    const data = await getRangeOfPrices(ticker, start, end);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchRangeOfPrices };
