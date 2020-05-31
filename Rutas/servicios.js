const express = require("express");
const conexion = require("../Configuraciones/ConexionDB");

const Router = express.Router();

Router.get("/", (req, res) => {
    return conexion.query("select * from innercityhealth.tbl_servicio",
        (err, filas, campos) => {
            if (!err) {
                res.send(filas);
            } else {
                res.status(400).json({
                    ok: false,
                    mensaje: 'error al listar usuarios',
                    errors: err
                });
            }
        });
});

Router.post("/", (req, res) => {

    var servicioNuevo = req.body;

    return conexion.query('INSERT INTO innercityhealth.tbl_servicio set ?', servicioNuevo, (err, servicio) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'error al crear servicio',
                errors: err
            });
        }
        res.status(201).json({
            ok: true,
        });
    })
});

Router.put("/:id", (req, res) => {

    const { id } = req.params;
    var servicioActual = req.body;

    return conexion.query('UPDATE innercityhealth.tbl_servicio set ? where id = ?',
        [servicioActual, id], (err, servicioActualizado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'error al actualizar servicio',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
            });
        })
});

module.exports = Router;