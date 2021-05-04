const { response } = require("express");
const constantes = require('../utils/constantes');
const Destinatario = require('../models/destinatario');

const crearDestinatario = async( req, res = response) => {

    const { rutCliente, rut, bancoDestino, tipoCuenta } = req.body;

    try{

        const destinatario = await Destinatario.findOne({ rutCliente, rut, bancoDestino, tipoCuenta });


        if( destinatario ){
            return res.status(400).json({
                ok: false,
                message: constantes.ERROR_DESTINATARIO_EXISTE
            });
        }
        
        const dbDestinatario = new Destinatario( req.body );

        await dbDestinatario.save();

        return res.status(200).json({
            ok: true,
            message: constantes.SUCCESS_DESTINATARIO_CREADO
        });

    }catch ( error ){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: constantes.ERROR_GENERAL
        });
    }
}

const getDestinatarios = async( req, res = response) => {

    const { rutCliente } = req.query;

    console.log(rutCliente);

    try{

        const destinatarios = await Destinatario.find({ 'rutCliente': rutCliente });


        if( destinatarios.length == 0 ){
            return res.status(404).json({
                ok: false,
                message: constantes.DESTINATARIOS_NOT_FOUND
            });
        }

        return res.status(200).json({
            ok: true,
            destinatarios: destinatarios
        });

    }catch ( error ){
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: constantes.ERROR_GENERAL
        });
    }
}

module.exports = {
    crearDestinatario,
    getDestinatarios
}