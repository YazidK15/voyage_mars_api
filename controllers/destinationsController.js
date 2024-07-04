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
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new destinationsController();