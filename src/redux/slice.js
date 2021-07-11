/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "shloka",
  initialState: {
    shlokaData: null,
  },
  reducers: {
    addToShlokaData: (state, action) => {
      state.shlokaData = action.payload;
    },
    resetShlokaData: (state) => {
      state.shlokaData = null;
    },
  },
});

export const { addToShlokaData, resetShlokaData } = Slice.actions;
export const selectShlokaDataDetails = (state) => state.shloka.shlokaData;

export default Slice.reducer;
