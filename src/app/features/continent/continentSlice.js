import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://disease.sh/v3/covid-19';

const initialState = {
  data: [],
  loading: false,
  error: undefined,
  inDetail: false,
  continents: true,
  countries: false,
};

export const fetchContinents = createAsyncThunk('continent/getContinents', async (payload) => {
  try {
    const response = await axios.get(`${URL}/${payload}`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const continentSlice = createSlice({
  name: 'continent',
  initialState,
  reducers: {
    setActiveStat: (state) => {
      state.continents = !state.continents;
      state.countries = !state.countries;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContinents.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchContinents.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchContinents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setActiveStat } = continentSlice.actions;

export default continentSlice.reducer;
