import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://disease.sh/v3/covid-19/continents';

const initialState = {
  continents: [],
  loading: false,
  error: undefined,
  inDetail: false,
};

export const fetchContinents = createAsyncThunk('continent/getContinents', async () => {
  try {
    const response = await axios(URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const continentSlice = createSlice({
  name: 'continent',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContinents.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchContinents.fulfilled, (state, action) => {
      state.loading = false;
      state.continents = action.payload;
    });

    builder.addCase(fetchContinents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default continentSlice.reducer;
