const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');

class categories extends Model{

}

categories.init({
    CA_ID : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    CA_Libelle : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    // On appel sequelize pour qu'il aille bien chercher la table dans la dbb voyage_mars
    sequelize,
    // Nom de la classe
    modelName : "categories",
    // Nom de la table dans la bdd
    tableName : "categories",
    // On désactive les champs createdAt et updatedAt (auto générés par Sequelize)
    timestamps : false
})

// Exportation pour utilisation dans d'autres fichiers
module.exports = categories;