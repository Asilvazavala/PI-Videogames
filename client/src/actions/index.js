import axios from 'axios';

export const getGames = () => {
  return async function(dispatch) {
    let json = await axios.get('http://localhost:3001/videogames');
    
    return dispatch({
      type: 'GET_GAMES',
      payload: json.data
    })
  }
};

export const getGenres = () => {
  return async (dispatch) => {
    let allGenres = await axios.get('http://localhost:3001/genres');
    return dispatch({
      type: 'GET_GENRES',
      payload: allGenres.data
    })
  }
};

export const orderGamesByRating = (payload) => {
  return {
    type: 'ORDER_GAMES_BY_RATING',
    payload 
  }
};

export const orderGamesByName = (payload) => {
  return {
    type: 'ORDER_GAMES_BY_NAME',
    payload
  }
};

export const filterGameCreated = (payload) => {
  return {
    type: 'FILTER_BY_GAME_CREATED',
    payload
  }
};

export const filterGenreCreated = (payload) => {
  return {
    type: 'FILTER_BY_GENRE_CREATED',
    payload
  }
};

export const getGameName = (name) => {
  return async function (dispatch) {
    try {
      let json =  await axios.get('http://localhost:3001/videogames?name=' + name);
      return dispatch({
      type: 'GET_GAME_NAME',
      payload: json.data
      })
    }
    catch(error) {
     console.log(error); 
    }
  }
};

export const postGame = (payload) => {
  return async (dispatch) => {
    const newGame = await axios.post('http://localhost:3001/videogames', payload);
    return newGame;
  }
};