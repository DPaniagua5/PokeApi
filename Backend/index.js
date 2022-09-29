const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');

//Creación de api
const app = express();

//Asignación de puerto
app.set('port',7000);

//Función en la PC
app.listen(7000);
 // usando morgan para middlewares
 app.use(morgan('dev')); // para poder visualizar los estados de nuestro servidor
 app.use(express.json()); // para poder manejar los json
 app.use(cors());

//Routers
//Principal (Login)
app.post('/login', (req, res)=>{
    console.log(req.body);
    
    var usser = req.body.usser;
    var pass = req.body.pass;
    let usuarios = require('./Usuarios.json');

    for(var i = 0; i<usuarios.length; i++) {
        if (usser == usuarios[i].Usuario && pass == usuarios[i].Password) {
            res.send({"Respuesta":"1"});
        } 
    }  
})

//Pokemones de la pokedex
app.get('/pokedex',(req,res)=>{
    let pokedex = require('./Pokedex.json');
    res.send(pokedex);
});

//Usuarios existentes
app.get('/usuarios',(req,res)=>{
    let usuarios = require('./Usuarios.json');
    res.send(usuarios);
});

//Busqueda por numero
app.post('/numero', (req, res)=>{
    console.log(req.body);
    let pokedex = require('./Pokedex.json');
    var num = req.body.num;

for(var i = 0; i<pokedex.length; i++){
    if (num == pokedex[i].Numero){
        res.send(pokedex[i]);
    }
}
})

//Busqueda por nombre
app.post('/nombre', (req, res)=>{
    console.log(req.body);
    let pokedex = require('./Pokedex.json');
    var nom = req.body.nom;

for(var i = 0; i<pokedex.length; i++){
    if (nom == pokedex[i].Nombre){
        res.send(pokedex[i]);
    }
}
})

//Busqueda por tipo
app.post('/tipo', (req, res)=>{
    console.log(req.body);
    let pokedexA = require('./PAgua.json');
    let pokedexF = require('./PFuego.json');
    let pokedexH = require('./PHierva.json');
    var type = req.body.type

    if (type == "Agua" ){
        res.send(pokedexA);
    }else if(type == "Fuego" ){
        res.send(pokedexF);
    }else if(type == "Hierva"){
        res.send(pokedexH);
}
})


