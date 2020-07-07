import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Search from '../search/Search';
import Header from '../header/Header';
import CurrentTemp from '../currentTemp/CurrentTemp';
import WeatherExtra from '../weatherExtra/WeatherExtra';
import Forecast from '../forecast/Forecast';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faThermometerHalf, faWind, faTint, faTachometerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [location, setLocation] = useState('San Jose');
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [hourlyWeatherData, setHourlyWeatherData] = useState();
  const [weeklyWeatherData, setWeeklyWeatherData] = useState();

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();

    var AmOrPm = a.getHours() >= 12 ? 'PM' : 'AM';
    var hour = (a.getHours() % 12) || 12;
    var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
    var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();

    var time = `${month} ${date}, ${year} ${hour}:${min} ${AmOrPm}`
    return time;
  }

  // Daily | Weekly | Hourly Weather Data
  useEffect(() => {
    const fetchDailyData = async () => {

      // ONLY FOR THE LAT, LON, LOCATION NAME
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`);
      const data = await res.json();
      const { lat, lon } = data.coord;
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
        <Search setLocation={setLocation} />
        <Header location={location} />
        <CurrentTemp currentWeatherData={currentWeatherData} />
        <WeatherExtra currentWeatherData={currentWeatherData} weeklyWeatherData={weeklyWeatherData} />
        <Forecast weeklyWeatherData={weeklyWeatherData} hourlyWeatherData={hourlyWeatherData} />
      </div>
  );
}

export default App;
