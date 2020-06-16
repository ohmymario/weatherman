import React from 'react';
import StyledCardContainer from './WeatherCardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherCard = (props) => {

  const { data, icon, type, unit, color } = props;

  return (
    <StyledCardContainer color={color}>
      <div className="icon-container">
        <FontAwesomeIcon className="card-icon" icon={icon} />
      </div>

      <p className="card-data">{data}<span>{unit}</span></p>
      <p className="card-description">{type}</p>
    </StyledCardContainer>
  )
}

export default WeatherCard;
