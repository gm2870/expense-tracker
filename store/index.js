import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from './expense';

const store = configureStore({
  reducer: {
    expense: expenseSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
