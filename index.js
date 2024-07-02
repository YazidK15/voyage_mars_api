const express = require('express');
const clientsRoutes = require('./routes/clientsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const app = express();
const port = 3001;

// Précise que notre API va fonctionner avec du JSON
app.use(express.json());

// 5 types de requetes possibles => GET, POST, PUT, DELETE, PATCH

// Premier paramètre est la route pour accéder aux données
// Deuxieme parametre est la fonction flechée qui va faire le traitement, elle prend toujours 2 paramètres (request et result)
app.get('/hello', (request, result)=> {
    // Envoie les données à l'utilisateur
    result.send('Hello, world');
})

app.use('/clients', clientsRoutes);
app.use('/categories', categoriesRoutes);

// Premier paramètre le port sur lequel le serveur va écouter
// Deuxieme paramètre une fonction flechée qui est faites au lancement du serveur
app.listen(port, ()=>{
    console.log("Votre serveur est lancé sur http://127.0.0.1:"+port);
})