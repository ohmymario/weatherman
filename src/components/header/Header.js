import React, { useState } from 'react';
import './Header.css';
import { GoSearch } from 'react-icons/go';

const Header = (props) => {

  const { location } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [toggleSearch, setToggleSearch] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(searchTerm);

    // todo : check if valid location before clearing
    setSearchTerm('')
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }


  // FIX TOGGLE OF SEARCH

  const BLURRING = (e) => {
    alert('BLURRRRRRING')
  }

  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [])

  return (
    <header className='header-container'>

      <h1 className='location'>{location}</h1>

      <div className='searchContainer'>

        <form className='search' id='search' onSubmit={handleSubmit}>

          <input
            onFocus={() => setToggleSearch(false)}
            onBlur={(e) => BLURRING(e)}
            type="text"
            placeholder='Search'
            name='inputSearch'
            id='inputSearch'
            className='inputSearch'
            value={searchTerm}
            onChange={handleChange}
            autoComplete='off'
          />

          {toggleSearch ?
            <label htmlFor='inputSearch' className='searchIcon'>
              <GoSearch color={'rgb(187, 187, 187)'} size={45} className={'goSearch'} />
            </label>
            :
            <label htmlFor="inputSubmit" className='searchIcon'>
              {/* <GoSearch color={'rgb(139, 139, 139)'} size={45} className={'goSearch'} /> */}
              <GoSearch color={'red'} size={45} className={'goSearch'} />
              <input type="submit" value='' name='inputSubmit' id='inputSubmit' />
            </label>
          }


        </form>
      </div>

    </header>
  )
}

export default Header;