const express = require('express')
const { fetchFinancials } = require('../controllers/financialsController')

const router = express.Router()

router.get('/financials/:ticker', fetchFinancials)

module.exports = router