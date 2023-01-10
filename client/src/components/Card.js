import React from 'react';
import '../styles/Card.css';

export const Card = ({ name, image, genres, platforms, rating}) => {
  return (
    <div className='Card-container'>
      <img src={image} alt={name} width='280px' height='200px'/>
      <h3 className='name'>{name}</h3>
      <span className='genre'>{genres}</span>
      <h5 className='platform'>{platforms}</h5>
      <span className='rating'>{rating}</span>
    </div>
  );
}
