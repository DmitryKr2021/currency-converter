/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currencies: null,
  activeCurrency: 0,
  enterCurrency: 0,
  searchString: '',
  scrollSelect: null,
  usdRates: [],
  selectedCurrency: null,
};

const currenciesSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencies: (state, { payload }) => {
      state.currencies = payload;
    },
    setActiveCurrency: (state, { payload }) => {
      state.activeCurrency = payload;
    },
    setEnterCurrency: (state, { payload }) => {
      state.enterCurrency = payload;
    },
    searchCurrency: (state, { payload }) => {
      state.searchString = payload;
    },
    setScrollSelect: (state, { payload }) => {
      state.scrollSelect = payload;
    },
    setUSDRates: (state, { payload }) => {
      state.usdRates = payload;
    },
    setSelectedCurrency: (state, { payload }) => {
      state.selectedCurrency = payload;
    },
  },
});

export const {
  setCurrencies,
  setActiveCurrency,
  setEnterCurrency,
  searchCurrency,
  setScrollSelect,
  setUSDRates,
  setSelectedCurrency,
 } = currenciesSlice.actions;
export default currenciesSlice.reducer;
