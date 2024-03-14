import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import ScrollIntoView from 'react-scroll-into-view';
import {
  setActiveCurrency,
  setEnterCurrency,
  setSelectedCurrency,
} from '../slices/currencies';
import '../css/flag-icon.css';

const Currencies = (prop) => {
  const { idValue } = prop;
  const dataName = `${idValue}list`;
  const [currencyData, setCurrencyData] = useState(null);
  const dispatch = useDispatch();

  const activeCurrency = useSelector(
    (state) => state.currenciesSlice.activeCurrency,
  );
  const enterCurrency = useSelector(
    (state) => state.currenciesSlice.enterCurrency,
  );
  const searchString = useSelector(
    (state) => state.currenciesSlice.searchString[idValue],
  );
  const currencies = useSelector((state) => state.currenciesSlice.currencies);

  const refScroll = useRef(`[data-id=d0]`);

  const handleClick = (e) => {
    e.preventDefault();
    const params = [idValue, e.target.id];
    dispatch(setActiveCurrency(params));
    refScroll.current = `[data-id=d${e.target.id}]`;
  };

  const divs = document.querySelectorAll(`div[data-list=${dataName}]`);
  divs.forEach((div) => div.addEventListener('click', handleClick));

  useEffect(() => {
    if (currencies) {
      const targetCurr = searchString
        ? currencies.filter(
            (curr) =>
              curr.c.toLowerCase().indexOf(searchString?.toLowerCase(), 0) ===
              0,
          )
        : currencies;
      setCurrencyData(targetCurr);
      dispatch(setSelectedCurrency(targetCurr));
    }
  }, [searchString, currencies, dispatch, idValue]);

  const handleEnter = (e, currency) => {
    e.target.style = 'cursor: pointer';
    const params = [idValue, currency];
    dispatch(setEnterCurrency(params));
  };

  const getClassName = (keyId) => {
    switch (keyId) {
      case activeCurrency[idValue]:
        return 'bg-primary text-white';
      case enterCurrency[idValue]:
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
        <ListGroup style={{ width: 300 }} id={dataName}>
          {currencyData?.map((currency) => {
            const { i2, i3, c, idNumber } = currency;
            const keyId = idValue + idNumber;
            return (
              <ListGroup.Item
                key={keyId}
                id={keyId}
                className={getClassName(keyId)}
                onMouseEnter={(e) => handleEnter(e, keyId)}
                data-id={`d${keyId}`}
                data-list={dataName}
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
