import React, { useState } from "react";
import { Filter, Results } from "../../components/Screener";

interface Result {
  symbol: string;
  sector: string;
  marketcap: string;
  dividend: number;
  price: number;
  peRatio: number;
  pegRatio: number;
  psRatio: number;
  pbRatio: number;
  currentRatio: number;
  sharpeRatio: number;
  eps: number;
  netIncome: number;
  totalRevenue: number;
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
      peRatio: 74.97,
      pegRatio: 1.44,
      psRatio: 39.33,
      pbRatio: 65.76,
      currentRatio: 5.12,
      sharpeRatio: 1.28,
      eps: 1.73,
      netIncome: 42598000,
      totalRevenue: 79744700,
    },
    {
      symbol: "MSFT",
      sector: "Information Technology",
      marketcap: "Large Cap",
      dividend: 0,
      price: 451.28,
      peRatio: 40.37,
      pegRatio: 2.31,
      psRatio: 14.76,
      pbRatio: 13.49,
      currentRatio: 3.4,
      sharpeRatio: 1.93,
      eps: 11.83,
      netIncome: 86181000,
      totalRevenue: 236584000,
    },
    {
      symbol: "JPM",
      sector: "Finance",
      marketcap: "Large Cap",
      dividend: 3.13,
      price: 164.36,
      peRatio: 12.38,
      pegRatio: 3.36,
      psRatio: 1.93,
      pbRatio: 1.34,
      currentRatio: 2.93,
      sharpeRatio: 3.22,
      eps: 7.07,
      netIncome: 50349000,
      totalRevenue: 158512000,
    },
    {
      symbol: "V",
      sector: "Finance",
      marketcap: "Large Cap",
      dividend: 2.54,
      price: 114.93,
      peRatio: 29.77,
      pegRatio: 1.45,
      psRatio: 2.48,
      pbRatio: 13.75,
      currentRatio: 2.15,
      sharpeRatio: 2.14,
      eps: 9.43,
      netIncome: 18390000,
      totalRevenue: 34871000,
    },
    {
      symbol: "TMO",
      sector: "Healthcare",
      marketcap: "Large Cap",
      dividend: 0.29,
      price: 547.84,
      peRatio: 34.36,
      pegRatio: 0.57,
      psRatio: 4.92,
      pbRatio: 3.82,
      currentRatio: 0.06,
      sharpeRatio: 4.81,
      eps: 15.73,
      netIncome: 6034000,
      totalRevenue: 42492000,
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
          });
        } else if (key === "pricerange") {
          // numeric filtering for price range
          filteredResults = filteredResults.filter((item) => {
            const price = item.price;
            if (filterValue === "< $50") {
              return price < 50;
            } else if (filterValue === "$50 - $100") {
              return price >= 50 && price <= 100;
            } else if (filterValue === "$100 - $200") {
              return price >= 100 && price <= 200;
            } else if (filterValue === "> $200") {
              return price > 200;
            }
          });
        } else if (key == "p/eratio") {
          // numeric filtering for pe ration
          filteredResults = filteredResults.filter((item) => {
            const peRatio = item.peRatio;
            if (filterValue === "0 - 10") {
              return peRatio <= 10;
            } else if (filterValue === "10 - 20") {
              return peRatio >= 10 && peRatio <= 20;
            } else if (filterValue === "20 - 30") {
              return peRatio >= 20 && peRatio <= 30;
            } else if (filterValue === "30 - 40") {
              return peRatio >= 30 && peRatio <= 40;
            } else if (filterValue === "40+") {
              return peRatio >= 40;
            }
          });
        } else if (key == "pegratio") {
          // numeric filtering for peg ratio
          filteredResults = filteredResults.filter((item) => {
            const pegRatio = item.pegRatio;
            if (filterValue === "0.0 - 1.0") {
              return pegRatio >= 0 && pegRatio <= 1;
            } else if (filterValue === "1.0 - 2.0") {
              return pegRatio >= 1 && pegRatio <= 2;
            } else if (filterValue === "2.0 - 3.0") {
              return pegRatio >= 2 && pegRatio <= 3;
            } else if (filterValue === "3.0+") {
              return pegRatio >= 3;
            }
          });
        } else if (key == "p/sratio") {
          // numeric filtering for p/s ratio
          filteredResults = filteredResults.filter((item) => {
            const psRatio = item.psRatio;
            if (filterValue === "0.0 - 1.0") {
              return psRatio >= 0 && psRatio <= 1;
            } else if (filterValue === "1.0 - 2.0") {
              return psRatio >= 1 && psRatio <= 2;
            } else if (filterValue === "2.0 - 3.0") {
              return psRatio >= 2 && psRatio <= 3;
            } else if (filterValue === "3.0+") {
              return psRatio >= 3;
            }
          });
        } else if (key == "p/bratio") {
          // numeric filtering for p/b ratio
          filteredResults = filteredResults.filter((item) => {
            const pbRatio = item.pbRatio;
            if (filterValue === "0.0 - 1.0") {
              return pbRatio >= 0 && pbRatio <= 1;
            } else if (filterValue === "1.0 - 2.0") {
              return pbRatio >= 1 && pbRatio <= 2;
            } else if (filterValue === "2.0 - 3.0") {
              return pbRatio >= 2 && pbRatio <= 3;
            } else if (filterValue === "3.0+") {
              return pbRatio >= 3;
            }
          });
        } else if (key == "currentratio") {
          // numeric filtering for current ratio
          filteredResults = filteredResults.filter((item) => {
            const currentRatio = item.currentRatio;
            if (filterValue === "0.0 - 1.0") {
              return currentRatio >= 0 && currentRatio <= 1;
            } else if (filterValue === "1.0 - 2.0") {
              return currentRatio >= 1 && currentRatio <= 2;
            } else if (filterValue === "2.0 - 3.0") {
              return currentRatio >= 2 && currentRatio <= 3;
            } else if (filterValue === "3.0+") {
              return currentRatio >= 3;
            }
          });
        } else if (key == "sharperatio") {
          // numeric filtering for sharpe ratio
          filteredResults = filteredResults.filter((item) => {
            const sharpeRatio = item.sharpeRatio;
            if (filterValue === "0.0 - 1.0") {
              return sharpeRatio >= 0 && sharpeRatio <= 1;
            } else if (filterValue === "1.0 - 2.0") {
              return sharpeRatio >= 1 && sharpeRatio <= 2;
            } else if (filterValue === "2.0 - 3.0") {
              return sharpeRatio >= 2 && sharpeRatio <= 3;
            } else if (filterValue === "3.0+") {
              return sharpeRatio >= 3;
            }
          });
        } else if (key == "eps") {
          // numeric filtering for sharpe ratio
          filteredResults = filteredResults.filter((item) => {
            const eps = item.eps;
            if (filterValue === "0 - 5") {
              return eps >= 0 && eps <= 5;
            } else if (filterValue === "5 - 10") {
              return eps >= 5 && eps <= 10;
            } else if (filterValue === "10 - 15") {
              return eps >= 10 && eps <= 15;
            } else if (filterValue === "15+") {
              return eps >= 15;
            }
          });
        } else if (key == "netincome") {
          // numeric filtering for net income
          filteredResults = filteredResults.filter((item) => {
            const netIncome = item.netIncome / 1000000;
            if (filterValue === "< $25m") {
              return netIncome <= 25;
            } else if (filterValue === "$25m - $50m") {
              return netIncome >= 25 && netIncome <= 50;
            } else if (filterValue === "$50m - $75m") {
              return netIncome >= 50 && netIncome <= 75;
            } else if (filterValue === "$75m - $100m") {
              return netIncome > 75 && netIncome <= 100;
            } else if (filterValue === "> $100m") {
              return netIncome >= 100;
            }
          });
        } else if (key == "totalrevenue") {
          // numeric filtering for total revenue
          filteredResults = filteredResults.filter((item) => {
            const totalRevenue = item.totalRevenue / 1000000;
            if (filterValue === "< $50m") {
              return totalRevenue <= 50;
            } else if (filterValue === "$50m - $100m") {
              return totalRevenue >= 50 && totalRevenue <= 100;
            } else if (filterValue === "$100m - $150m") {
              return totalRevenue >= 100 && totalRevenue <= 150;
            } else if (filterValue === "> $150m") {
              return totalRevenue >= 150;
            }
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
