import React from "react";
import { Result } from "../../types/interfaces";
import { Link } from "react-router-dom";

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
              <Link to={`/stocks/${result.symbol}`}>{result.symbol}</Link>
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
