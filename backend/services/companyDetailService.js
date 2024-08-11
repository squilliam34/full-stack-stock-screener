const axios = require("axios");

const API_KEY = process.env.POLYGON_API_KEY;

const getCompanyDetails = async (ticker) => {
  try {
    const BASE_URL = `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${API_KEY}`;
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching company details: ${error}`);
  }
};

module.exports = { getCompanyDetails };
