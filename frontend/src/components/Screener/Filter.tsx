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
      info: "Blah",
    },
    {
      label: "Market Cap",
      options: ["Small Cap", "Mid Cap", "Large Cap"],
      info: "Blah",
    },
    {
      label: "Price Range",
      options: ["$0 - $50", "$50 - $100", "$100 - $200", "$200+"],
      info: "Blah",
    },
    {
      label: "Dividend Yield",
      options: ["< 3%", "3% - 6%", "> 6%"],
      info: "Blah",
    },
    {
      label: "P/E Ratio",
      options: ["< 10", "10 - 20", "20 - 30", "30 - 40", "> 40"],
      info: "Blah",
    },
    {
      label: "PEG Ratio",
      options: ["0.0 - 1.0", "1.0 - 2.0", "2.0 - 3.0", "3.0+"],
      info: "Blah",
    },
    {
      label: "P/S Ratio",
      options: ["0.0 - 1.0", "1.0 - 2.0", "2.0 - 3.0", "3.0+"],
      info: "Blah",
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
