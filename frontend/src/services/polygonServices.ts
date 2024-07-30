import axios from "axios";

const fetchFinancials = async (ticker: string) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/polygon/financials/${ticker}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchMovingAverages = async (ticker: string, window: string) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/polygon/movingAverage/${ticker}/${window}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default { fetchFinancials, fetchMovingAverages };
