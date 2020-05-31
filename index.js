var express = require('express');
var bodyParser = require('body-parser');
const conexion = require("./Configuraciones/ConexionDB");

var app = express();

port = process.env.PORT || 80
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`-----Puerto : ${PORT}\x1b[32m%s\x1b[0m`, ' online', '-----'));

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
var serviciosRoutes = require("./Rutas/servicios");
var transportesRoutes = require("./Rutas/transportes");
var loginRoutes = require("./Rutas/login");
var tiposUsuarioRoutes = require("./Rutas/tipos_usuario");
var aseguradorasRoutes = require("./Rutas/aseguradoras");

//body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//rutas
app.use('/usuarios', usuariosRoutes);
app.use('/servicios', serviciosRoutes);
app.use('/transportes', transportesRoutes);
app.use('/login', loginRoutes);
app.use('/tipos', tiposUsuarioRoutes);
app.use('/aseguradoras', aseguradorasRoutes);