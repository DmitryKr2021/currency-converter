/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: {},
  currencies: null,
  activeCurrency: {},
  enterCurrency: {},
  searchString: {},
  scrollSelect: null,
  usdRates: [],
  selectedCurrency: null,
  location: {},
};

const currenciesSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCountriesMini: (state, { payload }) => {
      state.countries = payload;
    },
    setCurrencies: (state, { payload }) => {
      state.currencies = payload;
    },
    setActiveCurrency: (state, { payload }) => {
      const [idValue, value] = payload;
      state.activeCurrency[idValue] = value;
    },
    setEnterCurrency: (state, { payload }) => {
      const [idValue, currency] = payload;
      state.enterCurrency[idValue] = currency;
    },
    searchCurrency: (state, { payload }) => {
      const [idValue, value] = payload;
      state.searchString[idValue] = value;
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
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
  },
});

export const {
  setCountriesMini,
  setCurrencies,
  setActiveCurrency,
  setEnterCurrency,
  searchCurrency,
  setScrollSelect,
  setUSDRates,
  setSelectedCurrency,
  setLocation,
 } = currenciesSlice.actions;
export default currenciesSlice.reducer;
