import axios from 'axios';

export const getExpenses = async () => {
  try {
    const response = await axios.get('http://localhost:5000/expenses');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw error;
  }
};

export const getBalances = async () => {
  try {
    const response = await axios.get('http://localhost:5000/wallet_balance');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw error;
  }
};
