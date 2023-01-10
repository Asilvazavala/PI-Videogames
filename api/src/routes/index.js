const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Videogames, Genres } = require('../db');
const { API_KEY } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


/*  const gamesRouter = require('./gamesRoutes.js');
router.use('/games', gamesRouter);   */

const getApiInfo = async () => {
  const apiUrl =  await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
  const apiInfo = await apiUrl.data.results.map(el => {
    return {
      id: el.id,
      name: el.name,
      image: el.background_image,
      description: el.ratings.map(el => el.title),
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

router.get('/videogames', async (req, res) => {
  const searchName = req.query.name;
  const gamesTotal = await getAllGames();

    if (searchName) {
      let gameName = await gamesTotal.filter(
        game => game.name.toLowerCase().includes(searchName.toLowerCase()));
      gameName.length > 0 ? 
      res.send(gameName) : 
      res.status(404).end();
    } else {
        res.send(gamesTotal);
      } 
});

router.get('/videogames/:id', async (req, res) => {
  const id = req.params.id;
  const gamesTotal = await getAllGames();

  if(id) {
    let gameId = await gamesTotal.filter(game => game.id == id);
    gameId.length > 0 ?
    res.send(gameId) :
    res.status(404).end();
  }
});

 router.get('/genres', async (req,res) => {
  const genreVideo = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
  const apiGenre = await genreVideo.data.results.map(el => el.name);
  apiGenre.map(el => Genres.findOrCreate({
     where: {name: el}
  }))

     const allGenres = await Genres.findAll();
     res.send(allGenres);
}); 

router.post('/videogames', async (req, res) => {
  let {
    name,
    image,
    description,
    releaseDate,
    rating,
    platforms,
    genres,
    createdInDB
  } = req.body;

  let createGame = await Videogames.create ({
    name,
    image,
    description,
    releaseDate,
    rating,
    platforms,
    createdInDB
  })

  let createGenre = await Genres.findAll({ where: { name: genres } })
  createGame.addGenres(createGenre)

  res.send('Juego creado con éxito');
});


module.exports = router, {
  getApiInfo,
  getDbInfo,
  getAllGames
};