import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import ScrollIntoView from 'react-scroll-into-view';
import { setActiveCurrency, setEnterCurrency, setSelectedCurrency } from '../slices/currencies';
import '../css/flag-icon.css';

const Currencies = () => {
  const [currencyData, setCurrencyData] = useState(null);
  const dispatch = useDispatch();

  const activeCurrency = useSelector(
    (state) => state.currenciesSlice.activeCurrency,
  );
  const enterCurrency = useSelector(
    (state) => state.currenciesSlice.enterCurrency,
  );
  const searchString = useSelector(
    (state) => state.currenciesSlice.searchString,
  );
  const currencies = useSelector((state) => state.currenciesSlice.currencies);

  const refScroll = useRef(`[data-id=d0]`);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setActiveCurrency(+e.target.id));
    refScroll.current = `[data-id=d${+e.target.id}]`;
  };

  const divs = document.querySelectorAll('div[data-list="list"]');
  divs.forEach((div) => div.addEventListener('click', handleClick));

  useEffect(() => {
    if (currencies) {
      const targetCurr = currencies.filter(
        (curr) =>
          curr.c.toLowerCase().indexOf(searchString.toLowerCase(), 0) === 0,
      );
      setCurrencyData(targetCurr);
      dispatch(setSelectedCurrency(targetCurr));
    }
  }, [searchString, currencies, dispatch]);

  const handleEnter = (e, currency) => {
    e.target.style = 'cursor: pointer';
    dispatch(setEnterCurrency(currency));
  };

  const getClassName = (currency) => {
    switch (currency) {
      case activeCurrency:
        return 'bg-primary text-white';
      case enterCurrency:
        return 'bg-info';
      default:
        return 'bg-light';
    }
  };

  const getFlag = (i2, c) => {
    switch (c) {
      case 'euro':
        return `flag-icon flag-icon-eu me-1`;
      case 'US dollar':
        return `flag-icon flag-icon-us me-1`;
      case 'British pound':
        return `flag-icon flag-icon-gb me-1`;
      default:
        return `flag-icon flag-icon-${i2} me-1`;
    }
  };

  const toUpperFirstChar = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="text-truncate">
      <ScrollIntoView selector={refScroll.current}>
        <ListGroup style={{ width: 300 }} id="list">
          {currencyData?.map((currency) => {
            const { i2, i3, c, idNumber } = currency;
            return (
              <ListGroup.Item
                key={idNumber}
                id={idNumber}
                className={getClassName(idNumber)}
                onMouseEnter={(e) => handleEnter(e, idNumber)}
                data-id={`d${idNumber}`}
                data-list="list"
              >
                <span className={getFlag(i2, c)}></span>
                {i3}
                {toUpperFirstChar(c)}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </ScrollIntoView>
    </div>
  );
};

export default Currencies;
