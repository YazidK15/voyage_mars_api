// Importation du models
const clients = require('../models/clients');

// Création de la classe
class clientsService {

    async getAllClients() {
        return await clients.findAll();
    }

    async getClientsByID(clientsID) {
        return await clients.findByPk(clientsID);
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new clientsService();