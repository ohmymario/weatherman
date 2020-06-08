import React from 'react'
import './CurrentTemp.css'

const CurrentWeather = (props) => {
  // HAVE A LOADING STATE IF THE WEATHER DATA ISNT FETCHED YET!
  if(!props.currentWeatherData) return null;

  const { temp, weather } = props.currentWeatherData;


  return (
    <div className="weather-container">
        <p className="weather-description">{weather[0].description}</p>
        <div className="weather-temperature">
          {Math.round(temp)}
          <span className="weather-unit">&#176;F</span>
        </div>
    </div>
  )
}

export default CurrentWeather;