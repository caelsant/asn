const Sequelize = require('sequelize');

const db = new Sequelize(
    "asn",
    "root",
    "6632",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

db.authenticate().then(
    function(){
        console.log("Conectado com o db co sucesso");
    }
).catch(
    function(err){
        console.log("Nao foi possivel conectar " + err)
    }
)


module.exports = {
    Sequelize: Sequelize,
    db: db
}

