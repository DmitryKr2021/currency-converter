import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './slices/index';
import createContriesArray from './utils/getCountries';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setCurrencies, setUSDRates } from './slices/currencies';
import CurrencyContext from './components/contexts/index.jsx';

const runApp = async () => {

  const countries = createContriesArray();
  const [greatBritain] = countries.filter((country) => country.n === 'England');
  greatBritain.i3 = 'GBP -';
  const currencies = [...countries];

  const addI3 = (data) => {
    const currencyValues = Object.values(data);
    currencies.forEach((currency) => {
      currencyValues.forEach((value) => {
        const str1 = value.name?.toLowerCase();
        const str2 = currency.c.toLowerCase().slice(0, 5);
        if (str1 && str1.includes(str2)) {
          // eslint-disable-next-line no-param-reassign
          currency.i3 = `${value.short_code} - `;
        }
      });
    });
    return currencies;
  }

  const resultCur = [];
  const i3s = [];
  const callback = (currency) => {
    const { i3 } = currency;
    if (!i3s.includes(i3)) {
      i3s.push(currency.i3);
      resultCur.push(currency);
    }
  };

  const root = ReactDOM.createRoot(document.getElementById('root'));
  const { dispatch } = store;

  const baseUrl = 'https://api.currencybeacon.com/v1/';
  const API_KEY = 'koPySd4oaPMxR4a4omShWagFcKwC3Hw2';
  const requestData = async () => {
    await axios
      .get(`${baseUrl}currencies?api_key=${API_KEY}`)
      .then((response) => {
        const filteredCurrencies = addI3(response.data).filter((currency) => currency.i3);
        filteredCurrencies.forEach((currency) => callback(currency));
        const resultCurrencies = (resultCur.sort((a, b) => (a.i3 > b.i3 ? 1 : -1)));
        // eslint-disable-next-line no-param-reassign
        const result = resultCurrencies.map((elem, ind) => { elem.idNumber = ind; 
          return elem;
        } )
        dispatch(setCurrencies(result));
        // return response.data;
      })
      .catch(() => {
        // const notify = () => toast.error(t('toasts.dataNotLoaded'));
        // notify();
      });
  };

  requestData();

  const requestRates = async () => {
    await axios
      .get(`${baseUrl}latest?api_key=${API_KEY}`)
      .then((response) => {
        const { data } = response;
        dispatch(setUSDRates(data.rates));
      })
      .catch(() => {
        // const notify = () => toast.error(t('toasts.dataNotLoaded'));
        // notify();
      });
  };

  requestRates();

  root.render(
    <CurrencyContext.Provider value={{ requestData }}>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </CurrencyContext.Provider>,
  )
};
runApp();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
