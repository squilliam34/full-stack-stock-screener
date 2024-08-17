const { pool } = require("../db/db");

const getTickers = async () => {
  const { rows } = await pool.query("SELECT ticker FROM tickers");
  return rows;
};

module.exports = { getTickers };
