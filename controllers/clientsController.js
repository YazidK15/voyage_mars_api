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
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new clientsController();