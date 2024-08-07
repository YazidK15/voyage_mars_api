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
    async addReservations (request, result) {
        try {
            const reservations = await reservationsService.addReservations(request.body);
            result.json(reservations);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de l'ajout de la réservation" });
        }
    }
    async deleteReservations(request, result) {
        try {
            const reservations = await reservationsService.deleteReservations(request.params.id);
            if (reservations > 0) {
                result.json({ message: "Réservation supprimée avec succès" });
            } else {
                result.status(404)
                result.json({ error: "Réservation non trouvée" });
            }
        } catch (error) {
            result.status(500)
            result.json({ error: "Une erreur est survenue lors de la suppression de la réservation" });
        }
    }
    async updateReservations(request, result) {
        try {
            const reservations = await reservationsService.updateReservations(request.params.id, request.body);
            if (reservations > 0) {
                result.json({ message: "Réservation modifiée avec succès" });
            } else {
                result.status(404)
                result.json({ error: "Réservation non trouvée" });
            }
        } catch (error) {
            result.status(500)
            result.json({ error: "Une erreur est survenue lors de la modification de la réservation" });
        }
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new reservationsController();