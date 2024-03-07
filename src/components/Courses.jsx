// import React, { useState, useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const Courses = () => {
  const activeCurrency = useSelector(
    (state) => state.currenciesSlice.activeCurrency,
  );
  const enterCurrency = useSelector(
    (state) => state.currenciesSlice.enterCurrency,
  );
  const usdRates = useSelector((state) => state.currenciesSlice.usdRates);
  const selectedCurrency = useSelector((state) => state.currenciesSlice.selectedCurrency);

  const getClassName = (number) => {
    switch (number) {
      case activeCurrency:
        return 'bg-primary text-white';
      case enterCurrency:
        return 'bg-info';
      default:
        return 'bg-light';
    }
  };

  return (
    <div className="d-flex ms-2">
      <ListGroup style={{ width: 100, textAlign: "right" }}>
        {selectedCurrency?.map((currency) => (
          <ListGroup.Item
            as="li"
            className={getClassName(currency.idNumber)}
            key={currency.idNumber}
            data-id={currency.idNumber}
          >
            <span>{(usdRates[currency.i3.slice(0, 3)])?.toFixed(3)}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Courses;

/* 
<span>{currency.idNumber}</span> 
<span>{currency.i3.slice(0, 3)}</span>
*/