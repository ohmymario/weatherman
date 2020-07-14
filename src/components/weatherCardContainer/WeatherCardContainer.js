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


  // Render the container at all times
  // Bring in LOADING cards in case allWeatherData isn't ready

  return (
    <div className="weather-card-container">
      {allWeatherData &&
      <>
        <WeatherCard
          data={`${allWeatherData.feels_like}°`}
          type={`Feels Like`}
          icon='sun'
          unit={''} c
          color='rgba(80, 79, 211, 0.9)'/>
        <WeatherCard
          data={allWeatherData.humidity}
          type={`Humidity`}
          icon='tint'
          unit={'%'}
          color='rgba(80, 79, 211, 0.9)'/>
        <WeatherCard
          data={allWeatherData.wind_speed}
          type={`Wind`}
          icon='wind'
          unit={'mph'}
          color='rgba(80, 79, 211, 0.9)'/>
        <WeatherCard
          data={allWeatherData.pressure}
          type={`Pressure`}
          icon='tachometer-alt'
          unit={'mbar'}
          color='rgba(80, 79, 211, 0.9)'/>
        <WeatherCard
          data={`${allWeatherData.min}° | ${allWeatherData.max}°`}
          type={`Min/Max`}
          icon='thermometer-half'
          unit={''}
          color='rgba(80, 79, 211, 0.9)'/>
      </>
      }
    </div>
  )
}

{/* <WeatherCard data={`${feels_like}°`} type={`Feels Like`} icon='sun' unit={""} color='rgba(80, 79, 211)'/>
<WeatherCard data={humidity} type={`Humidity`} icon='tint' unit={"%"} color='rgba(84, 175, 237)'/>
<WeatherCard data={wind_speed} type={`Wind`} icon='wind' unit={"mph"} color='rgba(89, 198, 58)'/>
<WeatherCard data={pressure} type={`Pressure`} icon='tachometer-alt' unit={"mbar"} color='rgba(245, 206, 2)'/>
<WeatherCard data={`${min}° | ${max}°`} type={`Min/Max`} icon='thermometer-half' unit={""} color='rgba(209, 61, 65)'/> */}
export default WeatherCardContainer;