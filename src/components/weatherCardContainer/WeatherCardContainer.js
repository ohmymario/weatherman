import React, { useState, useEffect } from 'react';
import StyledWeatherCardContainer from './WeatherCardContainerStyles';

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

  return (
    <StyledWeatherCardContainer>
      {allWeatherData ?
      <>
        <WeatherCard
          data={`${allWeatherData.feels_like}°`}
          type={`Feels Like`}
          icon='sun'
          />
        <WeatherCard
          data={allWeatherData.humidity}
          type={`Humidity`}
          icon='tint'
          unit={'%'}
          />
        <WeatherCard
          data={allWeatherData.wind_speed}
          type={`Wind`}
          icon='wind'
          unit={'mph'}
          />
        <WeatherCard
          data={`${allWeatherData.min}° | ${allWeatherData.max}°`}
          type={`Min/Max`}
          icon='thermometer-half'
        />
        <WeatherCard
          data={allWeatherData.pressure}
          type={`Pressure`}
          icon='tachometer-alt'
          unit={'mbar'}
          />

      </>
        :
      <>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
        <WeatherCard/>
      </>
      }
    </StyledWeatherCardContainer>
  )
}

export default WeatherCardContainer;