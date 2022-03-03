const{ModeloPelicula} = require('./models');

//la funcion para mostrar las instancias
//sql: select * from table


const getAllMovies = async(req,res) =>{
    try{
        const peliculas = await ModeloPelicula.findAll();
        res.json(Peliculas);
    }catch(error){
        res.json({message: 'No se encontraron instancias'})
    }
}


// la función para mostrar solo una instancia
//sql: select * from table where id_pelicula = 1


const getOneMovie = async(req,res) =>{
    try{
        const pelicula_unica = await ModeloPelicula.findAll({where: {id: req.params.id}});
        res.json(Pelicula_unica);
    }catch(error){
        res.json({message: 'No se encontraron instancias'})
    }
}



// la función para crear un registro
// sql: insert into table .. {'300', ...}

const createOneMovie = async(req,res)=>{
    try{
        await ModeloPelicula.create(req.body);
        res.json({message: "Registro creado satisfactoriamente"});
    }catch(error){
        res.json({message: "No se ha realizado ningún registro"})
    }
}

//la función para actualizar un resgistro

const updateOneMovie = async(req,res)=>{
    try{
        await ModeloPelicula.update(req.body({
            where: {id: req.params.id}
        }));
        res.json({message: "Registro actualizado"});
    }catch(error){
        res.json({message: "No se ha podido actualizar el resgistro"})
    }
}

//la función para eliminar un registro (=> ModeloPelicula)

const deleteOneMovie = async(req,res)=>{
    try{
        await ModeloPelicula.destroy({
            where: {id: req.params.id}
        });
        res.json({message: "Eliminado correctamente"});
    }catch(error){
        res.json({message: "No se pudo eliminar"})
    }
}

module.exports = {getAllMovies,getOneMovie,createOneMovie,updateOneMovie, deleteOneMovie}


