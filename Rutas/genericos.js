const express = require("express");
const conexion = require("../Configuraciones/ConexionDB");

const Router = express.Router();

Router.get("/asegurador", (req, res) => {
    return conexion.query("SELECT * FROM innercityhealth.tbl_asegurador",
        (err, filas, campos) => {
            if (!err) {
                res.send(filas);
            } else {
                res.status(400).json({
                    ok: false,
                    mensaje: "Error al listar aseguradores",
                    errors: err
                });
            }
        });
});

Router.get("/tipoServicio", (req, res) => {
    return conexion.query("SELECT * FROM innercityhealth.tbl_tipo_servicio",
        (err, filas, campos) => {
            if (!err) {
                res.send(filas);
            } else {
                res.status(400).json({
                    ok: false,
                    mensaje: "Error al listar tipos de servicio",
                    errors: err
                });
            }
        });
});

Router.get("/tipoUsuario", (req, res) => {
    return conexion.query("SELECT * FROM innercityhealth.tbl_tipo_usuario",
        (err, filas, campos) => {
            if (!err) {
                res.send(filas);
            } else {
                res.status(400).json({
                    ok: false,
                    mensaje: "Error al listar tipos de usuario",
                    errors: err
                });
            }
        });
});

Router.get("/estadoServicio", (req, res) => {
    return conexion.query("SELECT * FROM innercityhealth.tbl_estado_servicio",
        (err, filas, campos) => {
            if (!err) {
                res.send(filas);
            } else {
                res.status(400).json({
                    ok: false,
                    mensaje: "Error al listar estados de servicio",
                    errors: err;
                });
            }
        });
});

module.exports = Router;