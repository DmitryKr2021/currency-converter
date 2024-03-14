import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SearchCurrency from './SearchCurrency.jsx';
import Currencies from './Currencies.jsx';
import getLocation from '../utils/getLocation';
// import '../App.css';

// let city = 'Washington';
/* const getLocation = () => {
  const locationResult = document.querySelector('#locationResult');
  locationResult.textContent = 'Retrieving User Location...';

  const options = {
    enableHighAccuracy: true,
    timeout: 30000, // wait for 0.5 minutes
  };
  const error = (err) => {
    console.log(err);
  };
  const success = async (position) => {
    const { coords } = position;
    const lat = coords.latitude;
    const lon = coords.longitude;
    await axios({
      method: 'GET',
      url: `https://api.api-ninjas.com/v1/reversegeocoding?lat=${lat}&lon=${lon}`,
      headers: { 'X-Api-Key': 'MNW/pGbG25GMVqoBWa0RKA==XGFS1DM3JQx5wq8H' },
    })
      .then((response) => {
        const { data } = response;
        console.log('response=', data[0].name, data[0].country);
        city = data[0].name;
      })
      .catch((err) => {
        console.log(err);
      });

    locationResult.textContent = 'See my location on a map';
    locationResult.href = `https://www.openstreetmap.org?mlat=${coords.latitude}&amp;mlon=${coords.longitude}`;
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}; */

const BaseCurrency = () => {
  useEffect(() => {
    getLocation();
  }, []);
  const location = useSelector((state) => state.currenciesSlice.location);
  const countries = useSelector((state) => state.currenciesSlice.countries);
  const baseCurrency = countries[location.country?.toLowerCase()];

  return (
    <div className="mt-4 text-center">
      <h4>Hi there at {location.city}</h4>
      <h5>
        Your base currency is 
        <span style={{ color: 'blue' }}>&nbsp;&lt;{baseCurrency}&gt;</span>
      </h5>
      <Button variant="outline-primary">Select other base currency</Button>
      <div className="mt-2">
        <SearchCurrency idValue={'v1'}/>
        <div className="border border-primary text-start"
          style={{height: 400, overflow: "auto"}}
        >
          <Currencies idValue={'v1'}/>
        </div>
      </div>
      <div>
        <a id="locationResult" target="_blank">
          88888
        </a>
      </div>
    </div>
  );
};
export default BaseCurrency;
