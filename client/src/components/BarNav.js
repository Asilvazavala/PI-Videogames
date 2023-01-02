import React, { useState } from 'react';
import '../styles/BarNav.css';
import ImgSearch from '../images/search-solid.svg'

export const BarNav = () => {
  
  const [search, setSearch] = useState('');

  const deleteSearch = () => {
    setSearch('');
  }

  const handleChange = event => {
    setSearch(event.target.value)
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
            onChange={handleChange}
            placeholder = 'Search for games...'>
          </input>
      
          <span 
            className={search.length > 0 ? 'show-x' : 'hidden-x'}
            onClick={deleteSearch}><strong>X</strong>
          </span>

          <span>
            <img 
              className='span-search'
              src={ImgSearch} 
              alt='Search' 
              width='40px' 
              height='70px' />
          </span>

          <a className='a-bar-nav' href='localhost:3000'>Home</a>
          <a className='a-bar-nav' href='localhost:3000'>About</a>
        </div>
      </nav> 
    </div>
  )
}
