import React, {useEffect} from 'react';
import StyledCardContainer from './WeatherCardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherCard = (props) => {

  // GIVE DEFAULT PROPS FOR LOADING
  const { data = 'Loading', icon = 'spinner', type = 'Loading', unit = '', color = 'rgba(80, 79, 211, 0.9)' } = props;
  let iconClass = 'card-icon'

  if(icon === 'spinner') {
    iconClass='card-icon card-spin'
  }

  return (
    <StyledCardContainer color={color}>
      <div className="icon-container">
        <FontAwesomeIcon className={iconClass} icon={icon} />
      </div>

      <p className="card-data">{data}<span>{unit}</span></p>
      <p className="card-description">{type}</p>
    </StyledCardContainer>
  )
}

export default WeatherCard;
