import React from "react";
import { Result } from "../../types/interfaces";
import { useParams } from "react-router-dom";
import { groupStockData } from "../../utils/groupStockData";
import InfoDropdown from "../../components/StockDetails/InfoDropdown";

interface StockDetailsProps {
  data: Result[];
}

const StockDetails: React.FC<StockDetailsProps> = ({ data }) => {
  const { symbol } = useParams<{ symbol: string }>();
  const stock = data.find((item) => item.symbol === symbol);

  if (!stock) {
    return <p>Stock not found</p>;
  }

  const groupedData = groupStockData(stock);

  return (
    <div className="stock-page">
      <div className="stock-details">
        <h2>
          {stock.name} ({stock.symbol})
        </h2>
        <div style={{ padding: "25px" }}>
          {Object.keys(groupedData).map((group) => (
            <InfoDropdown
              key={group}
              title={group}
              entries={groupedData[group]}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "black",
          width: "40rem",
          marginTop: "5rem",
          height: "25rem",
          alignContent: "center",
        }}
      >
        Chart goes here
      </div>
    </div>
  );
};

export default StockDetails;
