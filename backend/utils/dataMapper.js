const { fetchFinancials } = require("../controllers/financialsController");
const {
  fetchMovingAverages,
} = require("../controllers/movingAveragesController");
const {
  fetchCompanyDetails,
} = require("../controllers/companyDetailController");
const {
  fetchPreviousClose,
} = require("../controllers/previousCloseController");
const {
  fetchRangeOfPrices,
} = require("../controllers/rangeOfPricesController");

const ss = require("simple-statistics");

/**
 * Combines various financial data for a given stock ticker.
 *
 * @param {string} ticker - The stock ticker symbol.
 * @returns {Promise<Object>} - A promise that resolves to an object containing combined financial data.
 * @throws {Error} - Throws an error if data combination fails.
 */
const combineData = async (ticker) => {
  try {
    const movingAveragePromises = [];
    for (let i = 10; i <= 50; i += 10) {
      movingAveragePromises.push(fetchMovingAverages(ticker, i.toString()));
    }
    const [companyInfo, financialData, previousClose, ...movingAverages] =
      await Promise.all([
        fetchCompanyDetails(ticker),
        fetchFinancials(ticker),
        fetchPreviousClose(ticker),
        ...movingAveragePromises,
      ]);
    return { companyInfo, financialData, previousClose, movingAverages };
  } catch (error) {
    throw new Error(`Error combining data: ${error.message}`);
  }
};

/**
 * Formats a date string from "MM/DD/YYYY" to "YYYY-MM-DD".
 *
 * @param {string} dateString - The date string in "MM/DD/YYYY" format.
 * @returns {string} - The formatted date string in "YYYY-MM-DD" format.
 */
function formatDate(dateString) {
  const [month, day, year] = dateString.split("/");

  const paddedMonth = month.padStart(2, "0");
  const paddedDay = day.padStart(2, "0");

  return `${year}-${paddedMonth}-${paddedDay}`;
}

/**
 * Calculates the beta of a given stock ticker using 2 weeks of weekly data.
 *
 * @param {string} ticker - The stock ticker symbol.
 * @returns {Promise<number>} - A promise that resolves to the beta value.
 * @throws {Error} - Throws an error if the beta calculation fails.
 */
const calculateBeta = async (ticker) => {
  try {
    let currentDate = new Date();
    let pastDate = new Date().setFullYear(currentDate.getFullYear() - 2);

    currentDate = currentDate.toLocaleDateString();
    pastDate = pastDate.toLocaleDateString();

    currentDate = formatDate(currentDate);
    pastDate = formatDate(pastDate);
    const marketPriceData = await fetchRangeOfPrices(
      "VOO",
      pastDate,
      currentDate,
      "week"
    );
    const stockPriceData = await fetchRangeOfPrices(
      ticker,
      pastDate,
      currentDate,
      "week"
    );

    const marketReturns = [];
    const stockReturns = [];

    for (let i = 0; i < marketPriceData.results.length; i++) {
      let marketReturn =
        (marketPriceData.results[i].c - marketPriceData.results[i].o) /
        marketPriceData.results[i].o;

      let stockReturn =
        (stockPriceData.results[i].c - stockPriceData.results[i].o) /
        stockPriceData.results[i].o;

      marketReturns.push(marketReturn);
      stockReturns.push(stockReturn);
    }

    const covariance = ss.covariance(stockReturns, marketReturns);
    const variance = ss.variance(marketReturns);

    return covariance / variance;
  } catch (error) {
    throw new Error(`Error calculating Beta: ${error.message}`);
  }
};

/**
 * Retrieves the 52 week high and low prices for a given stock ticker.
 *
 * @param {string} ticker - The stock ticker symbol.
 * @returns {Promise<number[]>} - A promise that resolves to an array containing the high and low prices.
 * @throws {Error} - Throws an error if fetching high/low prices fails.
 */
const getTTMHighLow = async (ticker) => {
  try {
    let currentDate = new Date();
    let pastDate = new Date().setFullYear(currentDate.getFullYear() - 1);

    currentDate = currentDate.toLocaleDateString();
    pastDate = pastDate.toLocaleDateString();

    currentDate = formatDate(currentDate);
    pastDate = formatDate(pastDate);
    const aggregate = await fetchRangeOfPrices(
      ticker,
      pastDate,
      currentDate,
      "year"
    );

    const highAndLow = [];
    highAndLow.push(aggregate.results[0].h);
    highAndLow.push(aggregate.results[0].l);

    return highAndLow;
  } catch (error) {
    throw new Error(`Error fetching ttm high/low: ${error.message}`);
  }
};

/**
 * Calculates the Sharpe Ratio for a given stock ticker using 2 years of weekly data.
 *
 * VGSH, an etf of short term treasuries, is used as a proxy to determine the RFR
 *
 * @param {string} ticker - The stock ticker symbol.
 * @returns {Promise<number>} - A promise that resolves to the Sharpe Ratio value.
 * @throws {Error} - Throws an error if the Sharpe Ratio calculation fails.
 */
