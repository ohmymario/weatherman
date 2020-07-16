import React from 'react';
import StyledHeaderContainer from './HeaderStyles';


const Header = (props) => {

  const { location } = props;

  return (
    <StyledHeaderContainer>
      <h1 className='location'>{location}</h1>
    </StyledHeaderContainer>
  )
}

export default Header;