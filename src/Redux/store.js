import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import counterSliceClass from "../ClassComponent/Counter/counterSliceClass";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterClass: counterSliceClass,
  },
});
