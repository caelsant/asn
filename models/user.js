
const { Sequelize } = require("./db.js");
const db = require("./db.js");

const User = db.db.define("usuarios", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    mensagem: {
        type: Sequelize.STRING
    }
})



module.exports = User;