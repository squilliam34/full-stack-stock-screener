import React, { useState } from "react";
import { Filter, Results } from "../../components/Screener";

interface Result {
  symbol: string;
  sector: string;
  marketcap: string;
}

const Screener: React.FC = () => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [results, setResults] = useState<Result[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const sampleData: Result[] = [
    {
      symbol: "NVDA",
      sector: "Information Technology",
      marketcap: "Large Cap",
    },
    {
      symbol: "MSFT",
      sector: "Information Technology",
      marketcap: "Large Cap",
    },
    { symbol: "JPM", sector: "Finance", marketcap: "Large Cap" },
    { symbol: "V", sector: "Finance", marketcap: "Large Cap" },
    { symbol: "PFE", sector: "Healthcare", marketcap: "Large Cap" },
  ];

  const handleFilterChange = (category: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
  };

  const handleSeeResults = () => {
    console.log("Applying filters:", filters);

    let filteredResults = [...sampleData];

    // loop through each filter category
    for (const key of Object.keys(filters)) {
      const filterValue = filters[key];

      if (filterValue) {
        // apply the filter for the current category
        filteredResults = filteredResults.filter((item) => {
          const itemValue = item[key as keyof Result];
          console.log(
            `Filtering ${key} with value ${filterValue}, item value: ${itemValue}`
          );
          return itemValue === filterValue;
        });
      }
    }

    console.log("Filtered results:", filteredResults);
    setResults(filteredResults);
    setShowResults(true);
  };

  return (
    <div className="flex">
      <Filter
        onFilterChange={handleFilterChange}
        onSeeResults={handleSeeResults}
      />
      <Results results={results} />
    </div>
  );
};

export default Screener;