const calculateSharpeRatio = async (ticker) => {
  try {
    let currentDate = new Date();
    let pastDate = new Date().setFullYear(currentDate.getFullYear() - 2);

    currentDate = currentDate.toLocaleDateString();
    pastDate = pastDate.toLocaleDateString();

    const riskFreeData = await fetchRangeOfPrices(
      "VGSH",
      pastDate,
      currentDate,
      "week"
    );
    const stockPriceData = await fetchRangeOfPrices(
      ticker,
      pastDate,
      currentDate,
      "week"
    );

    const riskFreeReturns = [];
    const stockReturns = [];

    for (let i = 0; i < riskFreeData.results.length; i++) {
      let riskFreeReturn =
        (riskFreeData.results[i].c - riskFreeData.results[i].o) /
        riskFreeData.results[i].o;

      let stockReturn =
        (stockPriceData.results[i].c - stockPriceData.results[i].o) /
        stockPriceData.results[i].o;

      riskFreeReturns.push(riskFreeReturn);
      stockReturns.push(stockReturn);
    }

    return (
      (ss.mean(stockReturns) - ss.mean(riskFreeReturns)) /
      ss.standardDeviation(stockReturns)
    );
  } catch (error) {
    throw new Error(`Error calculating Sharpe Ratio: ${error.message}`);
  }
};

/**
 * Maps various financial metrics and ratios for a given stock ticker to an interface in the frontend.
 *
 * @param {string} symbol - The stock ticker symbol.
 * @returns {Promise<Object>} - A promise that resolves to an object containing mapped financial data.
 * @throws {Error} - Throws an error if data mapping fails.
 */
const mapData = async (symbol) => {
  try {
    const { companyInfo, financialData, previousClose } = await combineData(
      symbol
    );
    const marketCapNum = companyInfo.marketCap;
    let marketCapCategory;
    if (marketCapNum < 2e9) {
      marketCapCategory = "Small Cap";
    } else if (marketCapNum < 10e9) {
      marketCapCategory = "Mid Cap";
    } else {
      marketCapCategory = "Large Cap";
    }

    const price = previousClose.results[0].c;
    const eps =
      financialData.results[1].financials.income_statement
        .basic_earnings_per_share.value;
    const netincome =
      financialData.results[1].financials.income_statement.net_income_loss
        .value;
    const totalrevenue =
      financialData.results[1].financials.income_statement.revenues.value;

    const previousyearnetincome =
      financialData.results[6].financials.income_statement.net_income_loss
        .value;
    const previousyeartotalrevenue =
      financialData.results[6].financials.income_statement.revenues.value;

    const peratio = price / eps;

    let index;
    // if the most recent period is Q4, then the next entry in the json data is the fiscal year so the index of the previous quarter has to be one more
    if (financialData.results[1].fiscal_period == "Q4") {
      index = 3;
    } else {
      index = 2;
    }

    const previousquarternetincome =
      financialData.results[index].financials.income_statement.net_income_loss
        .value;
    const previousquartertotalrevenue =
      financialData.results[index].financials.income_statement.revenues.value;

    const earnings_rate =
      (netincome - previousquarternetincome) / previousquarternetincome;

    const pegratio = peratio / earnings_rate;
    const psratio = marketCapNum / totalrevenue;

    const highAndLow = getTTMHighLow(symbol);

    const high = highAndLow[0];
    const low = highAndLow[1];

    const mappedData = {
      ticker: companyInfo.results.ticker,
      name: companyInfo.results.name,
      marketCap: marketCapCategory,
      price: price,
      peratio: peratio,
      pegratio: pegratio,
      psratio: psratio,
      currentratio:
        financialData.results[1].financials.balance_sheet.current_assets /
        financialData.results[1].financials.balance_sheet.current_liabilities,
      sharperatio: calculateSharpeRatio(symbol),
      eps: eps,
      netincome: netincome,
      totalrevenue: totalrevenue,
      beta: calculateBeta(symbol),
      grossmargin:
        financialData.results[1].financials.income_statement.grossprofit.value /
        totalrevenue,
      ttmhigh: high,
      ttmlow: low,
      ma10: movingAverages[0].results.values[0].value,
      ma20: movingAverages[1].results.values[0].value,
      ma30: movingAverages[2].results.values[0].value,
      ma40: movingAverages[3].results.values[0].value,
      ma50: movingAverages[4].results.values[0].value,
      previousyearnetincome: previousyearnetincome,
      previousyeartotalrevenue: previousyeartotalrevenue,
      previousquarternetincome: previousquarternetincome,
      previousquartertotalrevenue: previousquartertotalrevenue,
    };
    return mappedData;
  } catch (error) {
    throw new Error(`Error mapping data: ${error.message}`);
  }
};

module.exports = { mapData };
