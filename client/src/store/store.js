import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../appSlice/appSlice';
import todosReducer from '../appSlice/reminderSlice';
import invoiceReducer from '../appSlice/invoiceSlice';
import animalReducer from '../appSlice/animalSlice';

export const store = configureStore({
  reducer: {
    userReducer: appReducer,
    todosReducer: todosReducer,
    invoicesReducer: invoiceReducer,
    animalReducer: animalReducer,
  },
});
