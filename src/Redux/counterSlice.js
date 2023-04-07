import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Counter Redux",
  value: 0,
  valueInput: "2",
  loading: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    inputAmount: (state, action) => {
      state.valueInput = action.payload;
    },
    updateLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  inputAmount,
  updateLoading,
} = counterSlice.actions;

export default counterSlice.reducer;
