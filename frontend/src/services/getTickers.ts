import axios from "axios";

type TickerResponse = {
  ticker: string;
};

const getTickers = async (): Promise<string[]> => {
  try {
    const response = await axios.get<TickerResponse[]>(
      "http://localhost:5000/api/tickers"
    );
    const tickers = response.data.map((item) => item.ticker);
    return tickers;
  } catch (error) {
    console.error("Error fetching tickers:", error);
    return [];
  }
};

export default getTickers;
