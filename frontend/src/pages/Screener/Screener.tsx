import React, { useState } from "react";
import { Result } from "../../types/interfaces";
import sampleData from "../../types/sampleData";
import { Filter, Results, BackToTheTop } from "../../components/Screener";

const Screener: React.FC = () => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [results, setResults] = useState<Result[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

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

  const applyOverPeriodFilter = (
    items: Result[],
    fundamental: string,
    filterValue: string,
    period: string
  ): Result[] => {
    return items.filter((item) => {
      var identifier;
      if (period == "yoy") {
        identifier = "previousyear";
      }
      if (period == "qq") {
        identifier = "previousquarter";
      }
      const current = item[fundamental as keyof Result];
      const previous = item[(identifier + fundamental) as keyof Result];
      if (filterValue === "Any") {
        return current > previous;
      } else if (filterValue === "10%") {
        // @ts-ignore
        return ((current - previous) / previous) * 100 >= 10;
      } else if (filterValue === "15%") {
        // @ts-ignore
        return ((current - previous) / previous) * 100 >= 15;
      } else if (filterValue === "20%") {
        // @ts-ignore
        return ((current - previous) / previous) * 100 >= 20;
      } else if (filterValue === "25%") {
        // @ts-ignore
        return ((current - previous) / previous) * 100 >= 25;
      } else {
        // @ts-ignore
        return ((current - previous) / previous) * 100 >= 30;
      }
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
        } else if (key.includes("yoy")) {
          // filter the year over year filters
          const fundamental = key.substring(3);
          filteredResults = applyOverPeriodFilter(
            filteredResults,
            fundamental,
            filterValue,
            "yoy"
          );
        } else if (key.includes("qq")) {
          // filter the quarter over quarter filters
          const fundamental = key.substring(2);
          filteredResults = applyOverPeriodFilter(
            filteredResults,
            fundamental,
            filterValue,
            "qq"
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
