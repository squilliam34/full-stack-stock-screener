import React from "react";
import FilterItem from "./FilterItem";

interface FilterProps {
  onFilterChange: (category: string, value: string) => void;
  onSeeResults: () => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange, onSeeResults }) => {
  const genericCategories = [
    {
      label: "Sector",
      options: [
        "Communication Staples",
        "Consumer Discretionary",
        "Consumer Services",
        "Energy",
        "Finance",
        "Healthcare",
        "Information Technology",
        "Industrials",
        "Materials",
        "Utilities",
      ],
      info: "The sector of a company refers to the broad category of the economy in which the business operates, grouping companies with similar business activities. It helps in analyzing and comparing companies that share common industry characteristics, such as technology, finance, healthcare, or industrials.",
    },
    {
      label: "Market Cap",
      options: ["Small Cap", "Mid Cap", "Large Cap"],
      info: "Market capitalization (market cap) refers to the total value of a company's outstanding shares of stock, calculated by multiplying the current stock price by the total number of shares. It categorizes companies into different sizes, such as large cap, mid cap, and small cap, helping investors assess a company's scale and investment risk.",
    },
    {
      label: "Price Range",
      options: ["< $50", "$50 - $100", "$100 - $200", "> $200"],
      info: "This is your desired price range to look for stocks in. The amount of cash investors have available to invest may affect the companies they look for and their desired pricepoint.",
    },
    {
      label: "Dividend Yield",
      options: ["< 3%", "3% - 6%", "> 6%"],
      info: "Dividend yield refers to a company's annual dividend payments expressed as a percentage of its current stock price. It helps investors assess the income-generating potential of a stock relative to its price, aiding in evaluating the attractiveness of the investment.",
    },
  ];

  const valuationCategories = [
    {
      label: "EPS",
      options: ["0 - 5", "5 - 10", "10 - 15", "15+"],
      info: "Earnings per share (EPS) represents the portion of a company's profit allocated to each outstanding share of common stock, calculated by dividing net income by the number of outstanding shares. It is helpful to investors because it provides a direct measure of a company's profitability, allowing for straightforward comparisons between companies and insights into potential investment returns.",
    },
    {
      label: "P/E Ratio",
      options: ["0 - 10", "10 - 20", "20 - 30", "30 - 40", "40+"],
      info: "The Price-to-Earnings (P/E) ratio measures a company's current share price relative to its earnings per share (EPS). It helps investors evaluate whether a stock is overvalued or undervalued compared to its earnings, indicating market expectations of future growth.",
    },
    {
      label: "PEG Ratio",
      options: ["0.0 - 1.0", "1.0 - 2.0", "2.0 - 3.0", "3.0+"],
      info: "The Price/Earnings to Growth (PEG) ratio adjusts the P/E ratio by accounting for a company's expected earnings growth rate. It provides a more comprehensive valuation metric by considering growth, helping investors compare the valuation of companies with different growth rates.",
    },
    {
      label: "P/S Ratio",
      options: ["0.0 - 1.0", "1.0 - 2.0", "2.0 - 3.0", "3.0+"],
      info: "The Price-to-Sales (P/S) ratio compares a company's market capitalization to its total revenue. It helps investors assess the value placed on each dollar of a company's sales, useful for evaluating companies that may not yet be profitable.",
    },
    {
      label: "P/B Ratio",
      options: ["0.0 - 1.0", "1.0 - 2.0", "2.0 - 3.0", "3.0+"],
      info: "The price-to-book (P/B) ratio compares a company's market value to its book value, calculated by dividing the stock's current price by its book value per share. This ratio is helpful for investors as it indicates whether a stock is undervalued or overvalued, with a lower P/B ratio potentially signifying an undervalued stock, making it attractive for value investors.",
    },
  ];

  const fundamentalCategories = [
    {
      label: "Current Ratio",
      options: ["0.0 - 1.0", "1.0 - 2.0", "2.0 - 3.0", "3.0+"],
      info: "The current ratio measures a company's ability to pay short-term obligations with its current assets, calculated by dividing current assets by current liabilities. It helps investors assess a company's liquidity and short-term financial health, with a higher ratio indicating better coverage of short-term debts.",
    },
    {
      label: "Net Income",
      options: [
        "< $25m",
        "$25m - $50m",
        "$50m - $75m",
        "$75m - $100m",
        "> $100m",
      ],
      info: "Net income represents the profitability of a company after deducting all expenses from its total revenue. It helps investors gauge how efficiently a company manages its operations to generate profit.",
    },
    {
      label: "Total Revenue",
      options: ["< $50m", "$50m - $100m", "$100m - $150m", "> $150m"],
      info: "Total revenue is the total amount of money generated by a company from its sales and other business activities over a specific period. It helps investors assess a company's ability to generate sales and its overall business growth, providing a key indicator of market demand and operational efficiency.",
    },
  ];

  const riskCategories = [
    {
      label: "Sharpe Ratio",
      options: ["0.0 - 1.0", "1.0 - 2.0", "2.0 - 3.0", "3.0+"],
      info: "The Sharpe Ratio evaluates the risk-adjusted return of an investment by comparing its excess return over the risk-free rate to its standard deviation. It helps investors understand the potential reward per unit of risk, with a higher Sharpe Ratio indicating more attractive risk-adjusted returns.",
    },
    {
      label: "Beta",
      options: ["≤ 1.0", "≥ 1.0"],
      info: "Beta is a measure of a stock's volatility relative to the overall market, indicating how much the stock's price is expected to move in relation to market changes. It is useful for investors because it helps assess the risk associated with a particular stock, with a beta greater than 1 indicating higher volatility and potential for greater returns or losses compared to the market.",
    },
  ];

  return (
    <div className="filter-container">
      <h2 className="screener-header">Screening Parameters</h2>
      <div style={{ paddingLeft: "15px" }}>
        <FilterItem
          title="Company Characteristics"
          categories={genericCategories}
          onFilterChange={onFilterChange}
        />
        <FilterItem
          title="Valuation Metrics"
          categories={valuationCategories}
          onFilterChange={onFilterChange}
        />
        <FilterItem
          title="Fundamentals"
          categories={fundamentalCategories}
          onFilterChange={onFilterChange}
        />
        <FilterItem
          title="Risk Metrics"
          categories={riskCategories}
          onFilterChange={onFilterChange}
        />
      </div>
      <div className="results-button-container">
        <button className="results-button" onClick={onSeeResults}>
          See Results
        </button>
      </div>
    </div>
  );
};

export default Filter;
