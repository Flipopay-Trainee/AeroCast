import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let result;

export const fetchWeatherData = createAsyncThunk(
  "fetchWeatherData",
  async (city) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=4&key=b94ce14915d7492999b73045242005`
    );
    result = await response.json();
    // console.log(result);
  }
);

const weatherData = createSlice({
  name: "weatherData",
  initialState: {
    data: null,
    isError: false,
    status: "idle",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchWeatherData.fulfilled, (state) => {
      // state.data = action.payload;
      // console.log(`action.payload clg -`);
      // console.log(state.data.location.name);
      state.data = result;
      console.log(state.data.location.country);
      state.status = "succeeded";
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      console.log(`Error ${action.payload}`);
      state.isError = true;
      state.status = "failed";
    });
  },
});

export default weatherData.reducer;
