import React from 'react';
import StyledWeatherContainer from './CurrentTempStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CurrentWeather = (props) => {

  return (
    <StyledWeatherContainer>
      {props.currentWeatherData ?
        <>
          <p className="weather-description">{props.currentWeatherData.weather[0].description}</p>
          <div className="weather-temperature">
            {Math.round(props.currentWeatherData.temp)}
            <span className="weather-unit">&#176;F</span>
          </div>
        </>
        :
        <FontAwesomeIcon className='icon-spin' icon='spinner' size='3x'/>
      }
    </StyledWeatherContainer>
  )
}

export default CurrentWeather;