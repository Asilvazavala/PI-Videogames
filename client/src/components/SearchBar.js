import React, { useState } from 'react';
import '../styles/SearchBar.css';
import ImgSearch from '../images/search-solid.svg'
import { useDispatch } from 'react-redux';
import { getGameName } from '../actions';

export const SearchBar = () => {
  
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const deleteSearch = () => {
    setSearch('');
  }

  const handleInputChange = e => {
    e.preventDefault();
    setSearch(e.target.value)
  }

  const handleSearchBar = (e) => {
    e.preventDefault();
    dispatch(getGameName(search));
  }

  
  return (
    <div>
      <nav className='container-bar-nav'>
       <h2 className='h2-bar-nav'>Henry Videogames</h2>
        
        <div className='container-input'>
          <input
          className='input-search-bar' 
            type='text'
            value={search}
            onChange={(e) => handleInputChange(e)}
            placeholder = 'Search games...'>
          </input>
      
          <span 
            className={search.length > 0 ? 'show-x' : 'hidden-x'}
            onClick={deleteSearch}><strong>X</strong>
          </span>

          <span>
            <img 
              className='span-search'
              onClick={(e) => handleSearchBar(e)}
              src={ImgSearch} 
              alt='Search' 
              width='40px' 
              height='70px' />
          </span>

          <a className='a-bar-nav' href='/'>Home</a>
          <a className='a-bar-nav2' href='/newGame'>New Game</a>
        </div>
      </nav> 
    </div>
  )
}
//how do responsive design








