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
    },
    {
      label: "Market Cap",
      options: ["Small Cap", "Mid Cap", "Large Cap"],
    },
    {
      label: "Price Range",
      options: ["$0 - $50", "$51 - $100", "$101 - $200", "$200+"],
    },
    {
      label: "Dividend Yield",
      options: ["< 3%", "3% - 6%", "> 6%"],
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
