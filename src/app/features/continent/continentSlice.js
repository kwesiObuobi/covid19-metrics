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

export const getSingleItem = createAsyncThunk('item/getItem', async ({ first, second }) => {
  try {
    const response = await axios.get(`${URL}/${first}/${second}`);
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
    resetStats: (state) => {
      state.continents = true;
      state.countries = false;
    },
    showBackButton: (state) => {
      state.inDetail = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContinents.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchContinents.fulfilled, (state, action) => {
      state.inDetail = false;
      state.loading = false;

      const newData = [];
      let j = 0;
      action.payload.forEach((item) => {
        let obj = {
          cases: item.cases,
          deep: !!(j === 1 || j === 2),
        };
        if (state.countries === true) {
          obj = { ...obj, country: item.country };
        } else {
          obj = { ...obj, continent: item.continent };
        }
        newData.push(obj);
        j += 1;
        if (j === 4) {
          j = 0;
        }
      });
      state.data = newData;
    });

    builder.addCase(fetchContinents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setActiveStat, resetStats, showBackButton } = continentSlice.actions;

export default continentSlice.reducer;
