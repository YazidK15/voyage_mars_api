const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');

// Le nom de la case doit avoir le même nom que le fichier
class clients extends Model{

}

clients.init ({
    CL_ID : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    CL_Nom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_Prenom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_Adresse : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_CodePostal : {
        type : DataTypes.CHAR,
        allowNull : false,
        length : 7
    },
    CL_Ville : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_Mail : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    CL_Telephone : {
        type : DataTypes.CHAR,
        allowNull : false,
        unique : true,
        length : 13
    }
},{
    sequelize,
    modelName : "clients",
    tableName : "clients",
    timestamps : false
})

// Exportation pour utilisation dans d'autres fichiers
module.exports = clients;