const express = require('express');
const  {getAllGames}  = require('./index');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerGenres = express.Router();

/* routerGenres.get('/', async (req, res) => {
  const gamesTotal = await getAllGames;
  const genresTotal = await gamesTotal.map(game => game.genres);
  
  res.send(genresTotal);
}); */
// router.use('./', getAllGames)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = routerGenres;