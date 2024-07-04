const express = require('express');
const clientsController = require('../controllers/clientsController');

// Cst pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /clients
router.get('/', (request, result) => {clientsController.getAllClients(request, result)});
router.get('/:id', (request, result) => {clientsController.getClientsByID(request, result)});

// Exportation pour utilisation dans d'autres fichiers
module.exports = router;