const express = require('express');
const categoriesController = require('../controllers/categoriesController');

// Constante pour pouvoir spécifier des routes
const router = express.Router();

// Toutes les routes seront précédé par /categories
router.get('/', (request, result) => {categoriesController.getAllCategories(request, result)});
router.get('/:id', (request, result) => {categoriesController.getCategoriesByID(request, result)});
router.post('/', (request, result) => {categoriesController.addCategories(request, result)});
router.delete('/:id', (request, result) => { categoriesController.deleteCategories(request, result) });
router.patch('/:id', (request, result) => { categoriesController.updateCategories(request, result) });

// Exportation pour utilisation dans d'autres fichiers
module.exports = router;