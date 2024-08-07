// Importation du models
const categories = require('../models/categories');

// Création de la classe avec le même nom que le fichier
class categoriesService {
    // Fonction qui va chercher toutes les catégories dans la bdd 
    async getAllCategories() {
        return await categories.findAll();
    }
    async getCategoriesByID(categoriesID) {
        return await categories.findByPk(categoriesID);
    }
    async addCategories(categorie) {
        // Équivalent du insert into (ca_libelle) values ("test catégories");
        return await categories.create(categorie);
    }
    async deleteCategories(id) {
        // Équivalent du DELETE FROM categories WHERE id = ?;
        return await categories.destroy({ where: { CA_ID:id } });
    }
    async updateCategories(id, categorie) {
        return await categories.update (categorie, { where: { CA_ID:id } });
    }

}

// Exportation pour utilisation dans d'autres fichiers
module.exports = new categoriesService();