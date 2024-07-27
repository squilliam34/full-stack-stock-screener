const { getCompanyFinancials } = require("../services/financialsServices")

const fetchFinancials = async (req, res) => {
    const { ticker } = req.params;
    try {
        const data = await getCompanyFinancials(ticker)
        res.json(data)
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = { fetchFinancials }