// Importation
const paiementsService = require('../services/paiementsService');

class paiementsController {

    // Permet de créer une fonction SELECT * qui va essayer de récupérer les différents paiements
    // On mettra toujours ces 2 paramètres
    async getAllPaiements(request, result){
        try {
            const paiements = await paiementsService.getAllPaiements();
            // result.json permet d'afficher les informations sur la page (un peu similaire à l'echo en php)
            result.json(paiements);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération des paiements"});
        }
    } 
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new paiementsController();