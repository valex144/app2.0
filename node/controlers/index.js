// lugar de configuracion de nuestro servidor...

//impportamos express

const express = require('express');
const routes = require('../routs/routs');
const {database} = require('../database/db');
//Express: es una clase o objeto configurable (es como un jason), de tipo de clase: servidor http o https q se vincula
// a un requerimiento.
//NOTA: se necesita crear una instancia

const server_app = express();   //inicializando la instancia del servidor

server_app.set('port', process.env.PORT||4000);

try{
    database.authenticate();
    console.log("Conectado");
}catch(error){
    console.log("Algo está mal")
};


server_app.listen(server_app.get('port'),()=>{
    console.log('server on port', server_app.get('port'))
})



server_app.use('/movie',routes.inicio);
console.log("Terminado al final")
