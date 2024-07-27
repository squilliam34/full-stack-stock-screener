import axios from 'axios';

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

export default { fetchFinancials };