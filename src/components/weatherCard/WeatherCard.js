import React from 'react';
import '../weatherCard/WeatherCard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WeatherCard = (props) => {

  const { data, icon, type, unit } = props;

  return (
    <div className="card-container">
      <div className="icon-container">
        <FontAwesomeIcon className="card-icon" icon={icon} />
      </div>

      <p className="card-data">{data}<span>{unit}</span></p>
      <p className="card-description">{type}</p>
    </div>
  )
}

export default WeatherCard;
