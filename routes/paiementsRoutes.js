const express = require('express');
const paiementsController = require('../controllers/paiementsController');

// Constante pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /paiements
router.get('/', (request, result) => {paiementsController.getAllPaiements(request, result)});
router.get('/:id', (request, result) => {paiementsController.getPaiementsByID(request, result)});
router.post('/', (request, result) => {paiementsController.addPaiements(request, result)});
router.delete('/:id', (request, result) => { paiementsController.deletePaiements(request, result) });
router.patch('/:id', (request, result) => { paiementsController.updatePaiements(request, result) });


// Exportation pour utilisation dans d'autres fichiers
module.exports = router;