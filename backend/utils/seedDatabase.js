const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const pool = require("../db/db");

const parseCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        resolve(results);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS tickers (
    id SERIAL PRIMARY KEY,
    ticker VARCHAR(10) UNIQUE NOT NULL
  );
`;

const seedDatabase = async () => {
  try {
    console.log("Creating table if not exists...");
    await pool.query(createTableQuery);

    console.log("Seeding database...");
    const files = ["sp500.csv", "russell2000.csv"];
    for (const file of files) {
      const filePath = path.join(__dirname, "../csv", file);
      const data = await parseCSV(filePath);

      const tickers = data.map((row) => row.Ticker);

      for (const ticker of tickers) {
        await pool.query(
          "INSERT INTO tickers (ticker) VALUES ($1) ON CONFLICT DO NOTHING",
          [ticker]
        );
      }
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await pool.end();
  }
};

seedDatabase();
