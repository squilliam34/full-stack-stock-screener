const axios = require("axios");

const API_KEY = process.env.POLYGON_API_KEY;

const getRangeOfPrices = async (ticker, start, end) => {
  try {
    const BASE_URL = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/week/${start}/${end}?adjusted=true&sort=desc&apiKey=${API_KEY}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching prices: ${error}`);
  }
};

module.exports = { getRangeOfPrices };
