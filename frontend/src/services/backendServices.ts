import axios from "axios";

const fetchMappedData = async (ticker: string) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/data/${ticker}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default { fetchMappedData };
