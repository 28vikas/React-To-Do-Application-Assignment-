import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todoSlice/todoSlice";

export const appStore = configureStore({
  reducer: todoReducer,
})
