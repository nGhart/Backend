import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
  },
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    addTransaction: (state, action) => {
      state.transactions = [...state.transactions, action.payload];
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });
    },
    editTransaction: (state, action) => {
      state.transactions = state.transactions.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.newTransaction;
        }
        return item;
      });
    },
    // getEachTotal: (state) => {
    //   let totalIncome = 0;
    //   let totalExpense = 0;

    //   state.transactions.transactions.map((item) =>
    //     item.transactionType === 'Expense'
    //       ? (totalExpense = totalExpense + Number(item.price))
    //       : (totalIncome = totalIncome + Number(item.price))
    //   );

    //   state.totalIncome = totalIncome.toFixed(2);
    //   state.totalExpense = totalExpense.toFixed(2);
    // },
    // getBalance: (state) => {
    //   let balance;
    //   balance = state.totalIncome - state.totalExpense;
    //   state.balance = balance.toFixed(2);
    // },

    // getEachTotal: (state) => {
    //   let totalIncome = 0;
    //   let totalExpense = 0;

    //   state.transactions.forEach((item) => {
    //     if (item.transactionType === 'Expense') {
    //       totalExpense += Number(item.price);
    //     } else {
    //       totalIncome += Number(item.price);
    //     }
    //   });

    //   state.totalIncome = totalIncome.toFixed(2);
    //   state.totalExpense = totalExpense.toFixed(2);
    //   console.log(state.totalExpense);
    // },
    // getBalance: (state) => {
    //   const balance = state.totalIncome - state.totalExpense;
    //   state.balance = balance.toFixed(2);
    // },
  },
});
export const {
  setTransactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
  getEachTotal,
  getBalance,
} = transactionSlice.actions;
// export const fetchTransactions = () => async (dispatch) => {
//   try {
//     const response = await axios.get('http://localhost:1994/transactions');
//     dispatch(setTransactions(response.data));
//   } catch (error) {
//     console.error('Error fetching transactions:', error);
//   }
// };
export const fetchTransactions = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:1994/transactions');
    dispatch(setTransactions(response.data));
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
};

export default transactionSlice.reducer;
