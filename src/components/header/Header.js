import React, { useState } from 'react';
import './Header.css';
import { GoSearch } from 'react-icons/go';

const Header = (props) => {

  const { location } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [toggleSearch, setToggleSearch] = useState(true);

  const checkEmpty = (str) => {
    return (!str || /^\s*$/.test(str));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkEmpty(searchTerm)) return;

    // TODO : send back search query to wrapping container state
    // TODO : check if valid location before clearing
    setSearchTerm('')
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <header className='header-container'>

      <h1 className='location'>{location}</h1>

      {/* SEPARATE COMPONENT LATER :) */}
      <div className='searchContainer'>
        <form className='search' id='search' onSubmit={handleSubmit}>

          <input
            onFocus={() =>  setToggleSearch(false)}
            onBlur={() => setToggleSearch(true)}
            onChange={handleChange}

            type="text"
            placeholder='Search'

            name='inputSearch'
            id='inputSearch'
            className='inputSearch'

            value={searchTerm}
            autoComplete='off'
          />


          {(!toggleSearch || !checkEmpty(searchTerm)) &&
            <label htmlFor="inputSubmit" className={'submitIcon'}>
              <GoSearch color={'rgb(159, 159, 159)'} size={45} className={'goSearch'} />
              <input onClick={handleSubmit} type="submit" name='inputSubmit' id='inputSubmit' />
            </label>
            }

          {(toggleSearch || checkEmpty(searchTerm)) &&
            <label htmlFor='inputSearch' className='searchIcon'>
              <GoSearch color={'rgb(187, 187, 187)'} size={45} className={'goSearch'} />
            </label>
          }

        </form>
      </div>

    </header>
  )
}

export default Header;