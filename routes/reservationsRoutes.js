const express = require('express');
const reservationsController = require('../controllers/reservationsController');

// Constante pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /reservations
router.get('/', (request, result) => {reservationsController.getAllReservations(request, result)});
router.get('/:id', (request, result) => {reservationsController.getReservationsByID(request, result)});
router.post('/', (request, result) => {reservationsController.addReservations(request, result)});
router.delete('/:id', (request, result) => { reservationsController.deleteReservations(request, result) });
router.patch('/:id', (request, result) => { reservationsController.updateReservations(request, result) });

// Exportation pour utilisation dans d'autres fichiers
module.exports = router;