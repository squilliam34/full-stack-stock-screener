import React from "react";
import Category from "./Category";

const Filter: React.FC = () => {
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
        />
      ))}
      <button className="results-button">See Results</button>
    </div>
  );
};

export default Filter;
