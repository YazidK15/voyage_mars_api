const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');

class reservations extends Model{

}

reservations.init({
    RE_ID : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    RE_DateReservation : {
        type : DataTypes.DATE,
        allowNull : false
    },
    RE_DateDebut : {
        type : DataTypes.DATE,
        allowNull : false
    },
    RE_DateFin: {
        type : DataTypes.DATE,
        allowNull : false
    },
    DE_ID : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    CL_ID : {
        type : DataTypes.INTEGER,   
        allowNull : false
    }
},{
    // On appel sequelize pour qu'il aille bien chercher la table dans la dbb voyage_mars
    sequelize,
    // Nom de la classe
    modelName : "reservations",
    // Nom de la table dans la bdd
    tableName : "reservations",
    // On désactive les champs createdAt et updatedAt (auto générés par Sequelize)
    timestamps : false
})

// Exportation pour utilisation dans d'autres fichiers
module.exports = reservations;