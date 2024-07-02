import React from "react";

interface Result {
  symbol: string;
  sector: string;
  marketCap: string;
}

interface ResultsProps {
  results: Result[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div>
      <h2>Filtered Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {result.symbol} - {result.sector} - {result.marketCap}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
