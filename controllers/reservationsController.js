// Importation
const reservationsService = require('../services/reservationsService');

class reservationsController {

    // Permet de créer une fonction SELECT * qui va essayer de récupérer les différentes destinations
    // On mettra toujours ces 2 paramètres
    async getAllReservations(request, result){
        try {
            const reservations = await reservationsService.getAllReservations();
            // result.json permet d'afficher les informations sur la page (un peu similaire à l'echo en php)
            result.json(reservations);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération des reservations"});
        }
    } 
    async getReservationsByID (request, result) {
        try {
            const reservations = await reservationsService.getReservationsByID(request.params.id);
            result.json(reservations);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération du client par ID" });
        }
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new reservationsController();