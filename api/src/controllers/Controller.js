/* const { Router } = require('express');
const axios = require('axios');
const { Videogames, Genres } = require('../db');
const { API_KEY } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const gamesRouter = require('../routes/gamesRoutes');
router.use('/games', gamesRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
  const apiUrl =  await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
  const apiInfo = await apiUrl.data.results.map(el => {
    return {
      id: el.id,
      name: el.name,
      image: el.background_image,
      description: el.platforms.map(el => el.requirements_en),
      releaseDate: el.released,
      rating: el.rating,
      platforms: el.platforms.map(el => el.platform.name),
      genres: el.genres.map(el => el.name),
    };
  });
  return apiInfo;
}

const getDbInfo = async () => {
  return await Videogames.findAll({
    include: {
      model: Genres,
      attributes: ['name'],
    through: {
      attributes: [],
      },
    }
  })
};

const getAllGames = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = {
  router, 
  getApiInfo,
  getDbInfo,
  getAllGames
}; */