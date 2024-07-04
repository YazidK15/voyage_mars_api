// Importation du models
const reservations = require('../models/reservations');

// Création de la classe avec le même nom que le fichier
class reservationsService {
    // Fonction qui va chercher toutes les catégories dans la bdd 
    async getAllReservations() {
        return await reservations.findAll();
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new reservationsService();