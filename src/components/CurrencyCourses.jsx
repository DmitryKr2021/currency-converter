import React from 'react';
import '../css/flag-icon.css';
import Currencies from './Currencies.jsx';
import Courses from './Courses.jsx';
import SearchCurrency from './SearchCurrency.jsx';
import CurrencyContext from './contexts/index.jsx';

const CurrencyCourses = () => (
  <CurrencyContext.Provider value={''}>
    <div style={{ width: 500 }}>
      <SearchCurrency />
      <div
        className="border border-primary overflow-auto"
        style={{ height: 500 }}
      >
        <div className="d-flex border border-secondary">
          <Currencies />
          <Courses />
        </div>
      </div>
    </div>
  </CurrencyContext.Provider>
);
export default CurrencyCourses;
