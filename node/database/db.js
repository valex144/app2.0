const { Sequelize } = require("sequelize");

const database = new Sequelize('peliculas', 'root','123456', {
    host: 'localhost',
    dialect: 'mysql'
}
);

module.exports.database = database;

//
//try{
//    database.authenticate();
//    console.log("Conectado");

//}catch(error){
//   console.log("Algo anda mal, revísame")
//}
