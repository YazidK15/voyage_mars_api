// Importation du models
const categories = require('../models/categories');

// Création de la classe avec le même nom que le fichier
class categoriesService {
    // Fonction qui va chercher toutes les catégories dans la bdd 
    async getAllCategories() {
        return await categories.findAll();
    }
}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new categoriesService();