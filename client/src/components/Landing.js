import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Landing.css';

export const Landing = () => {
  return (
    <div className='container-all'>
      <h1>Let's play!</h1>
      <Link to = '/home'>
        <button href className='btn-neon-land'>
          <span id='span1'></span>
          <span id='span2'></span>
          <span id='span3'></span>
          <span id='span4'></span>
          Start
        </button>      
      </Link>
    </div>
  )
}
