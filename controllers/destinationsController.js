// Importation
const destinationsService = require('../services/destinationsService');

class destinationsController {

    // Permet de créer une fonction SELECT * qui va essayer de récupérer les différentes destinations
    // On mettra toujours ces 2 paramètres
    async getAllDestinations(request, result){
        try {
            const destinations = await destinationsService.getAllDestinations();
            // result.json permet d'afficher les informations sur la page (un peu similaire à l'echo en php)
            result.json(destinations);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération des destinations"});
        }
    } 
    
    async getDestinationsByID (request, result) {
        try {
            const destinations = await destinationsService.getDestinationsByID(request.params.id);
            result.json(destinations);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération du client par ID" });
        }
    }
    async addDestinations (request, result) {
        try {
            const destinations = await destinationsService.addDestinations(request.body);
            result.json(destinations);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de l'ajout de la destination" });
        }
    }
    async deleteDestinations(request, result) {
        try {
            const destinations = await destinationsService.deleteDestinations(request.params.id);
            if (destinations > 0) {
                result.json({ message: "Destination supprimée avec succès" });
            } else {
                result.status(404)
                result.json({ error: "Destination non trouvée" });
            }
        } catch (error) {
            result.status(500)
            result.json({ error: "Une erreur est survenue lors de la suppression de la destination" });
        }
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new destinationsController();