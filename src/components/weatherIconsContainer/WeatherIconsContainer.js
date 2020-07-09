import React from 'react';
import _ from 'lodash';
import { SunShower, ThunderStorm, Cloudy, Flurries, Sunny, Rainy, Hazy } from '../weatherIcons/WeatherIcons';

const WeatherIconsContainer = (props) => {

  const {currentWeatherData} = props;

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

  return (
    <>
      { SetIcon() }
    </>
  )
}

export default WeatherIconsContainer;
