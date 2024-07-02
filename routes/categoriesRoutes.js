const express = require('express');
const categoriesController = require('../controllers/categoriesController');

// Constante pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /categories
router.get('/', (request, result) => {categoriesController.getAllCategories(request, result)});

// Exportation pour utilisation dans d'autres fichiers
module.exports = router;