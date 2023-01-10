/* const  express  = require('express');
const gamesRouter = express.Router();
import { getApiInfo, getDbInfo, getAllGames } from './index';

const getData = async () => {
  await getApiInfo();
  await getDbInfo();
  await getAllGames();
};

const executeFunctions = async () => {
  await getData();
}

executeFunctions();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// router.use('./', getAllGames)
gamesRouter.use(express.json());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
gamesRouter.get('/games', async (req, res) => {
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

gamesRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  const gamesTotal = await getAllGames();

  if(id) {
    let gameId = await gamesTotal.filter(game => game.id == id);
    gameId.length > 0 ?
    res.send(gameId) :
    res.status(404).end();
  }
});

gamesRouter.post('/', async (req, res) => {
  let {
    name,
    image,
    description,
    releaseDate,
    rating,
    platforms,
    createdInDB,
    genres
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

module.exports = gamesRouter; */