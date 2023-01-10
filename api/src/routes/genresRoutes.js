/* const  express  = require('express');
const genresRouter = express.Router();
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
router.get('/genres', async (req, res) => {
  const gamesTotal = await getAllGames();
  const genresTotal = await gamesTotal.map(game => game.genres);
  const genresEach = genresTotal.flat();

  genresEach.forEach(el => { Genres.findOrCreate({ where: { name: el } })
  })
  const allGenres = await Genres.findAll();
  res.send(allGenres);
});

module.exports = genresRouter; */