const axios = require('axios');

const API_KEY = process.env.POLYGON_API_KEY;

const getCompanyFinancials = async (ticker) => {
  try {
    const BASE_URL = `https://api.polygon.io/vX/reference/financials?ticker=${ticker}&apiKey=${API_KEY}`;
    const response = await axios.get(BASE_URL);
    return response.data;
    }
    catch (error) {
        throw new Error(`Error fetching financials: ${error}`);
    }
}

module.exports = {getCompanyFinancials};