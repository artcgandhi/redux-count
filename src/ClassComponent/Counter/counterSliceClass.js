import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Counter Class",
  value: 0,
};

const counterSliceClass = createSlice({
  name: "counter-class",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmountAct: (state, action) => {
      // incrementByAmountAct(5)
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmountAct } =
  counterSliceClass.actions;

export default counterSliceClass.reducer;
