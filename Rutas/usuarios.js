const express = require("express");
const conexion = require("../Configuraciones/ConexionDB");

const Router = express.Router();

Router.get("/", (req, res)=>{
    return conexion.query("select * from innercityhealth.tbl_usuario",
    (err, filas, campos)=>{
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

    var usuarioNuevo = req.body;

    return conexion.query('INSERT INTO innercityhealth.tbl_usuario set ?', usuarioNuevo, (err, usuario) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'error al crear usuarios',
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
    var usuarioActual = req.body;

    return conexion.query('UPDATE innercityhealth.tbl_usuario set ? where id_nacional = ?', [usuarioActual, id], (err, usuarioActualizado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'error al actualizar usuarios',
                errors: err
            });
        }
        res.status(201).json({
            ok: true,
        });
    })
});

module.exports = Router;