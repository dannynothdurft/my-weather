import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    city: "Hamburg",
    country: "DE",
  },
  reducers: {
    incrementCity(state, action) {
      state.city = action.payload;
    },
    incrementCountry(state, action) {
      state.country = action.payload;
    },
  },
});

export const { incrementCity, incrementCountry } = locationSlice.actions;

export default locationSlice.reducer;
