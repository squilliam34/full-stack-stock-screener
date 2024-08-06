const { getPreviousClose } = require("../services/previousCloseService");

const fetchPreviousClose = async (req, res) => {
  const { ticker } = req.params;
  try {
    const data = await getPreviousClose(ticker);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchPreviousClose };
