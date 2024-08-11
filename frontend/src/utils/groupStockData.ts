import { Result } from "../types/interfaces";

interface GroupedData {
  [key: string]: { field: string; value: string | number }[];
}

export const groupStockData = (stock: Result): GroupedData => {
  return {
    "Company Overview": [],
    "Current Financials": [
      { field: "Net Income", value: stock.netincome },
      { field: "Total Revenue", value: stock.totalrevenue },
    ],
    Valuation: [
      { field: "Price", value: stock.price },
      { field: "PE Ratio", value: stock.peratio },
      { field: "PEG Ratio", value: stock.pegratio },
      { field: "PS Ratio", value: stock.psratio },
    ],
    "Moving Averages": [
      { field: "10-day MA", value: stock.ma10 },
      { field: "20-day MA", value: stock.ma20 },
      { field: "30-day MA", value: stock.ma30 },
      { field: "40-day MA", value: stock.ma40 },
      { field: "50-day MA", value: stock.ma50 },
    ],
  };
};
