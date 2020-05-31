const express = require("express");
const conexion = require("../Configuraciones/ConexionDB");

const Router = express.Router();

Router.get("/", (req, res) => {
    return conexion.query("select * from innercityhealth.tbl_transporte",
        (err, filas, campos) => {
            if (!err) {
                res.send(filas);
            } else {
                res.status(400).json({
                    ok: false,
                    mensaje: 'error al listar transportes',
                    errors: err
                });
            }
        });
});

Router.post("/", (req, res) => {

    var transporteNuevo = req.body;

    return conexion.query('INSERT INTO innercityhealth.tbl_transporte set ?', transporteNuevo, (err, transporte) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'error al crear transporte',
                errors: err
            });
        }
        res.status(201).json({
            ok: true,
        });
    })
});

// Router.put("/:id", (req, res) => {

//     const { id } = req.params;
//     var transporteActual = req.body;

//     return conexion.query("UPDATE innercityhealth.tbl_transporte where numero_matricula like '%${transporteActual.numero_matricula}%'" + id,
//         [transporteActual, id], (err, transporteActualizado) => {
//             if (err) {
//                 return res.status(400).json({
//                     ok: false,
//                     mensaje: 'error al actualizar transporte',
//                     errors: err
//                 });
//             }
//             res.status(201).json({
//                 ok: true,
//             });
//         })
// });

module.exports = Router;