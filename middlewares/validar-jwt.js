const { response } = require("express");
const jwt = require('jsonwebtoken');
const constantes = require('../utils/constantes');


const validarJWT = ( req, res = response, next ) => {

    const token = req.header('Authorization');

    if( !token ){
        return res.status(401).json({
            ok: false,
            message: constantes.ERROR_TOKEN
        });
    }

    try {
        
        const { uid, rut } = jwt.verify(token, process.env.SECRET_KEY);
        req.uid = uid;
        req.rut = rut;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            message: constantes.ERROR_TOKEN
        });
    }

    next();
}

module.exports = {
    validarJWT
}