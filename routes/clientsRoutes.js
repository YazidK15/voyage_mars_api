const express = require('express');
const clientsController = require('../controllers/clientsController');

// Cst pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /clients
router.get('/', (request, result) => {clientsController.getAllClients(request, result)});
router.get('/:id', (request, result) => {clientsController.getClientsByID(request, result)});
router.post('/', (request, result) => {clientsController.addClients(request, result)});
router.delete('/:id', (request, result) => { clientsController.deleteClients(request, result) });
router.patch('/:id', (request, result) => { clientsController.updateClients(request, result) });


// Exportation pour utilisation dans d'autres fichiers
module.exports = router;