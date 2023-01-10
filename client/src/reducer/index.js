const initialState = {
  games: [],
  allGames: [],
  genres: [],
  allGenres: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_GAMES':
      return {
        ...state,
        games: action.payload,
        allGames: action.payload
      }
    case 'GET_GENRES':
        return {
          ...state,
          genres: action.payload,
          allGenres: action.payload
      }
    case 'ORDER_GAMES_BY_RATING':
      let orderRating = action.payload === 'rat-asc' ?
        state.games.sort(function (a, b) {
          if (a.rating > b.rating) {
            return 1;
          } else if (a.rating < b.rating) {
              return -1;
          }
          return 0 
        }) : 
        state.games.sort(function (a, b) {
          if (a.rating > b.rating) {
            return -1;
          } else if (a.rating < b.rating) {
              return 1;
          }
          return 0 
        })
        return {
          ...state,
          games: orderRating
      }
    case 'ORDER_GAMES_BY_NAME':
      let orderName = action.payload === 'ora-asc' ?
        state.games.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
              return -1;
          }
          return 0 
        }) : 
        state.games.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          } else if (a.name < b.name) {
              return 1;
          }
          return 0 
        })
        return {
          ...state,
          games: orderName
      }
    case 'FILTER_BY_GAME_CREATED':
      const filterGameCreated = action.payload === 'vid-cre' ? state.allGames.filter(el => el.createdInDB) : state.allGames.filter(el => !el.createdInDB)
      return {
        ...state,
        games: action.payload === 'all-games' ? state.allGames : filterGameCreated
      }
    case 'FILTER_BY_GENRE_CREATED':
        const filterGenreCreated = action.payload === 'gen-cre' ? state.allGenres.filter(el => el.createdInDB) : state.allGenres.filter(el => !el.createdInDB)
        return {
          ...state,
          genres: action.payload === 'all-genres' ? state.allGenres : filterGenreCreated
      }
    case 'GET_GAME_NAME':
      return {
        ...state,
        games: action.payload
      }
    case 'POST_GAME':
      return {
        ...state,
      }
    default:  
      return state
  }
};

export default rootReducer;