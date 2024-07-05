const express = require('express');
const destinationsController = require('../controllers/destinationsController');

// Constante pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /categories
router.get('/', (request, result) => {destinationsController.getAllDestinations(request, result)});
router.get('/:id', (request, result) => {destinationsController.getDestinationsByID(request, result)});
router.post('/', (request, result) => {destinationsController.addDestinations(request, result)});
router.delete('/:id', (request, result) => { destinationsController.deleteDestinations(request, result) });
router.patch('/:id', (request, result) => { destinationsController.updateDestinations(request, result) });

// Exportation pour utilisation dans d'autres fichiers
module.exports = router;