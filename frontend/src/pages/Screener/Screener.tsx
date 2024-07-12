import React, { useState } from "react";
import { Filter, Results } from "../../components/Screener";

interface Result {
  symbol: string;
  sector: string;
  marketcap: string;
  dividend: number;
  price: number;
  peratio: number;
  pegratio: number;
  psratio: number;
  pbratio: number;
  currentratio: number;
  sharperatio: number;
  eps: number;
  netincome: number;
  totalrevenue: number;
  beta: number;
  ebitda: number;
  roe: number;
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
      peratio: 74.97,
      pegratio: 1.44,
      psratio: 39.33,
      pbratio: 65.76,
      currentratio: 5.12,
      sharperatio: 1.28,
      eps: 1.73,
      netincome: 42598000,
      totalrevenue: 79744700,
      beta: 1.78,
      ebitda: 50677000,
      roe: 115.66,
    },
    {
      symbol: "MSFT",
      sector: "Information Technology",
      marketcap: "Large Cap",
      dividend: 0,
      price: 451.28,
      peratio: 40.37,
      pegratio: 2.31,
      psratio: 14.76,
      pbratio: 13.49,
      currentratio: 3.4,
      sharperatio: 1.93,
      eps: 11.83,
      netincome: 86181000,
      totalrevenue: 236584000,
      beta: 1.08,
      ebitda: 127761000,
      roe: 38.49,
    },
    {
      symbol: "JPM",
      sector: "Finance",
      marketcap: "Large Cap",
      dividend: 3.13,
      price: 164.36,
      peratio: 12.38,
      pegratio: 3.36,
      psratio: 1.93,
      pbratio: 1.34,
      currentratio: 2.93,
      sharperatio: 3.22,
      eps: 7.07,
      netincome: 50349000,
      totalrevenue: 158512000,
      beta: 0.82,
      ebitda: -1,
      roe: 15.74,
    },
    {
      symbol: "V",
      sector: "Finance",
      marketcap: "Large Cap",
      dividend: 2.54,
      price: 114.93,
      peratio: 29.77,
      pegratio: 1.45,
      psratio: 2.48,
      pbratio: 13.75,
      currentratio: 2.15,
      sharperatio: 2.14,
      eps: 9.43,
      netincome: 18390000,
      totalrevenue: 34871000,
      beta: 0.56,
      ebitda: 23949000,
      roe: 46.53,
    },
    {
      symbol: "TMO",
      sector: "Healthcare",
      marketcap: "Large Cap",
      dividend: 0.29,
      price: 547.84,
      peratio: 34.36,
      pegratio: 0.57,
      psratio: 4.92,
      pbratio: 3.82,
      currentratio: 0.06,
      sharperatio: 4.81,
      eps: 15.73,
      netincome: 6034000,
      totalrevenue: 42492000,
      beta: 0.97,
      ebitda: 11345000,
      roe: 13.62,
    },
  ];

  const handleFilterChange = (category: string, value: string) => {
    setFilters((prevFilters) => {
      if (value === "") {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[category];
        return updatedFilters;
      } else {
        return {
          ...prevFilters,
          [category]: value,
        };
      }
    });
  };

  const applyNumericFilter = (
    items: Result[],
    key: keyof Result,
    filterValue: string,
    ranges: { [key: string]: [number, number] }
  ): Result[] => {
    const [min, max] = ranges[filterValue];
    return items.filter((item) => {
      const value = item[key];
      // @ts-ignore ts(2365)
      return value >= min && value <= max;
    });
  };

  const handleSeeResults = () => {
    console.log("Applying filters:", filters);

    let filteredResults = [...sampleData];

    const numericRanges: {
      [key: string]: { [key: string]: [number, number] };
    } = {
      dividendyield: {
        "< 3%": [0, 3],
        "3% - 6%": [3, 6],
        "> 6%": [6, Infinity],
      },
      pricerange: {
        "< $50": [0, 50],
        "$50 - $100": [50, 100],
        "$100 - $200": [100, 200],
        "> $200": [200, Infinity],
      },
      peratio: {
        "0 - 10": [0, 10],
        "10 - 20": [10, 20],
        "20 - 30": [20, 30],
        "30 - 40": [30, 40],
        "40+": [40, Infinity],
      },
      pegratio: {
        "0.0 - 1.0": [0, 1],
        "1.0 - 2.0": [1, 2],
        "2.0 - 3.0": [2, 3],
        "3.0+": [3, Infinity],
      },
      psratio: {
        "0.0 - 5.0": [0, 5],
        "5.0 - 10.0": [5, 10],
        "10.0 - 15.0": [10, 15],
        "15.0+": [15, Infinity],
      },
      pbratio: {
        "0.0 - 5.0": [0, 5],
        "5.0 - 10.0": [5, 10],
        "10.0 - 15.0": [10, 15],
        "15.0+": [15, Infinity],
      },
      currentratio: {
        "0.0 - 1.0": [0, 1],
        "1.0 - 2.0": [1, 2],
        "2.0 - 3.0": [2, 3],
        "3.0+": [3, Infinity],
      },
      sharperatio: {
        "0.0 - 1.0": [0, 1],
        "1.0 - 2.0": [1, 2],
        "2.0 - 3.0": [2, 3],
        "3.0+": [3, Infinity],
      },
      eps: {
        "0 - 5": [0, 5],
        "5 - 10": [5, 10],
        "10 - 15": [10, 15],
        "15+": [15, Infinity],
      },
      netincome: {
        "< $25m": [0, 25000000],
        "$25m - $50m": [25000000, 50000000],
        "$50m - $75m": [50000000, 75000000],
        "$75m - $100m": [75000000, 100000000],
        "> $100m": [100000000, Infinity],
      },
      totalrevenue: {
        "< $50m": [0, 50000000],
        "$50m - $100m": [50000000, 100000000],
        "$100m - $150m": [100000000, 150000000],
        "> $150m": [150000000, Infinity],
      },
      beta: { "≤ 1.0": [0, 1], "≥ 1.0": [1, Infinity] },
      ebitda: {
        "< $25m": [0, 25000000],
        "$25m - $50m": [25000000, 50000000],
        "$50m - $75m": [50000000, 75000000],
        "$75m - $100m": [75000000, 100000000],
        "> $100m": [100000000, Infinity],
      },
      roe: {
        "< 10%": [0, 10],
        "10% - 20%": [10, 20],
        "20% - 30%": [20, 30],
        "30% - 40%": [30, 40],
        "> 40%": [40, Infinity],
      },
    };

    for (const key of Object.keys(filters)) {
      const filterValue = filters[key];
      if (filterValue) {
        if (numericRanges[key]) {
          filteredResults = applyNumericFilter(
            filteredResults,
            key as keyof Result,
            filterValue,
            numericRanges[key]
          );
        } else {
          // handle other filters (sector, market cap, etc.)
          filteredResults = filteredResults.filter((item) => {
            const itemValue = item[key as keyof Result];
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
        <h2 id="instructions">How To Use The Screener:</h2>
        <ul>
          <li>
            Choose your criteria - Choose what characteristics you want your
            desired equities to have. You can screen by sector, market cap,
            price, or any number of technical indicators. The world is your
            oyster!
          </li>
          <li>
            See your results - It's that easy! Just press the "See Results"
            button and start browsing the different equities that fit your
            criteria on the far right. There you'll see different equities as
            well as some key characteristics about them.
          </li>
          <li>
            Want to learn more - Click on a stock to go to its page where you
            can get a more in depth look at the company as well as its
            financials for more technical analysis.
          </li>
          <li>
            Not sure what something means - Just press the question mark next to
            each parameter to learn more!
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
