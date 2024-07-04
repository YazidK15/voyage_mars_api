// Importation du models
const reservations = require('../models/reservations');

// Création de la classe avec le même nom que le fichier
class reservationsService {
    // Fonction qui va chercher toutes les catégories dans la bdd 
    async getAllReservations() {
        return await reservations.findAll();
    }
    async getReservationsByID(reservationsID) {
        return await reservations.findByPk(reservationsID);
    }
    async addReservations(reservation) {
        // Équivalent du insert into () values ();
        return await reservations.create(reservation);
    }
    async deleteReservations(id) {
        // Équivalent du DELETE FROM reservations WHERE id = ?;
        return await reservations.destroy({ where: { RE_ID:id } });
    }
    
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new reservationsService();