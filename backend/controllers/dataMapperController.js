const { mapData } = require("../utils/dataMapper");

const getStockData = async (req, res) => {
  const ticker = req.params;
  try {
    const data = await mapData(ticker);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getStockData,
};
