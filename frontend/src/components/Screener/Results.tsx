import React from "react";

interface Result {
  symbol: string;
  sector: string;
  marketcap: string;
}

interface ResultsProps {
  results: Result[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className="results-container">
      <h2>Filtered Results</h2>
      {results.length > 0 ? (
        <ul className="results-list">
          {results.map((result, index) => (
            <li key={index}>
              {result.symbol} - {result.sector} - {result.marketcap}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results to display</p>
      )}
    </div>
  );
};

export default Results;
