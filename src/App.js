import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import CurrencyCourses from './components/CurrencyCourses.jsx';
import Converter from './components/Converter.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import MainPage from './components/MainPage.jsx';
import './App.css';
import * as routes from './routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.root()} element={null}>
      <Route index element={<MainPage />} />
      <Route path={routes.currencyPath()} element={<CurrencyCourses />} />
      <Route path={routes.converterPath()} element={<Converter />} />
      <Route path={routes.mainPath()} element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

const App = () => (
  <div className="h-100">
    <div className="h-100" id="chat">
      <div className="h-100 d-flex flex-column">
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white"></nav>
        <Button>Button</Button>
        <RouterProvider router={router} />
      </div>
    </div>
  </div>
);

export default App;
