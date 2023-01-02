const { Router } = require('express');
const { getAllGames } = require('../controllers/gamesController');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// router.use('./', getAllGames)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;