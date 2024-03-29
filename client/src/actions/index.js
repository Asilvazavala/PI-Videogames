import axios from 'axios';

export const getGames = () => {
  return async (dispatch) => {
    let json = await axios('http://localhost:3001/videogames');
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

export const getPlatforms = () => {
  return async function(dispatch) {
    let json = await axios.get('http://localhost:3001/platforms');
    
    return dispatch({
      type: 'GET_PLATFORMS',
      payload: json.data
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
    type: 'FILTER_GAME_BY_CREATED',
    payload
  }
};

export const filterGameByGenre = (payload) => {
  return {
    type: 'FILTER_GAME_BY_GENRE',
    payload
  }
};

export const searchGameName = (name) => {
  return async function (dispatch) {
    try {
      let json =  await axios.get('http://localhost:3001/videogames?name=' + name);
      return dispatch({
      type: 'SEARCH_GAME_NAME',
      payload: json.data
      })
    }
    catch(error) {
     alert('Game not found :( Please try with another game.'); 
    }
  }
};

export const postGame = (payload) => {
  return async function ()  {
    const newGame = await axios.post('http://localhost:3001/videogames',payload);
    return newGame;
  }
};

export const getGameDetail = (id) => {
  return async function(dispatch) {
    try {
      let json = await axios.get('http://localhost:3001/videogames/' + id);
      return dispatch ({
        type: 'GET_GAME_DETAIL',
        payload: json.data
      })
    }
    catch(error) {
      console.log(error);
    }
  }
};

export const deleteGame = (id) => {
  return async function() {
    const deleteGame = await axios.delete('http://localhost:3001/videogames/' + id);
    return deleteGame;
  }
};

export const updateGame = (id, payload) => {
  return async function ()  {
    const upGame = await axios.put(`http://localhost:3001/videogames/${id}`,payload);
    return upGame;
  }
};