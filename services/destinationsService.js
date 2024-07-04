// Importation du models
const destinations = require('../models/destinations');

// Création de la classe avec le même nom que le fichier
class destinationsService {
    // Fonction qui va chercher toutes les catégories dans la bdd 
    async getAllDestinations() {
        return await destinations.findAll();
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new destinationsService();