//aqui se define la ruta, se llamará ruta de inicio y como la exportamos al final, es un módulo, después lo vinculamos al index
const express = require('express');
const router = express.Router();
const {getAllMovies,getOneMovie,createOneMovie,updateOneMovie, deleteOneMovie}
= require('../models/fun_models');

//router.get('/', (req,res)=>{
 //   console.log("Paso 1 realizado")
//  res.send('<h1>Todo bien y funcionando</h1>')
//});


router.get('/', getAllMovies);
router.get('/:id', getOneMovie);
router.post('/', createOneMovie);
router.delete('/:id', deleteOneMovie);
router.put('/:id', updateOneMovie);

module.exports.inicio = router;