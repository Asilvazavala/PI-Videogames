const axios = require('axios');

async function getAllGames(req, res, next) {
  try {
    let games = (await axios('https://api.rawg.io/api/games')).data.results
    res.send(games)
  } catch (error) {
      next(error)
  }
}