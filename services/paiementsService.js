// Importation du models
const paiements = require('../models/paiements');

// Création de la classe avec le même nom que le fichier
class paiementsService {
    // Fonction qui va chercher toutes les catégories dans la bdd 
    async getAllPaiements() {
        return await paiements.findAll();
    }
    async getPaiementsByID(paiementsID) {
        return await paiements.findByPk(paiementsID);
    }
    async addPaiements(paiement) {
        // Équivalent du insert into () values ();
        return await paiements.create(paiement);
    }
    async deletePaiements(id) {
        // Équivalent du DELETE FROM reservations WHERE id = ?;
        return await paiements.destroy({ where: { PA_ID:id } });
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new paiementsService();