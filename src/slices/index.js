import { configureStore } from '@reduxjs/toolkit';
import currenciesSliceReducer from './currencies';

export default configureStore({
  reducer: {
    currenciesSlice: currenciesSliceReducer,
  },
});
