const { getTickers } = require("../models/ticker");

const fetchTickers = async (req, res) => {
  try {
    res.json(await getTickers());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchTickers };
