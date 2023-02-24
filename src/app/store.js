import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

//the location of my containers from redux
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});