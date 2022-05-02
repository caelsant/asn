const Sequelize = require('sequelize');

const db = new Sequelize(
    "ejsdb",
   "admin",
   "66325489", {
    host: "ejs-db-2.c1c2ntdfepv4.sa-east-1.rds.amazonaws.com",
    dialect: "mysql"}
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

