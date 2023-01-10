import React, {useState} from 'react';
import '../styles/Paginado.css';

export const Paginado = ({ gamesPerPage, allGames, paginado }) => {
  const pageNumber = []
  for (let i = 1; i <= Math.ceil(allGames/gamesPerPage); i++) {
    pageNumber.push(i)
  }

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <nav>
        <ul className='ul-paginated'>
          {
            pageNumber &&
            pageNumber.map(number => {
              return (
              <li key ={number}> 
                <a 
                  onClick={() => paginado(number) & setCurrentPage(number)} 
                  key = {number} 
                  className = {currentPage  === number ? 'li-paginated-active' : 'li-paginated'}
                  href>{number}
                </a>
              </li>
            )})
          }
        </ul>
      </nav>
    </div>
  )
}
