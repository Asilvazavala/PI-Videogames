import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames, orderGamesByRating, orderGamesByName, filterGameCreated, filterGenreCreated } from '../actions';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { Card } from './Card'
import { SearchBar } from './SearchBar';
import { Paginado } from './Paginado';


export const Home = () => {

// Dispatch es la función que ejecuta las funciones de ./actions
  const dispatch = useDispatch();
  // Me traigo el estado de games de la store
  const allGames = useSelector((state) => state.games);
  const [orden, setOrden] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(15);
  const indexLastGame = currentPage * gamesPerPage;
  const indexFirstGame = indexLastGame - gamesPerPage;
  const currentGames = allGames.slice(indexFirstGame, indexLastGame);
  
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

// Ejecuto la action getGames de ./Actions
  useEffect(() => {
    dispatch(getGames());
  },[dispatch])

  const handleLoadGames = (e) => {
    e.preventDefault();
    dispatch(getGames());
  };

  const handleOrderGameByName = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(orderGamesByName(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
}

  const handleOrderGameByRating = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(orderGamesByRating(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handleFilterGameCreated = (e) => {
    e.preventDefault();
    dispatch(filterGameCreated(e.target.value))
  };

  const handleFilterGenreCreated = (e) => {
    e.preventDefault();
    dispatch(filterGenreCreated(e.target.value))
  };

  

  return (
    <div>
      <SearchBar/>
      <div>
        <span className='order-by'>Order by:</span>

        <button className='btn-magico' href onClick={e => {handleLoadGames(e)}}>Load Games
        </button>

        <span className='filter-by'>Filter by:</span>
      </div>
      <div className='filter-container'>
        <select className='order-option' onChange={(e) => (handleOrderGameByName(e))}>
          <option value='ora-asc'>Name (A-Z)</option>
          <option value='ora-des'>Name (Z-A)</option>
        </select>

        <select className='order-option' onChange={(e) => (handleOrderGameByRating(e))}>
          <option value='rat-asc'>Rating (1-5)</option>
          <option value='rat-des'>Rating (5-1)</option>
        </select>

        <select className='filter-option' onChange={(e) => (handleFilterGameCreated(e))}>
          <option value='all-games'>All Games</option>
          <option value='vid-exi'>Api Games</option>
          <option value='vid-cre'>DB Games</option>
        </select>

        <select className='filter-option' onChange={(e) => (handleFilterGenreCreated(e))}>
          <option value='all-genres'>All Genres</option>
          <option value='gen-exi'>Api Genres</option>
          <option value='gen-cre'>DB Genres</option>
        </select>
      </div>

      <Paginado
      gamesPerPage = {gamesPerPage}
      allGames = {allGames.length}
      paginado = {paginado}
      />

      {
        currentGames?.map((el) => {
          return (
            <div className='Card-container'>
              <Link to = {'/home/' + el.id}>
                <div className='Card'>
                  <Card 
                  name = {el.name} 
                  image = {el.image} 
                  genres = {el.genres} 
                  platforms = {el.platforms}  
                  rating = {el.rating}
                  key = {el.id}/>
                </div>              
              </Link>
            </div>
        )})
      }

     
    </div>
  )
}