import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expense',
  initialState: [
    {
      id: 'e1',
      description: 'a book',
      amount: 69,
      date: new Date('2022-05-19'),
    },
    {
      id: 'e2',
      description: 'a book2',
      amount: 69,
      date: new Date('2022-05-19'),
    },
    {
      id: 'e3',
      description: 'a book3',
      amount: 69,
      date: new Date('2022-05-19'),
    },
    {
      id: 'e4',
      description: 'a book4',
      amount: 69,
      date: new Date('2023-06-19'),
    },
  ],

  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random().toString();
      state.push({
        id,
        description: action.payload.description,
        amount: action.payload.amount,
        date: action.payload.date,
      });
    },
    updateExpense: (state, action) => {
      const updatedItem = action.payload;
      state.splice(state.indexOf(updatedItem.id), 1);
      state.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});
export const { removeExpense, addExpense, updateExpense } =
  expenseSlice.actions;
export default expenseSlice;
