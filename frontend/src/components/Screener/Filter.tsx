import React from "react";
import Category from "./Category";

interface FilterProps {
  onFilterChange: (category: string, value: string) => void;
  onSeeResults: () => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange, onSeeResults }) => {
  const categories = [
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
      options: ["$0 - $50", "$50 - $100", "$100 - $200", "$200+"],
      info: "This is your desired price range to look for stocks in. The amount of cash investors have available to invest may affect the companies they look for and their desired pricepoint.",
    },
    {
      label: "Dividend Yield",
      options: ["< 3%", "3% - 6%", "> 6%"],
      info: "Dividend yield refers to a company's annual dividend payments expressed as a percentage of its current stock price. It helps investors assess the income-generating potential of a stock relative to its price, aiding in evaluating the attractiveness of the investment.",
    },
    {
      label: "P/E Ratio",
      options: ["< 10", "10 - 20", "20 - 30", "30 - 40", "> 40"],
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

  return (
    <div className="filter-container">
      <h2 className="category-header">Screening Parameters</h2>
      <div style={{ paddingLeft: "15px" }}>
        {categories.map((category, index) => (
          <Category
            key={index}
            label={category.label}
            options={category.options}
            onChange={(e) =>
              onFilterChange(
                category.label.replace(" ", "").toLowerCase(),
                e.target.value
              )
            }
            info={category.info}
          />
        ))}
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
