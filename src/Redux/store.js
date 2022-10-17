import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./Slice/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
