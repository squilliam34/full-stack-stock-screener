import React, { useState } from "react";
import { Filter, Results } from "../../components/Screener";

interface Result {
  symbol: string;
  sector: string;
  marketcap: string;
  dividend: number;
  price: number;
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
      dividend: 0,
      price: 128.34,
    },
    {
      symbol: "MSFT",
      sector: "Information Technology",
      marketcap: "Large Cap",
      dividend: 0,
      price: 451.28,
    },
    {
      symbol: "JPM",
      sector: "Finance",
      marketcap: "Large Cap",
      dividend: 3.13,
      price: 164.36,
    },
    {
      symbol: "V",
      sector: "Finance",
      marketcap: "Large Cap",
      dividend: 2.54,
      price: 114.93,
    },
    {
      symbol: "PFE",
      sector: "Healthcare",
      marketcap: "Large Cap",
      dividend: 1.72,
      price: 361.84,
    },
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

    for (const key of Object.keys(filters)) {
      const filterValue = filters[key];

      if (filterValue) {
        if (key === "dividendyield") {
          // numeric filtering for dividend yield
          filteredResults = filteredResults.filter((item) => {
            const dividendYield = item.dividend;
            if (filterValue === "< 3%") {
              return dividendYield < 3;
            } else if (filterValue === "3% - 6%") {
              return dividendYield >= 3 && dividendYield <= 6;
            } else if (filterValue === "> 6%") {
              return dividendYield > 6;
            }
            return true;
          });
        } else if (key === "pricerange") {
          // numeric filtering for price range
          filteredResults = filteredResults.filter((item) => {
            const price = item.price;
            if (filterValue === "$0 - $50") {
              return price >= 0 && price <= 50;
            } else if (filterValue === "$51 - $100") {
              return price >= 51 && price <= 100;
            } else if (filterValue === "$101 - $200") {
              return price >= 101 && price <= 200;
            } else if (filterValue === "$200+") {
              return price > 200;
            }
            return true;
          });
        } else {
          // handle other filters (sector, market cap, etc.)
          filteredResults = filteredResults.filter((item) => {
            const itemValue = item[key as keyof Result];
            console.log(
              `Filtering ${key} with value ${filterValue}, item value: ${itemValue}`
            );
            return itemValue === filterValue;
          });
        }
      }
    }

    console.log("Filtered results:", filteredResults);
    setResults(filteredResults);
    setShowResults(true);
  };

  return (
    <div className="flex screener-page">
      <div className="results-container">
        <h2>How To Use The Screener:</h2>
        <ul>
          <li>
            Choose your criteria - Choose what characteristics you want your
            desired equities to have. You can screen by sector, market cap,
            dividend, !! insert more as you add them !! The world is your
            oyster!
          </li>
          <li>
            See your results - It's that easy! Just press the "See Results"
            button and start browsing the different equities that fit your
            criteria on the far right. There you'll see different equities as
            well as some key characteristics about them.
          </li>
        </ul>
      </div>
      <Filter
        onFilterChange={handleFilterChange}
        onSeeResults={handleSeeResults}
      />
      <Results results={results} />
    </div>
  );
};

export default Screener;
