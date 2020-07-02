import React from 'react';
import './Header.css';

const Header = (props) => {

  const { location } = props;

  return (
    <header className='header-container'>
      <h1 className='location'>{location}</h1>
    </header>
  )
}

export default Header;