// Importation
const categoriesService = require('../services/categoriesService');

class categoriesController {

    // Permet de créer une fonction SELECT * qui va essayer de récupérer les différentes catégories
    // On mettra toujours ces 2 paramètres
    async getAllCategories(request, result){
        try {
            const categories = await categoriesService.getAllCategories();
            // result.json permet d'afficher les informations sur la page (un peu similaire à l'echo en php)
            result.json(categories);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération des catégories"});
        }
    } 
    async getCategoriesByID (request, result) {
        try {
            const categories = await categoriesService.getCategoriesByID(request.params.id);
            result.json(categories);
        } catch (error) {
            result.status(500);
            result.json({ error: "Une erreur est survenue lors de la récupération de la catégorie par ID" });
        }
    }
    async addCategories (request, result) {
        try {
            const categories = await categoriesService.addCategories(request.body);
            result.json(categories);
        } catch (error) {
            result.status(500);
            console.log(error);
            result.json({ error: "Une erreur est survenue lors de l'ajout de la catégorie" });
        }
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new categoriesController();