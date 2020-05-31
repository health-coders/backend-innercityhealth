const express = require("express");
const conexion = require("../Configuraciones/ConexionDB");

const Router = express.Router();

Router.get("/", (req, res) => {

    var login = req.body;
    console.log(login);

    return conexion.query(`select * from innercityhealth.tbl_usuario where email like '%${login.email}%' and contrasena = '${login.contrasena}'`,
        (err, resp) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'credenciales incorrectas',
                    errors: err
                });
            } else {
                if (Object.keys(resp).length===0) {
                    console.log('Credenciales incorrectas');
                } else {
                    console.log('logeado');
                }
            }
        })
});

module.exports = Router;