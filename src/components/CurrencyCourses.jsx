import React from 'react';
import '../css/flag-icon.css';
import Currencies from './Currencies.jsx';
import Courses from './Courses.jsx';
import SearchCurrency from './SearchCurrency.jsx';
import CurrencyContext from './contexts/index.jsx';
import BaseCurrency from './BaseCurrency.jsx';

const CurrencyCourses = () => (
  <CurrencyContext.Provider value={''}>
    <div className="d-flex justify-content-around mt-4 border border-danger">
      <div>
        <BaseCurrency />
      </div>
      <div style={{ width: 500 }}>
        <SearchCurrency idValue={'v2'}/>
        <div
          className="border border-primary overflow-auto"
          style={{ height: 500 }}
        >
          <div className="d-flex border border-secondary">
            <Currencies idValue={'v2'}/>
            <Courses />
          </div>
        </div>
      </div>
    </div>
  </CurrencyContext.Provider>
);
export default CurrencyCourses;
