const axios = require("axios");

const API_KEY = process.env.POLYGON_API_KEY;

const getMovingAverages = async (ticker, window) => {
  try {
    const BASE_URL = `https://api.polygon.io/v1/indicators/sma/${ticker}?timespan=day&adjusted=true&window=${window}&series_type=close&order=desc&limit=1&apiKey=${API_KEY}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching moving averages: ${error}`);
  }
};

module.exports = { getMovingAverages };
