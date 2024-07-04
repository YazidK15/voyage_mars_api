const clientsService = require('../services/clientsService');

class clientsController {

    // Permet de faire un SELECT * , on mettra toujours ces 2 paramètres
    async getAllClients(request, result){
        try {
            const clients = await clientsService.getAllClients();
            result.json(clients);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération des clients"});
        }
    } 

    async getClientsByID (request, result) {
        try {
            const clients = await clientsService.getClientsByID(request.params.id);
            result.json(clients);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération du client par ID" });
        }
    }
    async addClients (request, result) {
        try {
            const clients = await clientsService.addClients(request.body);
            result.json(clients);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de l'ajout du client" });
        }
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new clientsController();