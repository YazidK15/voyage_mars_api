// Importation du models
const clients = require('../models/clients');

// Création de la classe
class clientsService {

    async getAllClients() {
        return await clients.findAll();
    }

    async getClientsByID(clientsID) {
        return await clients.findByPk(clientsID, {include: 'reservations'}); // l'include permet de venir chercher toutes les réservations liées au client
    }
    async addClients(client) {
        // Équivalent du insert into () values ();
        return await clients.create(client);
    }
    async deleteClients(id) {
        // Équivalent du DELETE FROM clients WHERE id = ?;
        return await clients.destroy({ where: { CL_ID:id } });
    }
    async updateClients(id, client) {
        return await clients.update (client, { where: { CL_ID:id } });
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new clientsService();