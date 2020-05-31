const express = require("express");
const conexion = require("../Configuraciones/ConexionDB");

const Router = express.Router();

Router.get("/", (req, res) => {
    return conexion.query("select * from innercityhealth.tbl_tipo_usuario",
        (err, filas, campos) => {
            res.send(filas);
        });
});

module.exports = Router;