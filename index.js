var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cors
app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//importar rutas
var usuariosRoutes = require("./Rutas/usuarios");

//body parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//rutas
app.use('/usuarios', usuariosRoutes);

//escuchar peticiones
app.listen(3001, ()=>{
    console.log('-----Puerto 3001: \x1b[32m%s\x1b[0m', 'online', '-----');
});