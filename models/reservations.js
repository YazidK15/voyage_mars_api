const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');
const clients = require('./clients');
const destinations = require('./destinations');

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
        allowNull : false,
        references : {
            model : destinations,
            key : "DE_ID"
        }
    },
    CL_ID : {
        type : DataTypes.INTEGER,   
        allowNull : false,
        references : {
            model : clients,
            key : "CL_ID"
        }
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

// Permet d'afficher TOUTES LES réservations du client sur la fiche client (+ include dans service)
clients.hasMany(reservations, {as : "reservations", foreignKey: "CL_ID"}); 
// Permet d'afficher LE SEUL client sur la fiche réservation (+ include dans service)
reservations.belongsTo(clients, {as : "clients", foreignKey: "CL_ID"});

// Permet d'afficher TOUTES les réseervations d'une destination
destinations.hasMany(reservations, {as : "reservations", foreignKey: "DE_ID"});
// Permet d'afficher LA SEULE destination d'une reservation 
reservations.belongsTo(destinations, {as : "destinations", foreignKey: "DE_ID"});

// Exportation pour utilisation dans d'autres fichiers
module.exports = reservations;