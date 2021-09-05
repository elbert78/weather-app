import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: null,
  },
  reducers: {
    setWeather: (state, { payload }) => {
      state.weather = payload;
    },
    // deleteWeather: (state,{payload}) =>{
    //   state = state.filter(c => c.id !== payload)
    // }
  },
});

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
