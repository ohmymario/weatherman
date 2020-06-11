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
  // humidity/blue/%/tint, feels_like/purple/degree/sun, pressure/yellow/mb/tachometer wind_speed/green/mph/wind | max, min/#D13D41 scarlet/degree/thermometer

  const { humidity, feels_like, wind_speed, max, min, pressure } = allWeatherData;

  return (
    <div className="weather-extra-container">
      <WeatherCard data={feels_like} type={`Feels Like`} icon='sun'/>
      <WeatherCard data={humidity} type={`Humidity`} icon='tint'/>
      <WeatherCard data={wind_speed} type={`Wind`} icon='wind'/>
      <WeatherCard data={pressure} type={`Pressure`} icon='tachometer-alt'/>
      <WeatherCard data={`${min}° | ${max}°`} type={`Min/Max`} icon='thermometer-half'/>
    </div>
  )
}

export default WeatherExtra;