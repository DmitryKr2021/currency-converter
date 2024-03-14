import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import cn from 'classnames';
import { InputGroup, Form } from 'react-bootstrap';
import { searchCurrency } from '../slices/currencies';
import usd from '../imgs/usd.jpg';

const SearchCurrency = (prop) => {
  const {idValue} = prop;
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const [inputValid, setInputValid] = useState(true);
  const currencies = useSelector((state) => state.currenciesSlice.currencies);
  const inputOk = cn('border-0', 'p-0', 'ps-2', 'form-control');
  const inputNotOk = cn(
    { inputOk },
    'text-danger',
    'border-danger',
    'border-2',
  );

  const checkInputValue = (value) => {
    if (currencies) {
      const targetIndex = currencies.find(
        (curr) => curr.c.toLowerCase().indexOf(value.toLowerCase(), 0) === 0,
      );
      if (!targetIndex) {
        setInputValid(false);
      } else {
        setInputValid(true);
      }
    };
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const params = [idValue, value];
    setSearchValue(value);
    dispatch(searchCurrency(params));
    checkInputValue(value);
  };

  return (
    <Formik initialValues={{ searchValue: '' }}>
      {({ handleBlur }) => (
        <Form noValidate="" className="py-1 border mb-3 rounded-2">
          <InputGroup className="has-validation">
            <InputGroup.Text id="basic-addon1">
              <img
                alt="usd"
                src={usd}
                style={{
                  width: 40,
                }}
              />
            </InputGroup.Text>
            <Form.Control
              name="searchValue"
              aria-label="searchValue"
              placeholder="Search"
              onChange={handleChange}
              className={inputValid ? inputOk : inputNotOk}
              onBlur={handleBlur}
              value={searchValue}
            />
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};

export default SearchCurrency;
