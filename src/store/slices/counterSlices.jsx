import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  step: 1,
};

const counterSlices = createSlice({
  initialState: initialState,
  name: "counter", // для інструментів розробника devTools
  reducer: {
    increment: (state, action) => {
      const { count, step } = state;
      count = count + step;
    },

    decrement: (state, action) => {
      const { count, step } = state;
      count = count - step;
    },
  },
});

const {reducer,actions} = counterSlices
const {increment,decrement} = actions

export default reducer