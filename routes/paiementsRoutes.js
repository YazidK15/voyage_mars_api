const express = require('express');
const paiementsController = require('../controllers/paiementsController');

// Constante pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /paiements
router.get('/', (request, result) => {paiementsController.getAllPaiements(request, result)});

// Exportation pour utilisation dans d'autres fichiers
module.exports = router;