import React, { useState } from 'react';
import '../styles/Filter.css';

export const Filter = () => {

  const [sort, setSort] = useState(true);

  const sortRating = () => {
    setSort(true)
  }
  
  const sortAlphabetical = () => {
    setSort(false)
  }


  return (
    <div className='container-filter'>
      <span>Sort by:</span>
      <a className={sort ? 'a-filter a-filter-active' : 'a-filter'} onClick={sortRating} href='localhost:3000'>Rating</a>
      <a className={!sort ? 'a-filter a-filter-active' : 'a-filter'} onClick={sortAlphabetical} href='localhost:3000'>Alphabetical</a>
    </div>
  )
}
