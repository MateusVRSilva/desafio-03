
const { DataTypes, INTEGER } = require("sequelize");
const Pacientes = require("../controllers/usuarios");
 const database = require("../services/database")

const pacientes = database.define(
"Pacientes", {
     
   nome: {
    type: DataTypes.STRING(255),
    allowNull: false,

   }, 
   email: {
    type: DataTypes.STRING(255),
    allowNull: false,
   },
    
}, {
    tableName: 'pacientes',
    timestamps: false,
   }
    
        
);

module.exports = pacientes;
