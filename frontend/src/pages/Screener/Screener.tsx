import React, { useState } from "react";
import { Filter, Results, BackToTheTop } from "../../components/Screener";

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
  grossmargin: number;
  ttmhigh: number;
  ttmlow: number;
  ma10: number;
  ma20: number;
  ma30: number;
  ma40: number;
  ma50: number;
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
      grossmargin: (60059000 / 79744700) * 100,
      ttmhigh: 140.76,
      ttmlow: 39.23,
      ma10: 125.22,
      ma20: 117.9,
      ma30: 107.38,
      ma40: 95.41,
      ma50: 80.07,
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
      grossmargin: (165359000 / 236584000) * 100,
      ttmhigh: 468.35,
      ttmlow: 309.45,
      ma10: 455.42,
      ma20: 448.97,
      ma30: 443.21,
      ma40: 437.89,
      ma50: 429.56,
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
      grossmargin: -1,
      ttmhigh: 211.61,
      ttmlow: 135.19,
      ma10: 169.87,
      ma20: 165.24,
      ma30: 160.76,
      ma40: 155.43,
      ma50: 149.89,
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
      grossmargin: (27331000 / 34871000) * 100,
      ttmhigh: 290.96,
      ttmlow: 227.68,
      ma10: 118.67,
      ma20: 116.42,
      ma30: 111.87,
      ma40: 108.56,
      ma50: 105.24,
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
      grossmargin: (17165000 / 42492000) * 100,
      ttmhigh: 603.82,
      ttmlow: 415.16,
      ma10: 549.37,
      ma20: 400.69,
      ma30: 542.48,
      ma40: 539.12,
      ma50: 533.75,
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

  const applyPercentageFilter = (
    items: Result[],
    percentage: number
  ): Result[] => {
    return items.filter((item) => {
      return item.price >= item.ttmhigh * (1 - percentage / 100);
    });
  };

  const applyGreaterThanMAFilter = (
    items: Result[],
    filterValue: string
  ): Result[] => {
    if (filterValue === "10 day") {
      return items.filter((item) => {
        return item.price > item.ma10;
      });
    } else if (filterValue === "20 day") {
      return items.filter((item) => {
        return item.price > item.ma20;
      });
    } else if (filterValue === "30 day") {
      return items.filter((item) => {
        return item.price > item.ma30;
      });
    } else if (filterValue === "40 day") {
      return items.filter((item) => {
        return item.price > item.ma40;
      });
    } else {
      return items.filter((item) => {
        return item.price > item.ma50;
      });
    }
  };

  const applyMACFilter = (items: Result[], percentage: number): Result[] => {
    return items.filter((item) => {
      var denom;
      if (item.ma10 >= item.ma20) {
        denom = item.ma10;
      } else {
        denom = item.ma20;
      }
      return Math.abs(item.ma10 - item.ma20) / denom < percentage / 100;
    });
  };

  const apply52WeekDiffFilter = (
    items: Result[],
    percentage: number
  ): Result[] => {
    return items.filter((item) => {
      return item.ttmhigh > item.ttmlow + (percentage / 100) * item.ttmlow;
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
      grossmargin: {
        "< 20%": [0, 20],
        "20% - 30%": [20, 30],
        "30% - 40%": [30, 40],
        "> 40%": [40, Infinity],
      },
    };

    for (const key of Object.keys(filters)) {
      const filterValue = filters[key];
      if (filterValue) {
        if (key === "pricebelow52weekhigh") {
          const percentage = parseFloat(filterValue.replace("%", ""));
          filteredResults = applyPercentageFilter(filteredResults, percentage);
        } else if (key === "greaterthanmovingaverage") {
          filteredResults = applyGreaterThanMAFilter(
            filteredResults,
            filterValue
          );
        } else if (key === "1020daymac") {
          const percentage = parseFloat(filterValue.replace("%", ""));
          filteredResults = applyMACFilter(filteredResults, percentage);
        } else if (key === "52weekhighlowdifference") {
          const percentage = parseFloat(filterValue.replace("%", ""));
          filteredResults = apply52WeekDiffFilter(filteredResults, percentage);
        } else if (numericRanges[key]) {
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
    <div>
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
              Not sure what something means - Just press the question mark next
              to each parameter to learn more!
            </li>
          </ul>
        </div>
        <Filter
          onFilterChange={handleFilterChange}
          onSeeResults={handleSeeResults}
        />
        <Results results={results} />
      </div>
      <BackToTheTop />
    </div>
  );
};

export default Screener;
