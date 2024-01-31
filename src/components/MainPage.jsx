import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Converter from './Converter.jsx';
import CurrencyCourses from './CurrencyCourses.jsx';

const MainPage = () => (
  <>
    <ToastContainer />
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <div>Main page</div>
        <Converter />
        <CurrencyCourses />
      </div>
    </div>
  </>
);

export default MainPage;
