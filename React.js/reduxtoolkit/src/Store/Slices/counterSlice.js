import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

let counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: function (state, action) {
      state.count = state.count + 1;
    },

    decrement: function (state, action) {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
