import axios from "axios";
import { Result } from "../types/interfaces";

const getStockData = async (ticker: string): Promise<Result | null> => {
  try {
    const response = await axios.get<Result>(
      `http://localhost:5000/api/data/${ticker}`
    );
    const data: Result = response.data;
    return data;
  } catch (error) {
    console.log(`Error fetching data: ${error}`);
    return null;
  }
};

export default getStockData;
