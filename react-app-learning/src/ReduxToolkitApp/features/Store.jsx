import { configureStore } from "@reduxjs/toolkit";  
import userReducer from './UserSlice'; // For user API call
import counterReducer from './CounterSlice';   // For counter state management

export const store = configureStore({
  reducer: {
    counter: counterReducer,
   users: userReducer
  },
});