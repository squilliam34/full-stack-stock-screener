const { getRangeOfPrices } = require("../services/rangeOfPricesService");

const fetchRangeOfPrices = async (req, res) => {
  const { ticker, start, end, period } = req.params;
  try {
    const data = await getRangeOfPrices(ticker, start, end, period);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchRangeOfPrices };
