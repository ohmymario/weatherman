import React, { useState } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => {

  const { setLocation } = props;

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
    setLocation(searchTerm)
    setSearchTerm('')
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (

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

          {/* NOT EMPTY AND FOCUSED */}
          {(!toggleSearch || !checkEmpty(searchTerm)) &&
            <label htmlFor="inputSubmit" className='submitIcon'>
              {/* <GoSearch color={'rgb(159, 159, 159)'} size={45} className={'goSearch'} /> */}
              <FontAwesomeIcon size="2x" color={'rgb(159, 159, 159)'} icon={`search`} />
              <input onClick={handleSubmit} type="submit" name='inputSubmit' id='inputSubmit' />
            </label>
          }

          {/* EMPTY */}
          {(toggleSearch || checkEmpty(searchTerm)) &&
            <label htmlFor='inputSearch' className='searchIcon'>
              {/* <GoSearch color={'rgb(187, 187, 187)'} size={45} className={'goSearch'} /> */}
              <FontAwesomeIcon size="2x" color={'rgb(187, 187, 187)'} icon={`search`} />
            </label>
          }

        </form>
      </div>

  )
}

export default Header;