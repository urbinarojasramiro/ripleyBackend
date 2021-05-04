const { response } = require("express");
const constantes = require('../utils/constantes');
const Usuario = require('../models/user');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario = async( req, res = response) => {

    const { rut, nombre, password } = req.body;

    try{

        const usuario = await Usuario.findOne({ rut });


        if( usuario ){
            return res.status(400).json({
                ok: false,
                message: constantes.ERROR_USUARIO_EXISTE
            });
        }
        
        const dbUser = new Usuario( req.body );

        const salt = bcrypt.genSaltSync();

        dbUser.password = bcrypt.hashSync( password, salt );

        const token = await generarJWT( dbUser.id, rut );

        await dbUser.save();

        return res.status(200).json({
            ok: true,
            message: constantes.SUCCESS_USUARIO_CREADO,
            uid: dbUser.id,
            rut,
            nombre,
            token
        });

    }catch ( error ){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: constantes.ERROR_GENERAL
        });
    }
}

const login = async( req, res = response) => {

    const { rut, password } = req.body;

    try{
        
        const dbUser = await Usuario.findOne({ rut });

        if( !dbUser ){
            return res.status(400).json({
                ok: false,
                message: constantes.ERROR_USUARIO_NO_EXISTE
            });
        }

        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if( !validPassword ){
            return res.status(400).json({
                ok: false,
                message: constantes.ERROR_PASSWORD
            });
        }

        const token = await generarJWT( dbUser.id, dbUser.rut );

        return res.status(200).json({
            ok: true,
            message: constantes.SUCCESS_LOGIN,
            uid: dbUser.id,
            rut,
            nombre : dbUser.nombre,
            token
        });

    }catch ( error ){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: constantes.ERROR_GENERAL
        });
    }
}

const revalidarToken = async(req, res = response ) => {

    const { uid, rut } = req;

    const token = await generarJWT( uid, rut );

    return res.json({
        ok: true,
        uid, 
        rut,
        token
    });

}


module.exports = {
    crearUsuario,
    login,
    revalidarToken
}