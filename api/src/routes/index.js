const { Router } = require('express');
const axios = require('axios');
const { Videogames, Genres } = require('../db');
const { API_KEY } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const routerGenres = require('./genresRoutes');
router.use('/genres', routerGenres);

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

router.get('/games', async (req, res) => {
  const searchName = req.query.name;
  const gamesTotal = await getAllGames();

    if (searchName) {
      let gameName = await gamesTotal.filter(game => game.name.toLowerCase().includes(searchName.toLowerCase()));
      gameName.length > 0 ? 
      res.send(gameName) : 
      res.status(404).end();
    } else {
        res.send(gamesTotal);
      } 
});

router.get('/games/:id', async (req, res) => {
  const searchId = req.params.id;
  const gamesTotal = await getAllGames();

  let gameId = await gamesTotal.filter(game => game.id == searchId);
  gameId.length > 0 ?
  res.send(gameId) :
  res.status(404).end();
});

router.get('/genres', async (req, res) => {
  const gamesTotal = await getAllGames();
  const genresTotal = await gamesTotal.map(game => game.genres);
  
  res.send(genresTotal);
});


module.exports = router, getAllGames;