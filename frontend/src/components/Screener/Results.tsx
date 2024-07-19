import React from "react";

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
  previousyearnetincome: number;
  previousyeartotalrevenue: number;
  previousyearebitda: number;
  previousquarternetincome: number;
  previousquartertotalrevenue: number;
  previousquarterebitda: number;
}

interface ResultsProps {
  results: Result[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className="results-container">
      <h2>Filtered Results</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index} className="result-item">
              {result.symbol}
              <ul>
                <li>Sector: {result.sector}</li>
                <li>Market Cap: {result.marketcap}</li>
                <li>Price: ${result.price}</li>
                <li>Dividend Yield: {result.dividend}%</li>
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>No results to display</p>
      )}
    </div>
  );
};

export default Results;
