//aqui se define la ruta, se llamará ruta de inicio y como la exportamos al final, es un módulo, después lo vinculamos al index
const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    console.log("Paso 1 realizado")
    res.send('<h1>Todo bien y funcionando</h1>')
});

module.exports.inicio = router;