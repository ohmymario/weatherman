import React, { useState } from 'react';
import StyledSearchContainer from './SearchStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = (props) => {

  const { setSearchLocation } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [toggleSearch, setToggleSearch] = useState(true);

  const checkEmpty = (str) => {
    return (!str || /^\s*$/.test(str));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkEmpty(searchTerm)) return;
    setSearchLocation(searchTerm)
    setSearchTerm('')
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (

      <StyledSearchContainer>
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
              <FontAwesomeIcon size="2x" color={'rgb(159, 159, 159)'} icon={`search`} />
              <input onClick={handleSubmit} type="submit" name='inputSubmit' id='inputSubmit' />
            </label>
          }

          {/* EMPTY */}
          {(toggleSearch || checkEmpty(searchTerm)) &&
            <label htmlFor='inputSearch' className='searchIcon'>
              <FontAwesomeIcon size="2x" color={'rgb(187, 187, 187)'} icon={`search`} />
            </label>
          }

        </form>
      </StyledSearchContainer>

  )
}

export default Search;