// Importation du models
const destinations = require('../models/destinations');

// Création de la classe avec le même nom que le fichier
class destinationsService {
    // Fonction qui va chercher toutes les catégories dans la bdd 
    async getAllDestinations() {
        return await destinations.findAll();
    }
    async getDestinationsByID(destinationsID) {
        return await destinations.findByPk(destinationsID);
    }
    async addDestinations(destination) {
        // Équivalent du insert into () values ();
        return await destinations.create(destination);
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new destinationsService();