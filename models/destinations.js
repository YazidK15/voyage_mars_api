const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
const categories = require('./categories');

class destinations extends Model{

}

destinations.init({
    DE_ID : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    DE_Libelle : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    DE_Description : {
        type : DataTypes.TEXT,
        allowNull : true
    },
    DE_Prix : {
        type : DataTypes.DECIMAL(11,2),
        allowNull : false
    },
    DE_Disponibilite : {
        type : DataTypes.TINYINT(1),
        allowNull : false
    },
    CA_ID : {
        type : DataTypes.INTEGER,
        allowNull : true,
        references : {
            model : categories,
            key : "CA_ID"
        }
    }
},{
    // On appel sequelize pour qu'il aille bien chercher la table dans la dbb voyage_mars
    sequelize,
    // Nom de la classe
    modelName : "destinations",
    // Nom de la table dans la bdd
    tableName : "destinations",
    // On désactive les champs createdAt et updatedAt (auto générés par Sequelize)
    timestamps : false
})

// Permet d'afficher TOUTES les destinations dans catégories
categories.hasMany(destinations, {as: 'destinations', foreignKey: 'CA_ID'});
// Permet d'afficher LA SEULE categories dans destinations
destinations.belongsTo(categories, {as: 'categories', foreignKey: 'CA_ID'});

// Exportation pour utilisation dans d'autres fichiers
module.exports = destinations;