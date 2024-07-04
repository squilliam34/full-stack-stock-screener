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
    <div style={{ marginLeft: "5rem" }}>
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
      <button className="results-button" onClick={onSeeResults}>
        See Results
      </button>
    </div>
  );
};

export default Filter;
