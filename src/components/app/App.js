import React, { useState, useEffect } from 'react';
import './App.css';
import _ from 'lodash';


// Components
import Search from '../search/Search';
import Header from '../header/Header';
import CurrentTemp from '../currentTemp/CurrentTemp';
import WeatherCardContainer from '../weatherCardContainer/WeatherCardContainer';
import Forecast from '../forecast/Forecast';
import { SunShower, ThunderStorm, Cloudy, Flurries, Sunny, Rainy, Hazy } from '../weatherIcons/WeatherIcons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faThermometerHalf, faWind, faTint, faTachometerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [location, setLocation] = useState('San Jose');
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [hourlyWeatherData, setHourlyWeatherData] = useState();
  const [weeklyWeatherData, setWeeklyWeatherData] = useState();


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

  const SetIcon = () => {
    if(!currentWeatherData) return
    let { id } = currentWeatherData.weather[0]
    // Thunderstorm
    if(_.inRange(id, 200, 299)) return <ThunderStorm/>
    // Drizzle, Rainy
    if(_.inRange(id, 300, 399)) return <Rainy/>
    if(_.inRange(id, 500, 599)) return <Rainy/>
    // Snow
    if(_.inRange(id, 600, 699)) return <Flurries/>
    // Hazy
    if(_.inRange(id, 700, 799)) return <Hazy/>
    // Clear
    if(id===800) return <Sunny/>
    // Clouds
    if(_.inRange(id, 801, 899)) return <Cloudy/>
  }

  // SET LOADING FOR THE COMPONENTS WHILE THE DATA IS BEING FETCHED

  library.add(faSun, faThermometerHalf, faWind, faTint, faTachometerAlt, faSearch)

  return (
      <div className="app-container">
        { SetIcon() }
        <Search setLocation={setLocation} />
        <Header location={location} />
        <CurrentTemp currentWeatherData={currentWeatherData} />
        <WeatherCardContainer currentWeatherData={currentWeatherData} weeklyWeatherData={weeklyWeatherData} />
        <Forecast weeklyWeatherData={weeklyWeatherData} hourlyWeatherData={hourlyWeatherData} />
      </div>
  );
}

export default App;
