import React from 'react';
import '../weatherCard/WeatherCard.css';

const WeatherCard = (props) => {
  // console.log(props)
  return (
    <div>
      {props.data}
    </div>
  )
}

export default WeatherCard;
