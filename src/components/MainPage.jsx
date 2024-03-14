import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Converter from './Converter.jsx';
import CurrencyCourses from './CurrencyCourses.jsx';
import '../App.css';

const MainPage = () => (
  <>
    <ToastContainer />
    <div className="container h-100 my-5 overflow-hidden rounded shadow bg-light">
      <div className="row h-100 bg-white flex-md-row"></div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active w-50"
            id="nav-convert-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-convert"
            type="button"
            role="tab"
            aria-controls="nav-convert"
            aria-selected="true"
          >
            Convert
          </button>
          <button
            className="nav-link w-50"
            id="nav-currency-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-currency"
            type="button"
            role="tab"
            aria-controls="nav-currency"
            aria-selected="false"
          >
            Currency
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-convert"
          role="tabpanel"
          aria-labelledby="nav-convert-tab"
        >
          <Converter />
        </div>
        <div
          className="tab-pane fade pb-4"
          id="nav-currency"
          role="tabpanel"
          aria-labelledby="nav-currency-tab"
        >
          <CurrencyCourses />
        </div>
      </div>
    </div>
  </>
);

export default MainPage;
