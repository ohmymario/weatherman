import React, { useState, useEffect } from 'react';
import './WeatherExtra.css';

import WeatherCard from '../weatherCard/WeatherCard';

const WeatherExtra = (props) => {

  const [ allWeatherData, setAllWeatherData ] = useState();

  useEffect(() => {

    const currentWeather = (obj) => {
      const objCopy = Object.assign({}, obj);
      Object.keys(objCopy).forEach((key) => {
        if(typeof objCopy[key] === 'number') {
          objCopy[key] = Math.round(objCopy[key])
        }
      })
      return objCopy;
    }

    if(props.currentWeatherData && props.weeklyWeatherData) {
      const newCurrentWeatherData = currentWeather(props.currentWeatherData);
      const newWeeklyWeatherData = currentWeather(props.weeklyWeatherData[0].temp);
      const merged = {...newCurrentWeatherData, ...newWeeklyWeatherData}
      setAllWeatherData(merged)
    }

  }, [props])

  if(!allWeatherData) return null;
  // humidity/blue/%, feels_like/purple/degree, pressure/yellow/mb wind_speed/green/mph | max, min/#D13D41 scarlet/degree

  const { humidity, feels_like, pressure, wind_speed, max, min } = allWeatherData;


  return (
    <div className="weather-extra-container">
      <WeatherCard data={feels_like} />
      {/* <WeatherCard data={humidity} /> */}
      {/* <WeatherCard data={pressure} /> */}
      {/* <WeatherCard data={wind_speed} /> */}
      {/* <WeatherCard data={`${min}° - ${max}°`} /> */}

    </div>
  )
}

export default WeatherExtra;