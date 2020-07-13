import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import CountryFlag from '../countryFlag/CountryFlag'
import WeatherIconsContainer from '../weatherIconsContainer/WeatherIconsContainer';
import Search from '../search/Search';
import Header from '../header/Header';
import CurrentTemp from '../currentTemp/CurrentTemp';
import WeatherCardContainer from '../weatherCardContainer/WeatherCardContainer';
import Forecast from '../forecast/Forecast';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faThermometerHalf, faWind, faTint, faTachometerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [location, setLocation] = useState('San Jose');
  const [flagCountry, setFlagCountry] = useState('')
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [hourlyWeatherData, setHourlyWeatherData] = useState();
  const [weeklyWeatherData, setWeeklyWeatherData] = useState();


  // Daily | Weekly | Hourly Weather Data
  useEffect(() => {
    const fetchDailyData = async () => {

      // ONLY FOR THE LAT, LON, LOCATION NAME
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json();
      const { country } = data.sys;
      const { lat, lon } = data.coord;
      setFlagCountry(country)

      const resOneCall = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${process.env.REACT_APP_API_KEY}`);
      const resOneCallData = await resOneCall.json();
      const { current, daily, hourly } = resOneCallData;
      setCurrentWeatherData(current);
      setHourlyWeatherData(hourly);
      setWeeklyWeatherData(daily);
    }

    fetchDailyData();

  }, [location]);


  // SET LOADING FOR THE COMPONENTS WHILE THE DATA IS BEING FETCHED

  library.add(faSun, faThermometerHalf, faWind, faTint, faTachometerAlt, faSearch)

  return (
      <div className="app-container">
        <CountryFlag flagCountry={flagCountry}/>
        <div className="centered-container">
          <WeatherIconsContainer currentWeatherData={currentWeatherData}/>
          <Search setLocation={setLocation} />
          <Header location={location} />
          <CurrentTemp currentWeatherData={currentWeatherData} />
          <WeatherCardContainer currentWeatherData={currentWeatherData} weeklyWeatherData={weeklyWeatherData} />
          <Forecast weeklyWeatherData={weeklyWeatherData} hourlyWeatherData={hourlyWeatherData} />
        </div>
      </div>
  );
}

export default App;
