import React from 'react';
import '../weatherCard/WeatherCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WeatherCard = (props) => {
  return (
    <div className="card-container">
      <div className="icon-container">
        <FontAwesomeIcon className="card-icon" icon={props.icon} />
      </div>

      <p className="card-data">{props.data}</p>
      <p className="card-description">{props.type}</p>
    </div>
  )
}

export default WeatherCard;
