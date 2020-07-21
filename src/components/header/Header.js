import React from 'react';
import StyledHeaderContainer from './HeaderStyles';


const Header = (props) => {

  const { location, flagCountry } = props;

  return (
    <StyledHeaderContainer>
      <h1 className='header-location'>
        {location.trim()}
      <span className="header-country">, {flagCountry}</span>
      </h1>
    </StyledHeaderContainer>
  )
}

export default Header;