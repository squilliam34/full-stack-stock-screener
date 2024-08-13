const { getMovingAverages } = require("../services/movingAverageService");

const fetchMovingAverages = async (req, res) => {
  const { ticker, window } = req.params;
  try {
    const data = await getMovingAverages(ticker, window);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchMovingAverages };
