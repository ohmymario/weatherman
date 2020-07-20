import React, { useState, useEffect } from 'react';
import './App.css';
import _ from 'lodash';

// Components
import CountryFlag from '../countryFlag/CountryFlag'
import WeatherIconsContainer from '../weatherIconsContainer/WeatherIconsContainer';
import Search from '../search/Search';
import Header from '../header/Header';
import CurrentTemp from '../currentTemp/CurrentTemp';
import WeatherCardContainer from '../weatherCardContainer/WeatherCardContainer';
import ForecastGraphContainer from '../forecastGraphContainer/ForecastGraphContainer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faThermometerHalf, faWind, faTint, faTachometerAlt, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

function App() {

  // make search location and the actual location two different state
  const [searchLocation, setSearchLocation] = useState('San Jose');
  const [location, setLocation] = useState('San Jose');
  const [flagCountry, setFlagCountry] = useState('US');
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [hourlyWeatherData, setHourlyWeatherData] = useState();
  const [weeklyWeatherData, setWeeklyWeatherData] = useState();


  // Daily | Weekly | Hourly Weather Data
  useEffect(() => {
    const fetchDailyData = async () => {

      try {
        // ONLY FOR THE LAT, LON, LOCATION NAME
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`);
        const data = await res.json();
        if(data.message) throw new Error(_.upperFirst(data.message));
        if(!data.sys.country) throw new Error('This location cannot be found');
        setLocation(searchLocation);
        const { sys: { country }, coord: { lat, lon } } = data;
        setFlagCountry(country)

        const resOneCall = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${process.env.REACT_APP_API_KEY}`);
        const resOneCallData = await resOneCall.json();
        const { current, daily, hourly } = resOneCallData;
        setCurrentWeatherData(current);
        setHourlyWeatherData(hourly);
        setWeeklyWeatherData(daily);
      } catch(e) {
        alert(e)
      }

    }

    fetchDailyData();

  }, [searchLocation]);


  // SET LOADING FOR THE COMPONENTS WHILE THE DATA IS BEING FETCHED

  library.add(faSun, faThermometerHalf, faWind, faTint, faTachometerAlt, faSearch, faSpinner)

  return (
      <div className="app-container">
        <CountryFlag flagCountry={flagCountry}/>
        <div className="centered-container">
          <WeatherIconsContainer currentWeatherData={currentWeatherData}/>
          <Search setSearchLocation={setSearchLocation} />
          <Header location={location} flagCountry={flagCountry}/>
          <CurrentTemp currentWeatherData={currentWeatherData} />
          <WeatherCardContainer currentWeatherData={currentWeatherData} weeklyWeatherData={weeklyWeatherData} />
          <ForecastGraphContainer weeklyWeatherData={weeklyWeatherData} hourlyWeatherData={hourlyWeatherData} />
        </div>
      </div>
  );
}

export default App;
