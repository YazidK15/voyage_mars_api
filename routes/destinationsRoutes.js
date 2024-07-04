const express = require('express');
const destinationsController = require('../controllers/destinationsController');

// Constante pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /categories
router.get('/', (request, result) => {destinationsController.getAllDestinations(request, result)});
router.get('/:id', (request, result) => {destinationsController.getDestinationsByID(request, result)});

// Exportation pour utilisation dans d'autres fichiers
module.exports = router;