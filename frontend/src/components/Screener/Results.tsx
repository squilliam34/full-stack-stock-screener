import React, { useState, useEffect, useRef } from "react";
import BackToTheTop from "./BackToTheTop";

interface Result {
  symbol: string;
  sector: string;
  marketcap: string;
  dividend: number;
  price: number;
  peRatio: number;
}

interface ResultsProps {
  results: Result[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const checkHeight = () => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      if (height > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    checkHeight();

    window.addEventListener("resize", checkHeight);

    return () => {
      window.removeEventListener("resize", checkHeight);
    };
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      checkHeight();
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="results-container" ref={ref}>
      <h2>Filtered Results</h2>
      {results.length > 0 ? (
        <ul className="results-list">
          {results.map((result, index) => (
            <li key={index}>
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
      <BackToTheTop isVisible={isVisible} />
    </div>
  );
};

export default Results;
