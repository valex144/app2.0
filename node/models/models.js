//Tenemos que definir 1 modelo pq solo hay una entidad

//se tienen q definir tantos modelos como entidades existan + sus relaciones
// n a n. (En algunos casos).

const {Sequelize, DataTypes} = require('sequelize');
const {database} = require('../database/db');

console.log(database);