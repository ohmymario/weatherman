import React, { useState, useEffect } from 'react';
import './WeatherCardContainer.css';

import WeatherCard from '../weatherCard/WeatherCard';

const WeatherCardContainer = (props) => {

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
  // humidity/blue/%/tint,
  // feels_like/purple/degree/sun,
  // pressure/yellow/mb/tachometer,
  // wind_speed/green/mph/wind | max,
  // min/#D13D41 scarlet/degree/thermometer

  const { humidity, feels_like, wind_speed, max, min, pressure } = allWeatherData;

  return (
    <div className="weather-card-container">
      <WeatherCard data={`${feels_like}°`} type={`Feels Like`} icon='sun' unit={""} color='rgba(80, 79, 211, 0.9)'/>
      <WeatherCard data={humidity} type={`Humidity`} icon='tint' unit={"%"} color='rgba(80, 79, 211, 0.9)'/>
      <WeatherCard data={wind_speed} type={`Wind`} icon='wind' unit={"mph"} color='rgba(80, 79, 211, 0.9)'/>
      <WeatherCard data={pressure} type={`Pressure`} icon='tachometer-alt' unit={"mbar"} color='rgba(80, 79, 211, 0.9)'/>
      <WeatherCard data={`${min}° | ${max}°`} type={`Min/Max`} icon='thermometer-half' unit={""} color='rgba(80, 79, 211, 0.9)'/>
      {/* <WeatherCard data={`${feels_like}°`} type={`Feels Like`} icon='sun' unit={""} color='rgba(80, 79, 211)'/>
      <WeatherCard data={humidity} type={`Humidity`} icon='tint' unit={"%"} color='rgba(84, 175, 237)'/>
      <WeatherCard data={wind_speed} type={`Wind`} icon='wind' unit={"mph"} color='rgba(89, 198, 58)'/>
      <WeatherCard data={pressure} type={`Pressure`} icon='tachometer-alt' unit={"mbar"} color='rgba(245, 206, 2)'/>
      <WeatherCard data={`${min}° | ${max}°`} type={`Min/Max`} icon='thermometer-half' unit={""} color='rgba(209, 61, 65)'/> */}
    </div>
  )
}

export default WeatherCardContainer;