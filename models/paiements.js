const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/Sequelize');
const reservations = require('./reservations');


class paiements extends Model{

}

paiements.init({
    PA_ID : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement :true
    },
    PA_Montant : {
        type : DataTypes.DECIMAL,
        allowNull : false
    },
    PA_DatePaiement : {
        type : DataTypes.DATE,
        allowNull : false,
        defaultValue : new Date()
    },
    PA_Methode : {
        type : DataTypes.STRING,
        allowNull : false
    },
    PA_Statut : {
        type: DataTypes.STRING,
        allowNull : false
    }    
},{
    // On appel sequelize pour qu'il aille bien chercher la table dans la dbb voyage_mars
    sequelize,
    // Nom de la classe
    modelName : "paiements",
    // Nom de la table dans la bdd
    tableName : "paiements",
    // On désactive les champs createdAt et updatedAt (auto générés par Sequelize)
    timestamps : false
})

// Définir la table de jonction regler 
const regler = sequelize.define('regler', {
}, {
    sequelize,
    modelName: 'regler',
    tableName: 'regler',
    timestamps: false
});

// Permet d'afficher TOUTES les reservations d'un paiement et tous les paiements d'une réservation
paiements.belongsToMany(reservations, {as: 'reservations', foreignKey: 'PA_ID', through: regler})
reservations.belongsToMany(paiements, {as: 'paiements', foreignKey: 'RE_ID', through: regler})

// Exportation pour utilisation dans d'autres fichiers
module.exports = paiements;