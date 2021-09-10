import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: null,
  },
  reducers: {
    setWeather: (state, { payload }) => {
      state.weather = payload;
    },
  },
});

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
