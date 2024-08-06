const axios = require("axios");

const API_KEY = process.env.POLYGON_API_KEY;

const getPreviousClose = async (ticker) => {
  try {
    const BASE_URL = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${API_KEY}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching previous close: ${error}`);
  }
};

module.exports = { getPreviousClose };
