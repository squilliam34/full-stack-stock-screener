const { getCompanyDetails } = require("../services/companyDetailService");

const fetchCompanyDetails = async (req, res) => {
  const { ticker } = req.params;
  try {
    const data = await getCompanyDetails(ticker);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchCompanyDetails };
